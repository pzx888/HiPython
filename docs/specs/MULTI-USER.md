# Spec: 本地多用户切换

> **状态**: 已批准并实现（2026-06-24）  
> **日期**: 2026-06-24

---

## Objective

在同一台电脑、同一个浏览器里，让**多个学习者各自拥有独立的学习进度**，并支持快速切换。

**典型场景**

- 家里两个孩子共用一台电脑学 Python
- 家长偶尔试用，不想覆盖孩子的进度
- 浏览器 LocalStorage 里目前只有一份 `hipython:progress`，后使用者会「继承」前一个人的记录

**用户故事**

| 角色 | 故事 | 验收 |
|------|------|------|
| 孩子 A | 我选自己的名字，看到的是我自己的星星和课程进度 | 切换后成就/课程完成状态与 A 一致 |
| 孩子 B | 哥哥学完了 L3，但我从 L1 开始，互不影响 | B 的进度独立于 A |
| 家长 | 第一次打开已有旧进度，不希望丢数据 | 旧进度自动迁移到第一个档案 |
| 任何人 | 我想加一个新人 | 输入名字即可创建，立刻可学 |

**不在范围内（YAGNI）**

- 账号登录 / 密码 / PIN
- 云端同步、跨设备
- 家长后台、学习报表导出
- 头像上传（图片文件）

---

## Tech Stack

与现有项目一致，**零新依赖**：

| 层 | 技术 |
|---|---|
| 状态 | React Context + 现有 `useLocalStorage` |
| 持久化 | `localStorage`（按用户分 key） |
| UI | TopNav 下拉 + 简单 Modal，CSS Modules |

---

## Commands

```bash
cd d:/work/workspace/HiPython
npm run dev                          # 本地验证切换
npx tsc --noEmit                     # 类型检查
npm run build                        # 构建
npm run deploy                       # 上线（无额外步骤）
```

---

## Project Structure

```
src/
  context/
    UserProfileContext.tsx     ← 新增：档案列表 + 当前用户 + 切换/创建/删除
  hooks/
    useLocalStorage.ts         ← 小改：支持动态 key（或新增 useProfileStorage）
    useProgress.ts             ← 改：进度 key 绑定当前 profileId
  components/
    layout/
      TopNav.tsx               ← 改：显示当前用户 + 切换入口
      TopNav.module.css
      UserSwitcher.tsx         ← 新增：下拉/弹层组件
      UserSwitcher.module.css
  types/
    index.ts                   ← 新增 UserProfile 类型
  App.tsx                      ← 包一层 UserProfileProvider
docs/specs/
  MULTI-USER.md                ← 本文档
```

---

## 数据模型

### 新增类型

```typescript
/** A local learner profile (no auth) */
export interface UserProfile {
  id: string;           // uuid 或 nanoid 风格短 id
  name: string;         // 显示名，1~12 字
  emoji: string;        // 头像 emoji，默认 🐍
  createdAt: string;    // ISO date
}
```

### LocalStorage Key 设计

| Key | 内容 | 说明 |
|-----|------|------|
| `hipython:profiles` | `UserProfile[]` | 所有档案 |
| `hipython:currentProfileId` | `string` | 当前选中档案 id |
| `hipython:progress:{profileId}` | `UserProgress` | **每用户一份**进度 |
| ~~`hipython:progress`~~ | — | 迁移后保留只读备份或删除 |

**隔离范围**（全部按 profile 分）：

- 课程完成 / 星星 / 草稿代码（`completedLessons`）
- 成就徽章（`unlockedBadges`）
- 打字练习统计（`typingStats`）

Pyodide 引擎、课程设置等**全局共享**，不 per-user。

### 旧数据迁移（一次性）

首次加载检测到 `hipython:progress` 存在且 `hipython:profiles` 不存在时：

1. 创建默认档案 `{ name: "小朋友", emoji: "🐍" }`
2. 把旧 `hipython:progress` 复制到 `hipython:progress:{id}`
3. 设为当前用户
4. （可选）删除旧 key，或重命名为 `hipython:progress:__legacy__` 备查

---

## Code Style

Context + hook 模式，与现有 `useProgress` 一致：

```typescript
// UserProfileContext.tsx — 核心 API
interface UserProfileContextValue {
  profiles: UserProfile[];
  currentProfile: UserProfile;
  switchProfile: (id: string) => void;
  createProfile: (name: string, emoji?: string) => UserProfile;
  deleteProfile: (id: string) => void;  // 至少保留 1 个
  updateProfile: (id: string, patch: Partial<Pick<UserProfile, 'name' | 'emoji'>>) => void;
}

// useProgress.ts — 进度 key 随当前用户变化
const storageKey = `progress:${currentProfile.id}`;
const [progress, setProgress] = useLocalStorage<UserProgress>(storageKey, defaultProgress);
```

**切换用户时**：更新 `currentProfileId` → Context 通知 → `useProgress` 读新 key → 各页面自动刷新（课程地图、成就、首页星星等）。

若 `useLocalStorage` 初值只在 mount 时读一次，需在 `profileId` 变化时**同步 reload**（useEffect 读 localStorage 并 setState），或在 `AppShell` 对 `Outlet` 加 `key={profileId}` 强制 remount（更简单，首选）。

---

## UI 设计

### TopNav 右侧：用户切换器

```
🐍 HiPython    [导航…]              [🐱 小明 ▼]
```

点击展开：

```
┌─────────────────────┐
│ ✓ 🐱 小明           │
│   🦊 小红           │
│   🐼 爸爸           │
│ ─────────────────── │
│ ＋ 添加新用户        │
└─────────────────────┘
```

### 添加新用户 Modal

- 输入框：名字（必填，最多 12 字）
- Emoji 选择：6~8 个预设（🐍🐱🦊🐼🐸🦁🐰🐯），默认随机
- 按钮：「开始学！」→ 创建并切换

### 删除用户（可选 v1）

- 仅在档案 ≥ 2 时，hover/长按显示删除
- 二次确认：「确定删除「小红」的所有学习记录？」
- 删的是当前用户 → 自动切到列表第一个

### 成就页「重置进度」

- 文案改为：**重置当前用户的学习记录**
- 只清 `hipython:progress:{currentId}`，不影响其他档案

---

## Testing Strategy

无自动化测试框架。手动验收：

| # | 步骤 | 期望 |
|---|------|------|
| 1 | 清 LocalStorage，新用户 A 完成 L1-1 | A 有 1 课完成 |
| 2 | 添加用户 B，完成 L1-2 | B 只有 L1-2，A 仍只有 L1-1 |
| 3 | 切回 A | 显示 A 的星星和进度 |
| 4 | 刷新页面 | 仍停留在上次选中的用户 |
| 5 | 有旧 `hipython:progress` 的浏览器首次打开 | 自动迁移，进度不丢 |
| 6 | 重置当前用户进度 | 仅当前用户清空 |
| 7 | `npm run build` | 零错误 |

---

## Boundaries

### Always

- 进度严格按 profile 隔离
- 至少保留 1 个档案（不可删光）
- 名字去首尾空格，空名不可创建
- 切换后 UI 立即反映对应用户数据
- 迁移逻辑不能丢现有用户数据

### Ask first

- 档案数量上限（默认建议 **8 人**，超出提示）
- 是否需要 PIN 防止弟弟妹妹误删档案
- 删除档案功能是否 v1 就要

### Never

- 引入后端 / 数据库 / 新 npm 依赖
- 把多个用户进度合并到同一 key
- 无确认直接删除档案及其全部进度

---

## Success Criteria

**Must have**

- [ ] TopNav 显示当前用户（emoji + 名字），可打开切换列表
- [ ] 支持创建新用户（名字 + emoji）
- [ ] 切换用户后，课程进度、成就、打字数据互不影响
- [ ] 刷新页面后记住「当前选中的用户」
- [ ] 旧版单一 `hipython:progress` 自动迁移到第一个档案
- [ ] 「重置进度」仅作用于当前用户
- [ ] `tsc` + `build` 通过

**Nice to have**

- [ ] 编辑用户名 / emoji
- [ ] 删除档案（含确认）
- [ ] 首页欢迎语带名字：「你好，小明！」

---

## 实现计划（Phase 2 预览，待 Spec 批准后执行）

```
1. types + UserProfileContext + 迁移逻辑
2. useProgress 绑定 profileId（+ Outlet key remount）
3. UserSwitcher UI 挂到 TopNav
4. Achievements 重置文案 + 删除档案
5. 手动验收 + 更新 TASK.md
```

预估：**0.5~1 天**，约 6~8 个文件。

---

## Open Questions

请审阅时确认：

1. **档案上限**：默认最多 8 人，够吗？
2. **默认 emoji**：创建时随机分配，还是固定 🐍？
3. **删除档案**：v1 就要，还是以后再加？
4. **迁移默认名**：旧进度迁入的档案叫「小朋友」可以吗？还是弹窗让用户起名？
5. **PIN / 防误触**：需要吗？（建议不要，保持简单）
6. **Nice to have**：首页「你好，{名字}」要不要一起做？

---

## 假设清单

```
ASSUMPTIONS I'M MAKING:
1. 纯本地档案，无需登录
2. 用户是家长+孩子，信任环境下使用（无 PIN）
3. 每个档案对应一个真实学习者，不会频繁删建
4. 现有 useLocalStorage 命名空间 hipython: 不变
5. 部署流程与 L6 相同，无服务端变更
→ 请纠正或确认后继续 Plan / Implement。
```

---

## 下一步

| 阶段 | 状态 |
|------|------|
| Specify | 🟡 当前 — 等你审阅 |
| Plan | ⬜ |
| Tasks | ⬜ |
| Implement | ⬜ |

**请回复 Open Questions（或直接说「按默认做」），批准后我开始实现。**
