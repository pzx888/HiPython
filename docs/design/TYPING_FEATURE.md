# 打字练习功能 — 设计文档

> 版本: v1.0 | 日期: 2026-06-16 | 状态: 设计阶段

---

## 1. 背景与目标

### 1.1 背景

孩子的打字速度偏慢（DESIGN.md 中有记录），目前 L1 课程中的代码输入略显吃力。单纯靠写 Python 代码来练习打字效率不高——课程的重点是编程思维，而不是指法训练。因此计划增加一个独立的、趣味化的打字练习功能，以**游戏化**方式帮助孩子在 5 分钟/次的碎片时间里提升键盘熟练度。

### 1.2 目标

1. **提升键盘熟悉度**：通过带虚拟键盘的视觉反馈，让孩子逐步建立键位记忆
2. **游戏化激励**：积分 + 成长体系 + 成就徽章，让孩子有持续练习的动力
3. **Python 同步学习**：练习内容中融入 Python 关键字和常用代码片段，打字训练与编程学习两不误
4. **低门槛**：每次练习 5 分钟左右，不增加学习负担

---

## 2. 功能概述

### 2.1 核心循环

```
进入打字Tab → 选择难度/主题 → 开始5分钟练习
    → 逐字敲入目标文本 → 正确+得分 | 错误+提醒
    → 完成所有目标 → 结算页面（积分/星星/等级变化）
    → 继续练习或返回
```

### 2.2 页面布局

```
┌─────────────────────────────────────────────────────┐
│                    顶部导航 (TopNav)                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│   ┌─────────────────────────────────────────────┐   │
│   │         进度条: ████████░░░░░░ 4/8           │   │
│   │         本次积分: ⭐ 120   |  连击: 🔥 x5   │   │
│   ├─────────────────────────────────────────────┤   │
│   │                                             │   │
│   │          ┌───────────────────────┐           │   │
│   │          │    虚拟键盘 (QWERTY)   │           │   │
│   │          │  按下的键会高亮+动画    │           │   │
│   │          │  (正确=绿色, 错误=红色) │           │   │
│   │          └───────────────────────┘           │   │
│   │                                             │   │
│   │         ┌─────────────────────────┐         │   │
│   │         │  p  r  i  n  t  (  )    │         │   │
│   │         │  ↑  ✓✓✓✓✓              │         │   │
│   │         │  已正确: print  当前: r  │         │   │
│   │         └─────────────────────────┘         │   │
│   │                                             │   │
│   │   ┌─────────────────────────────────────┐   │   │
│   │   │  💡 提示: 按下 p 键开始输入这条内容   │   │   │
│   │   └─────────────────────────────────────┘   │   │
│   │                                             │   │
│   └─────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 2.3 交互流程

1. **键盘输入**：页面捕获全局键盘事件，无需焦点在特定 input 上
2. **逐字匹配**：从目标文本的第一个字符开始，按顺序要求输入
3. **正确反馈**：
   - 目标字母亮起绿色 + 缩放动画
   - 虚拟键盘对应键亮起绿色 + 脉冲动画
   - 播放悦耳的钢琴音阶音（不同音高对应不同进度）
   - 右上角连击计数 +1
4. **错误反馈**：
   - 虚拟键盘对应键闪红 + 抖动动画
   - 播放短促的提示音（低频 beep）
   - 连击计数归零
   - 屏幕轻微抖动
5. **完成一条**：自动切换到下一条目标，连击加分结算
6. **完成所有**：弹出结算面板，显示本次练习数据

---

## 3. 数据模型

### 3.1 打字练习内容

```typescript
// src/types/index.ts — 新增

/** 打字练习难度 */
export type TypingDifficulty = 1 | 2 | 3 | 4 | 5;

/** 打字练习内容分类 */
export type TypingCategory = 'letters' | 'words' | 'python' | 'sentences';

/** 单条打字目标 */
export interface TypingTask {
  id: string;
  text: string;               // 需要输入的目标文本
  category: TypingCategory;
  difficulty: TypingDifficulty;
  hint?: string;              // 可选的提示（如中文翻译）
}

/** 一次完整的打字练习（约5分钟） */
export interface TypingSession {
  id: string;
  title: string;
  description: string;
  difficulty: TypingDifficulty;
  tasks: TypingTask[];          // 8-15条，控制总量~5分钟
}
```

### 3.2 练习内容规划

| 分类 | 难度 | 内容示例 | 适用阶段 |
|------|------|---------|---------|
| `letters` | L1 | 单个字母键位练习: `fff jjj ddd kkk` | 刚接触键盘 |
| `letters` | L2 | 混合字母组合: `asdf jkl; gh ty` | 基本键位 |
| `words` | L1 | 简单英文单词: `cat dog sun fun` | 基本词汇 |
| `words` | L2 | 常见英文单词: `hello world happy` | 日常词汇 |
| `python` | L1 | Python 关键字: `print` `for` `if` `def` | 编程入门 |
| `python` | L2 | Python 函数名: `range` `input` `list` `len` | 编程进阶 |
| `python` | L3 | Python 代码片段: `print("Hello")` `for i in range(10):` | 代码输入 |
| `sentences` | L1 | 简单句子: `I love Python.` `Coding is fun.` | 综合练习 |

其中一个 5 分钟 session 包含 **8~15 条 task**，混合不同分类。难度 1-2 偏单词/短句，难度 3-5 偏代码片段。

### 3.3 用户打字数据

```typescript
// src/types/index.ts — 新增

/** 单次打字练习记录 */
export interface TypingRecord {
  sessionId: string;
  date: string;                // ISO date string
  totalTasks: number;
  completedTasks: number;
  totalKeystrokes: number;     // 总击键数
  correctKeystrokes: number;   // 正确击键数
  accuracy: number;            // 0-1
  maxCombo: number;            // 最大连击数
  score: number;               // 本次得分
  duration: number;            // 耗时（秒）
  wpm: number;                 // 字/分钟 (words per minute)
  stars: number;               // 1-3 星
}

/** 打字成长等级 */
export interface TypingLevel {
  level: number;               // 等级数字
  title: string;               // 称号
  minScore: number;            // 累计积分门槛
  icon: string;                // 称号图标（emoji）
}

/** 用户打字统计数据（追加到 UserProgress） */
export interface TypingStats {
  totalScore: number;          // 累计积分
  totalPracticeTime: number;   // 累计练习时长（秒）
  totalKeystrokes: number;     // 累计击键数
  bestWpm: number;             // 最高 WPM
  bestAccuracy: number;        // 最高准确率
  bestCombo: number;           // 历史最高连击
  currentStreak: number;       // 连续练习天数（今天练了+1）
  lastPracticeDate: string;    // 上次练习日期
  records: TypingRecord[];     // 最近 N 条练习记录（限制50条）
  level: number;               // 当前成长等级
}
```

### 3.4 UserProgress 扩展

```typescript
// 在现有 UserProgress 接口中追加字段
export interface UserProgress {
  completedLessons: Record<string, LessonProgress>;
  unlockedBadges: string[];
  totalStars: number;
  typingStats: TypingStats;    // ← 新增
}
```

### 3.5 打字成长等级体系

| 等级 | 称号 | 累计积分门槛 | 图标 |
|------|------|-------------|------|
| 1 | 键盘新手 | 0 | ⌨️ |
| 2 | 字母小达人 | 100 | 🔤 |
| 3 | 指法小能手 | 300 | 👆 |
| 4 | 键盘小飞侠 | 800 | 🚀 |
| 5 | 闪电打字员 | 2000 | ⚡ |
| 6 | 代码输入师 | 5000 | 💻 |
| 7 | 键盘大师 | 12000 | 🎹 |
| 8 | 键盘传奇 | 30000 | 🏆 |

---

## 4. 积分系统

### 4.1 单次得分计算

```
单条 task 得分 = 基础分 × 准确率加成 + 连击加成

- 基础分: 10 × 文本长度系数
  - 长度 ≤ 5: 系数 1.0
  - 长度 6-15: 系数 1.5
  - 长度 > 15: 系数 2.0

- 准确率加成: accuracy² (accuracy 为当前 task 的准确率)
  - 100% 准确率: ×1.0
  - 80% 准确率: ×0.64
  - 50% 准确率: ×0.25 (最低保障分)

- 连击加成: min(combo, 20) × 2
  - 连击 5: +10 分
  - 连击 10: +20 分
  - 连击 20+: +40 分 (封顶)
```

### 4.2 星星评定（单次 session）

| 星星 | 条件 |
|------|------|
| ⭐ | 完成全部 task |
| ⭐⭐ | 完成全部 task + 准确率 ≥ 80% |
| ⭐⭐⭐ | 完成全部 task + 准确率 ≥ 95% + 至少一个 ≥15 的连击 |

### 4.3 积分进入整体成就体系

打字积分将计入 `TypingStats.totalScore`，同时：
- `UserProgress.totalStars` 中包含打字 session 获得的星星
- 打字相关的成就会作为独立徽章出现在成就页面

---

## 5. 新增成就徽章

在现有 10 个徽章基础上，新增打字相关徽章：

```typescript
// src/data/achievements.ts — 打字成就

const typingBadges: Badge[] = [
  { id: 'typing_first', name: '初识键盘', icon: '⌨️', 
    desc: '完成第一次打字练习', condition: '完成任意一个 typing session' },
  { id: 'typing_10_sessions', name: '坚持不懈', icon: '📅', 
    desc: '累计完成 10 次打字练习', condition: '累计练习 ≥ 10 次' },
  { id: 'typing_streak_7', name: '天天向上', icon: '🔥', 
    desc: '连续 7 天练习打字', condition: '连续练习天数 ≥ 7' },
  { id: 'typing_wpm_20', name: '键盘小飞手', icon: '💨', 
    desc: '最快速度达到 20 WPM', condition: 'bestWpm ≥ 20' },
  { id: 'typing_accuracy_95', name: '一丝不苟', icon: '🎯', 
    desc: '单次练习准确率达到 95%', condition: '单次 accuracy ≥ 0.95' },
  { id: 'typing_combo_30', name: '连击大师', icon: '✨', 
    desc: '达成单次 30 连击', condition: 'maxCombo ≥ 30' },
  { id: 'typing_python_all', name: 'Python 键盘手', icon: '🐍', 
    desc: '完成所有 Python 分类打字练习', condition: '完成所有 python 分类 session' },
  { id: 'typing_level_5', name: '闪电打字员', icon: '⚡', 
    desc: '打字等级达到 5 级', condition: 'typing level ≥ 5' },
  { id: 'typing_1000_score', name: '积分破千', icon: '💰', 
    desc: '累计打字积分超过 1000', condition: 'totalScore ≥ 1000' },
];
```

---

## 6. 技术设计

### 6.1 新增路由

```typescript
// src/App.tsx — 新增路由
<Route path="/typing" element={<TypingPage />} />
```

### 6.2 TopNav 新增导航项

```typescript
// 在现有 navItems 数组中新增:
{ path: '/typing', label: '⌨️ 打字练习' }
```

### 6.3 目录结构（新增文件）

```
src/
├── components/
│   └── typing/
│       ├── VirtualKeyboard.tsx        # 虚拟键盘渲染 + 动画
│       ├── VirtualKeyboard.module.css
│       ├── TypingTarget.tsx           # 当前目标文本显示
│       ├── TypingTarget.module.css
│       ├── TypingProgress.tsx         # 进度条 + 实时统计
│       ├── TypingProgress.module.css
│       ├── TypingResults.tsx          # 结算面板
│       ├── TypingResults.module.css
│       ├── SessionSelector.tsx        # 练习选择界面
│       └── SessionSelector.module.css
├── pages/
│   ├── Typing.tsx                     # 打字练习主页面
│   └── Typing.module.css
├── data/
│   └── typing/
│       ├── index.ts                   # typing session 注册表
│       ├── sessions.ts               # 所有 session 定义
│       └── levels.ts                 # 成长等级定义
├── hooks/
│   └── useTypingEngine.ts            # 打字核心引擎 hook
└── engine/
    └── sound.ts                      # Web Audio API 音效生成器
```

### 6.4 音效系统（engine/sound.ts）

**设计方案**：使用 Web Audio API 程序化生成音效，无需下载音频文件。

```typescript
// 音效类型
interface SoundEngine {
  playCorrect(index: number): void;    // 正确按键音（随 index 变化音高）
  playError(): void;                   // 错误提示音
  playTaskComplete(): void;            // 完成一条的音效（上升音阶）
  playSessionComplete(): void;        // 完成全部的音效（胜利旋律）
  playComboMilestone(combo: number): void; // 连击里程碑音效
}

// 实现方案：
// - 正确音: 正弦波振荡器 + 简短 envelope
//   - 频率基于 index 映射到 C4-C6 大调音阶
//   - 每个字母一个不同的音符，听起来像弹钢琴
// - 错误音: 低频方波 + 短持续
// - 完成音: 快速琶音（多个振荡器依次触发）
// - 使用 AudioContext（懒初始化，首次用户交互后激活）
```

**注意**：
- AudioContext 必须在用户手势后初始化（浏览器限制）
- 使用 `gainNode` 控制音量，保持在 -12dB 左右，不刺耳
- 提供静音按钮——部分家长可能不喜欢声音

### 6.5 核心引擎（hooks/useTypingEngine.ts）

这是功能的核心 Hook，负责：

```typescript
interface UseTypingEngineOptions {
  session: TypingSession;
  onTaskComplete: (task: TypingTask, stats: TaskStats) => void;
  onSessionComplete: (record: TypingRecord) => void;
}

interface UseTypingEngineReturn {
  // 当前状态
  currentTaskIndex: number;
  currentCharIndex: number;     // 当前目标文本中已正确输入的字符索引
  isComplete: boolean;

  // 实时统计
  stats: TypingStats;
  combo: number;
  maxCombo: number;
  accuracy: number;

  // 键盘状态（供 VirtualKeyboard 使用）
  lastKeyPressed: string | null;
  lastKeyCorrect: boolean | null;

  // 方法
  reset(): void;
}
```

**核心算法——逐字匹配**：

```
目标文本: "print"
         ↓
当前索引:  0   →  等待输入 'p'
          ↓ (用户按下 'p')
当前索引:  1   →  等待输入 'r'  (已正确: p ✓)
          ↓ (用户按下 'x'，错误)
当前索引:  1   →  仍等待 'r'  (错误计数+1，播放错误音)
          ↓ (用户按下 'r')
当前索引:  2   →  等待输入 'i'  (已正确: pr ✓)
  ...
          ↓ (用户按下 't'，全部完成)
         →  onTaskComplete() → 切换到下一个 task
```

### 6.6 虚拟键盘（VirtualKeyboard.tsx）

```
┌─────────────────────────────────────────────────┐
│   键盘布局 (标准 US QWERTY)                      │
│                                                  │
│  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
│  │ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │ ⌫   │
│  ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─────┤
│  │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ [ │ ] │ \ │
│  ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴────┤
│  │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ ' │ Enter │
│  ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───────┤
│  │ Shift  │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ / │  Shift  │
│  └────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴─────────┘
│  ┌───────────────────────────────────────────────────────────┐
│  │  Space                                                    │
│  └───────────────────────────────────────────────────────────┘
└──────────────────────────────────────────────────────────────┘
```

**实现要点**：
- 纯 CSS Grid 布局，每个键是一个 `<div>`
- 特殊键（Tab、Shift、Enter、Space）宽度按比例缩放
- 按键状态：
  - **默认**：白色/浅灰背景
  - **正确按下**：绿色 (`--color-primary`) + 缩放 1.1x + `box-shadow` 发光
  - **错误按下**：红色 (`--color-error`) + 抖动动画 (CSS `@keyframes shake`) 
  - **下一个目标键**：浅蓝/橙色提示边框或背景高亮（引导孩子下一个该按哪个键）
- 动画使用 CSS transition + keyframes，不依赖 JS 动画库
- 响应式：键盘宽度自适应容器，保证在 1024px+ 屏幕上清晰可见

**下一个目标键提示（关键 UX）**：
当前应该按下的键，在虚拟键盘上以橙色闪烁边框 + 浅色背景标记。这对不熟悉键盘布局的孩子非常重要——他们在虚拟键盘上看到目标键的位置，然后在物理键盘上按。

### 6.7 目标文本显示（TypingTarget.tsx）

```
当前 task: "print"

显示效果：
┌─────────────────────────────┐
│  p   r   i   n   t          │
│  ✓   ✓   →   ○   ○          │   ← 逐字点亮
│ [已完成] [当前] [待输入]      │
└─────────────────────────────┘

实现：
- 每个字符渲染为一个 <span>
- 已正确输入: class="correct" (绿色 + 下划线)
- 当前待输入: class="current" (大号 + 闪烁光标动画)
- 尚未到达: class="pending" (灰色)
- 错误时: 当前字符瞬间变红再恢复（CSS animation）
```

### 6.8 页面组件（pages/Typing.tsx）

**三种状态视图**：

1. **选择模式** (`SessionSelector`)：进入时的卡片选择界面
2. **练习模式** (`TypingPractice`)：核心的打字练习界面
3. **结算模式** (`TypingResults`)：完成后的数据总结

状态切换通过 `useState` 管理，无需路由嵌套。

### 6.9 键盘事件处理

```typescript
// 全局键盘监听方案
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    // 只在 typing 练习激活时处理
    if (!isActive) return;

    // 忽略修饰键的单独按下
    if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab'].includes(e.key)) {
      return;
    }

    // 阻止默认行为（如空格滚动页面）
    e.preventDefault();

    // 将 key 映射到目标字符
    const typedChar = mapKeyToChar(e.key, e.shiftKey);
    processKeyInput(typedChar);
  };

  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, [isActive, processKeyInput]);
```

**键映射逻辑**：
- `e.key` 为标准键盘事件 key 值
- 需要处理 Shift 状态（`'1'` vs `'!'`，`'a'` vs `'A'`）
- 特殊键映射：`' '` → 空格，`'Enter'` → 仅当 target 中含有 `\n` 时处理
- 忽略功能键（F1-F12、方向键等）

---

## 7. CSS 变量扩展

在 `theme.css` 中新增打字练习相关变量：

```css
:root {
  /* ---- Typing Practice ---- */
  --typing-key-size: 48px;
  --typing-key-gap: 4px;
  --typing-key-radius: 6px;
  --typing-key-bg: #F0F0F0;
  --typing-key-correct: #66BB6A;    /* 正确按键高亮 */
  --typing-key-error: #EF5350;      /* 错误按键高亮 */
  --typing-key-hint: #FFA726;       /* 下一个目标键提示 */
  --typing-target-font: 32px;       /* 目标文本字号 */
  --typing-target-correct: #66BB6A;
  --typing-target-current: #2196F3;
  --typing-target-pending: #BDBDBD;
}
```

---

## 8. 数据持久化

### 8.1 存储方案

与现有体系一致，使用 `localStorage`，命名空间 `hipython:progress`。

`TypingStats` 作为 `UserProgress.typingStats` 一起存储。

### 8.2 积分写入流程

```
TypingEngine 完成一条 task → 计算 task 得分
  → 完成整个 session → 汇总所有 task 得分
  → 计算本次 session 总积分 + 星星
  → 调用 updateTypingStats(record: TypingRecord)
  → useProgress 中 addTypingRecord(record)
  → localStorage 持久化
  → 检查并解锁打字相关成就
```

### 8.3 成就检查扩展

在 `useProgress` 中新增 `checkTypingAchievements` 方法，类似现有课程成就的 derived badges 逻辑：

```typescript
function checkTypingAchievements(stats: TypingStats): string[] {
  const unlocked: string[] = [];
  if (stats.records.length >= 1) unlocked.push('typing_first');
  if (stats.records.length >= 10) unlocked.push('typing_10_sessions');
  if (stats.currentStreak >= 7) unlocked.push('typing_streak_7');
  if (stats.bestWpm >= 20) unlocked.push('typing_wpm_20');
  if (stats.bestAccuracy >= 0.95) unlocked.push('typing_accuracy_95');
  if (stats.bestCombo >= 30) unlocked.push('typing_combo_30');
  if (stats.level >= 5) unlocked.push('typing_level_5');
  if (stats.totalScore >= 1000) unlocked.push('typing_1000_score');
  return unlocked;
}
```

---

## 9. 打字练习内容设计

### 9.1 Session 示例

```typescript
// L1 - 键盘初体验（单字母 + 简单词汇）
const sessionL1_HomeRow: TypingSession = {
  id: 'typing_l1_homerow',
  title: '键盘初体验 — 基准键位',
  description: '熟悉 F 和 J 定位键，练习基准键位的指法',
  difficulty: 1,
  tasks: [
    { id: 'hr_1',  text: 'fff',    category: 'letters', difficulty: 1, hint: '左手食指' },
    { id: 'hr_2',  text: 'jjj',    category: 'letters', difficulty: 1, hint: '右手食指' },
    { id: 'hr_3',  text: 'ddd',    category: 'letters', difficulty: 1, hint: '左手中指' },
    { id: 'hr_4',  text: 'kkk',    category: 'letters', difficulty: 1, hint: '右手中指' },
    { id: 'hr_5',  text: 'sss',    category: 'letters', difficulty: 1, hint: '左手无名指' },
    { id: 'hr_6',  text: 'lll',    category: 'letters', difficulty: 1, hint: '右手无名指' },
    { id: 'hr_7',  text: 'aaa',    category: 'letters', difficulty: 1, hint: '左手小指' },
    { id: 'hr_8',  text: ';;;',    category: 'letters', difficulty: 1, hint: '右手小指' },
    { id: 'hr_9',  text: 'fjfj',   category: 'letters', difficulty: 1, hint: '定位键交替' },
    { id: 'hr_10', text: 'asdf',   category: 'letters', difficulty: 1, hint: '左手全键位' },
    { id: 'hr_11', text: 'jkl;',   category: 'letters', difficulty: 1, hint: '右手全键位' },
    { id: 'hr_12', text: 'asdfjkl;', category: 'letters', difficulty: 1, hint: '完整基准键位' },
  ],
};

// L2 - Python 小达人（Python 关键字练习）
const sessionL2_PythonKeywords: TypingSession = {
  id: 'typing_l2_python_kw',
  title: 'Python 小达人',
  description: '练习 Python 常用关键字的输入',
  difficulty: 2,
  tasks: [
    { id: 'py_1',  text: 'print',    category: 'python', difficulty: 2, hint: '输出函数' },
    { id: 'py_2',  text: 'for',      category: 'python', difficulty: 2, hint: '循环关键字' },
    { id: 'py_3',  text: 'if',       category: 'python', difficulty: 2, hint: '判断关键字' },
    { id: 'py_4',  text: 'else',     category: 'python', difficulty: 2, hint: '否则分支' },
    { id: 'py_5',  text: 'def',      category: 'python', difficulty: 2, hint: '定义函数' },
    { id: 'py_6',  text: 'import',   category: 'python', difficulty: 2, hint: '导入模块' },
    { id: 'py_7',  text: 'range',    category: 'python', difficulty: 2, hint: '范围函数' },
    { id: 'py_8',  text: 'input',    category: 'python', difficulty: 2, hint: '输入函数' },
    { id: 'py_9',  text: 'return',   category: 'python', difficulty: 2, hint: '返回值' },
    { id: 'py_10', text: 'while',    category: 'python', difficulty: 2, hint: 'while 循环' },
  ],
};

// L3 - 代码片段
const sessionL3_CodeSnippets: TypingSession = {
  id: 'typing_l3_snippets',
  title: '代码片段练习',
  description: '输入完整的 Python 代码行',
  difficulty: 3,
  tasks: [
    { id: 'cs_1', text: 'print("Hello, World!")',     category: 'python', difficulty: 3 },
    { id: 'cs_2', text: 'for i in range(10):',         category: 'python', difficulty: 3 },
    { id: 'cs_3', text: 'if x > 5:',                   category: 'python', difficulty: 3 },
    { id: 'cs_4', text: 'name = "Python"',             category: 'python', difficulty: 3 },
    { id: 'cs_5', text: 'print(f"Hello, {name}")',     category: 'python', difficulty: 3 },
    { id: 'cs_6', text: 'def greet(name):',            category: 'python', difficulty: 3 },
    { id: 'cs_7', text: 'import random',               category: 'python', difficulty: 3 },
    { id: 'cs_8', text: 'numbers = [1, 2, 3]',        category: 'python', difficulty: 3 },
  ],
};
```

### 9.2 完整 Session 列表（建议首批实现 8 个）

| ID | 标题 | 难度 | 分类 | Task 数 |
|----|------|------|------|---------|
| `typing_l1_homerow` | 键盘初体验 | L1 | letters | 12 |
| `typing_l1_letters` | 字母总动员 | L1 | letters | 15 |
| `typing_l1_simple_words` | 简单词汇 | L1 | words | 12 |
| `typing_l2_common_words` | 日常英语 | L2 | words | 12 |
| `typing_l2_python_kw` | Python 小达人 | L2 | python | 10 |
| `typing_l3_snippets` | 代码片段 | L3 | python | 8 |
| `typing_l3_sentences` | 句子工厂 | L3 | sentences | 8 |
| `typing_l4_mixed` | 综合挑战 | L4 | mixed | 10 |

后续可逐步增加更多 session。

---

## 10. 实施计划

### 阶段一：核心骨架（预计 2-3 天）

- [ ] `src/types/index.ts` — 新增所有 TypeScript 类型
- [ ] `src/engine/sound.ts` — Web Audio API 音效引擎
- [ ] `src/components/typing/VirtualKeyboard.tsx` + CSS — 虚拟键盘
- [ ] `src/hooks/useTypingEngine.ts` — 打字核心逻辑
- [ ] `src/components/typing/TypingTarget.tsx` + CSS — 目标文本显示
- [ ] `src/components/typing/TypingProgress.tsx` + CSS — 进度条
- [ ] `src/pages/Typing.tsx` — 主页面（先做练习模式，选择+结算后续）

**阶段一完成标志**：能打开 `/typing` 页面，看到一个虚拟键盘，敲击物理键盘时键亮起，下方硬编码一条测试文本能逐字匹配。

### 阶段二：游戏化系统（预计 1-2 天）

- [ ] `src/data/typing/levels.ts` — 成长等级定义
- [ ] `src/data/typing/sessions.ts` — 首批 session 数据
- [ ] `src/data/typing/index.ts` — 注册表
- [ ] `src/components/typing/SessionSelector.tsx` — 选择界面
- [ ] `src/components/typing/TypingResults.tsx` — 结算面板
- [ ] `useProgress.ts` 扩展 — typingStats 读写
- [ ] 积分&成就集成

**阶段二完成标志**：完整的练习循环（选择→练习→结算→积分记录→成就检查）可运行。

### 阶段三：内容填充+动画打磨（预计 1-2 天）

- [ ] 首批 8 个 session 的完整内容
- [ ] 虚拟键盘动画优化（光泽、过渡、下一个键提示）
- [ ] 音效调优（音色、音量、音阶映射）
- [ ] 移动端/平板响应式适配
- [ ] 静音开关
- [ ] 边界情况处理（快捷键冲突、中文输入法等）

---

## 11. 风险与注意事项

### 11.1 中文输入法冲突

孩子可能在系统层面开启了中文输入法。当输入法激活时，键盘事件可能被输入法拦截。

**处理**：在最外层容器上设置 `lang="en"` 和 `inputMode="none"`，并在 keydown handler 中检测——如果 `e.isComposing` 为 `true`（compositionstart 触发时），在页面上提示"请切换到英文输入模式"。实际验证发现，大部分浏览器的 keydown 事件在中文输入法激活时仍能触发 `e.key` 值（如 `'a'`），所以影响可能有限。

### 11.2 浏览器兼容性

Web Audio API 在所有现代浏览器中均受支持。`AudioContext` 懒初始化需要注意：Safari 对 `AudioContext` 的自动播放限制较严格，必须在用户点击页面后初始化。

**处理**：在页面进入练习模式（用户点击了"开始练习"按钮）后才初始化 `AudioContext`。

### 11.3 localStorage 容量

现有数据量较少，打字记录（限制 50 条）不会显著增加存储压力。

**处理**：`TypingStats.records` 限制最多保留 50 条，超出时移除最旧的记录。定期在 `useProgress` 中清理。

### 11.4 键盘布局差异

不同物理键盘布局可能不同（US/UK/日式等）。虚拟键盘应使用标准 US QWERTY 布局（与 CodeMirror 编辑器一致），这也是孩子学编程的主要使用布局。

### 11.5 特殊键处理

- `Shift` 键：用于输入大写字母和符号（如 `!@#$%`），需要在键映射中处理
- `CapsLock`：检测警告"大写锁定已开启"
- `Backspace`：允许退格撤销（仅限当前 task，退回一个字符）
- `Enter`：仅当目标文本中含换行时接受

---

## 12. 扩展可能性（后续版本）

1. **指法提示**：在虚拟键盘上高亮显示推荐的手指区域
2. **速度挑战模式**：限时模式下完成尽可能多的输入
3. **对战模式**：本地双人打字竞速
4. **音效主题**：钢琴、电子、动物叫声等多种音效可选
5. **键盘皮肤**：多彩键盘主题
6. **打字故事**：结合故事线的叙事型打字练习
7. **键盘热力图**：统计哪些键错误率最高，针对性练习