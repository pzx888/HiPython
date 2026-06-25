# Spec: L6 综合挑战 — L1~L5 阶段总结课程

> **状态**: 已批准并实现（2026-06-24）  
> **作者**: Agent + 用户  
> **日期**: 2026-06-24

---

## Objective

在 L1~L5 主课程（20 节）之后，新增 **L6 综合挑战** 阶段：不引入新概念，用 3~4 节结构化项目课让孩子**综合运用**已学知识，难度略高于普通课、低于竞技场极限挑战。

**用户故事**

- 作为孩子：我想做几个「像小游戏一样」的综合项目，做完后感觉「我真的会 Python 了」。
- 作为家长：我希望每节课有**明确的完成标准**（自动验证），而不是 L5 第 20 课那种几乎无约束的自由创作。
- 作为平台：L6 完成后应解锁新成就，并在课程地图上作为独立阶段展示。

**与 L5 第 20 课的关系**

| 课程 | 定位 | 验证强度 |
|------|------|----------|
| L5-20 我的作品展 | 自由毕业创作，鼓励探索 | 弱（3 条宽松 check） |
| L6 综合挑战 | 结构化阶段总结，逐项验收 | 强（每课 4~6 条 check，须全过才 3 星） |

L6 是 L5-20 之后的**进阶验收**，前置条件：完成 `l5_20`。

---

## Tech Stack

与现有项目一致，无新依赖：

| 层 | 技术 |
|---|---|
| 框架 | React 18 + TypeScript + Vite |
| 课程数据 | `Lesson` 类型 + TypeScript 常量文件 |
| 验证 | 现有 `CodeCheck` 四种类型（见下） |
| Python 运行时 | Pyodide 314（浏览器端） |

**现有验证能力**（不扩展引擎，优先够用）：

| type | 含义 | 示例 |
|------|------|------|
| `contains` | 源码含指定字符串 | `'if '`, `'def '`, `'import turtle'` |
| `output_contains` | 运行输出含指定字符串 | `'总计：'`, `'恭喜'` |
| `no_error` | 运行无 Python 错误 | — |
| `max_lines` | 非空行数 ≤ N | 竞技场已有先例（g5: 20 行） |

> **边界决策**：首版**不新增** check 类型（如 regex、变量值断言）。若某课验证不够，用更多 `contains` + `output_contains` 组合解决。若审阅后仍不够，再开 follow-up spec 扩展引擎。

---

## Commands

```bash
# 开发
cd d:/work/workspace/HiPython
npm run dev                    # http://localhost:5173

# 类型检查（改 types / 课程数据后必跑）
npx tsc --noEmit

# 构建验证
npm run build

# 部署（内容上线时）
npm run deploy
```

---

## Project Structure

```
src/data/courses/main/l6/          ← 新增 L6 课程文件
  lesson21.ts                      ← 第 21 课
  lesson22.ts
  lesson23.ts
  lesson24.ts                      ← 可选，见 Open Questions
  index.ts                         ← 导出 l6Lessons[]

src/data/courses/index.ts          ← 注册 l6Lessons
src/types/index.ts                 ← Difficulty 扩展为 1|2|3|4|5|6
src/components/lesson/CourseMap.tsx ← 新增 L6 阶段标题
src/data/achievements.ts           ← 新增 complete_l6 成就
docs/COURSES.md                    ← 新增 §3.6 L6 编写指南
docs/TASK.md                       ← 追加 L6 任务条目
```

课程文件遵循 [COURSES.md](../COURSES.md) 模板，`series: 'main'`, `difficulty: 6`。

---

## Code Style

与现有 L3~L5 课程文件一致：

```typescript
// src/data/courses/main/l6/lesson21.ts
import type { Lesson } from '../../../../types';

export const l6Lesson21: Lesson = {
  id: 'l6_21',
  title: '第21课：代码侦探',
  series: 'main',
  difficulty: 6,
  prerequisites: ['l5_20'],
  estimatedTime: 25,
  objectives: [/* 孩子能懂的目标 */],
  content: { intro: '...', sections: [...], summary: '...' },
  starterCode: '...',
  solution: '...',
  hints: ['...', '...', '...'],
  checks: [
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '运行后输出包含「破案成功」', type: 'output_contains', value: '破案成功' },
    { description: '代码可以正常运行', type: 'no_error' },
    // 每课 4~6 条
  ],
};
```

**L6 内容风格差异**（相对 L1~L5）：

- 每课**不教新概念**，intro 用「复习 + 挑战任务」开场
- `starterCode` 给 60~70% 骨架，孩子补全关键逻辑（比 L1 的 1 行 starter 多，比 solution 少）
- `checks` 数量 **4~6 条**，覆盖「结构要求 + 输出要求 + 无错误」
- 含 `input()` 的课：check 用 `contains` 验结构，`output_contains` 验孩子运行后的实际输出（与现有 L3 猜数字课一致）

---

## 课程内容草案（待审阅）

### L6-21：代码侦探 🔍

| 属性 | 内容 |
|------|------|
| **综合知识点** | 变量、print、for、字符串 |
| **任务** | 一段「侦探笔记」程序有 2~3 处故意留空/错误，孩子补全后输出线索，最终 print「破案成功！」 |
| **挑战点** | 读懂他人代码、找 bug、理解缩进 |
| **checks 示例** | `contains: 'for '`, `contains: 'if '`, `output_contains: '破案成功'`, `no_error` |

### L6-22：超市收银台 🛒

| 属性 | 内容 |
|------|------|
| **综合知识点** | 列表、for、if/elif、变量运算 |
| **任务** | 给定商品列表 `[("苹果", 3), ("牛奶", 8), ...]`，遍历打印菜单；输入商品名，计算总价；满 20 元打折 |
| **挑战点** | 嵌套逻辑、金额计算 |
| **checks 示例** | `contains: 'for '`, `contains: 'if '`, `contains: 'input('`, `output_contains: '总计'`, `no_error` |

### L6-23：魔法画阵 🎨

| 属性 | 内容 |
|------|------|
| **综合知识点** | turtle、def、for、循环嵌套 |
| **任务** | 写一个 `draw_star(size)` 函数，用 for 循环画 5 个不同位置/颜色的星星（或对称图案） |
| **挑战点** | 函数 + 图形 + 重复结构 |
| **checks 示例** | `contains: 'import turtle'`, `contains: 'def '`, `contains: 'for '`, `no_error`（turtle 无 stdout，靠结构 check） |

### L6-24：终极闯关 🏆（可选第 4 课）

| 属性 | 内容 |
|------|------|
| **综合知识点** | dict、random、def、input、if — 全栈综合 |
| **任务** | 「Python 小测验」：5 道题存 dict，随机出题，计分，最后根据分数 print 不同评语 |
| **挑战点** | 多模块协作，接近 g5 竞技场难度但步骤更引导 |
| **checks 示例** | `contains: 'def '`, `contains: 'random'`, `contains: '{'`, `contains: 'if '`, `output_contains: '得分'`, `no_error` |

**线性解锁**：l6_21 → l6_22 → l6_23 → l6_24（若做 4 课）。

---

## Testing Strategy

HiPython 当前**无自动化测试框架**。L6 的验证策略：

| 层级 | 方式 | 负责 |
|------|------|------|
| 课程数据 | `npx tsc --noEmit` 类型检查 | CI / 手动 |
| 每课 solution | 本地 `npm run dev`，粘贴 solution 运行，确认全部 check ✅ | 实现时 |
| 每课 starterCode | 确认能运行（可有预期输出不完整），check 应 ❌ | 实现时 |
| 平台集成 | 课程地图显示 L6、成就解锁、路由 `/lesson/l6_21` 可访问 | 手动 |
| 星级逻辑 | 全部 check 通过 → 3 星；≥50% → 2 星（现有逻辑不变） | 手动 |

**验收脚本（手动 checklist）**：

1. 新用户完成 L5-20 后，L6-21 在课程地图可点击
2. 提交 solution 代码 → 运行 → 所有 check 绿色 → 完成 → 3 星
3. 提交空 starterCode → check 不全过 → 最多 2 星
4. 完成全部 L6 → 解锁 `complete_l6` 成就

---

## Boundaries

### Always（始终做）

- 遵循 [COURSES.md](../COURSES.md) 语言风格（口语化、短句、emoji）
- 每课 3 条渐进式 hints
- 每课 checks ≥ 4 条，且含 `no_error`
- solution 必须可一键运行通过全部 checks
- 改完跑 `npx tsc --noEmit` + `npm run build`

### Ask first（先问用户）

- 是否做第 4 课（L6-24）还是 3 课就够
- 是否需要扩展新的 check 类型
- L5-20 文案是否改为「预演/热身」而非「全部课程毕业」
- 是否同步更新首页/成就墙文案中的「20 节课」数字

### Never（绝不做）

- 引入 L1~L5 未教过的新语法（如 class、try/except、文件 IO、while 循环*）
- 修改 Pyodide 引擎或 check 评估逻辑（除非 spec 修订批准）
- 降低 L6 checks 标准来「方便通过」

> *注：L5-20 solution 用了 `while`，但 L1~L5 未正式教 while。L6 应避免依赖 while；若 L6-24 需要循环，用 `for` + `range` 替代。

---

## Success Criteria

**Must have**

- [ ] `src/data/courses/main/l6/` 至少 **3 节**完整课程（lesson21~23）
- [ ] 每课 **4~6 条** checks，solution 运行后**全部通过**
- [ ] `Difficulty` 类型支持 `6`；CourseMap 显示「🏆 L6：综合挑战」
- [ ] 课程注册进 `allLessons`，顺序在 L5 之后、story 之前
- [ ] 新增成就 `complete_l6`（完成 L6 全部主课）
- [ ] `npx tsc --noEmit` 和 `npm run build` 零错误
- [ ] 线上部署后 `/lesson/l6_21` 可正常加载和运行 Python

**Nice to have**

- [ ] 第 4 课 L6-24 终极闯关
- [ ] 更新 `docs/COURSES.md` §3.6 L6 编写指南
- [ ] L5-20 summary 文案微调，指向 L6 继续挑战
- [ ] 首页 feature 卡片提及「24 节主课 + 综合挑战」

**量化对比**（相对 L5-20）

| 指标 | L5-20 | L6（目标） |
|------|-------|-----------|
| checks 数量 | 3 | 4~6 |
| 结构验证 | 仅 `print(` | 多关键字组合 |
| 输出验证 | 无 | 至少 1 条 `output_contains` |
| starterCode 完成度 | ~30% | ~60%（有骨架待补全） |

---

## Open Questions

请用户审阅时确认：

1. **课数**：3 课（21~23）还是 4 课（21~24）？
2. **主题**：上表四个主题（侦探/超市/画阵/测验）是否 OK？想替换哪个？
3. **难度**：是否允许 `max_lines` 限制（类似竞技场）？建议 L6 不做行数限制，比 Arena 宽松。
4. **L5-20 定位**：保持「毕业作品展」不变，还是改文案为「创作热身，L6 才是总结」？
5. **成就**：除 `complete_l6` 外，是否需要「L6 全 3 星」专属徽章？
6. **input() 课验证**：孩子每次输入不同，output 不同 — ✅ 已确认：结构 check 为主、output 为辅

**审阅结论（2026-06-24）**：4 课全做；主题 OK；L5-20 改文案；新增 `complete_l6` + `l6_all_stars` 成就。

---

## 实现记录

| 产出 | 路径 |
|------|------|
| L6 课程 | `src/data/courses/main/l6/lesson21~24.ts` |
| 类型扩展 | `Difficulty` 1~6 |
| 课程地图 | L6 阶段标题 |
| 成就 | `complete_l6`, `l6_all_stars` |
| L5-20 | 改为「创作热身」 |

---

## 假设清单

```
ASSUMPTIONS I'M MAKING:
1. L6 是 main 系列第 6 阶段，不是 story/game 支线
2. 课程 ID 延续编号：l6_21, l6_22, l6_23（第 21~23 课）
3. 前置：必须完成 l5_20 才能开始 L6
4. 不扩展 check 引擎，用现有 4 种 type 组合
5. 不教新概念（while/class/try 等）
6. 部署方式不变（GitHub Pages + HashRouter）
→ 请在本 spec 审阅时纠正。
```

---

## 下一步（Gated Workflow）

| 阶段 | 状态 | 动作 |
|------|------|------|
| **Specify** | 🟡 当前 | 用户审阅本文档，回答 Open Questions |
| Plan | ⬜ 待批准 | 生成技术实现计划（文件清单、改动顺序） |
| Tasks | ⬜ | 拆分为 ≤5 文件/任务的可执行条目 |
| Implement | ⬜ | 逐任务实现 + 手动验证 |

**请审阅本 spec，确认或修改 Open Questions 后，我再进入 Plan 阶段。**
