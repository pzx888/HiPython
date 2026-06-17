# HiPython — 设计实现文档

## 文档目的

本文档是 [DESIGN.md](DESIGN.md) 的实现对照文档，说明 DESIGN.md 中的每个模块**当前状态**、**已实现的细节**与**待实现的详细设计**。SDD 流程：DESIGN.md（做什么）→ 本文档（怎么做）→ TASK.md（分步执行）。

---

## 1. 当前实现状态总览

> 最后更新：2026-06-16

### 已完成 ✅

| 模块 | 状态 | 文件 |
|------|------|------|
| 项目初始化 | ✅ 完成 | `package.json`, `vite.config.ts`, `tsconfig*.json` |
| 类型定义 | ✅ 完成 | `src/types/index.ts`（含 Turtle、VariableInfo） |
| 路由骨架 | ✅ 完成 | `src/App.tsx` (4个路由) |
| AppShell 布局 | ✅ 完成 | `src/components/layout/AppShell.tsx`, `TopNav.tsx` |
| 首页 | ✅ 完成 | `src/pages/Home.tsx` |
| Pyodide 引擎 | ✅ 完成 | `src/engine/pyodide.ts`（含 turtle 注入 + 变量收集） |
| 错误翻译层 | ✅ 完成 | `src/engine/errorTranslate.ts` (11种错误模式) |
| Turtle 绘图引擎 | ✅ 完成 | `src/engine/turtle.ts`（Python 端注入 + JS 端 Canvas 渲染） |
| usePyodide Hook | ✅ 完成 | `src/hooks/usePyodide.ts` |
| useLocalStorage | ✅ 完成 | `src/hooks/useLocalStorage.ts` |
| useProgress | ✅ 完成 | `src/hooks/useProgress.ts` |
| CodeMirror6 编辑器 | ✅ 完成 | `src/components/editor/CodeEditor.tsx`（底部含运行按钮） |
| 运行按钮 | ✅ 完成 | `src/components/editor/RunButton.tsx` |
| 错误展示 | ✅ 完成 | `src/components/editor/ErrorDisplay.tsx` |
| 输出面板 | ✅ 完成 | `src/components/output/OutputPanel.tsx`（控制台/画布/变量三Tab） |
| Turtle 画布组件 | ✅ 完成 | `src/components/output/TurtleCanvas.tsx`（400×400 Canvas + 网格背景） |
| 变量查看器 | ✅ 完成 | `src/components/output/OutputPanel.tsx` 内嵌 VariablesView |
| 可拖拽分隔条 | ✅ 完成 | `src/components/layout/ResizeHandle.tsx` |
| 三栏可缩放布局 | ✅ 完成 | `src/pages/Lesson.tsx`（左课程/中编辑器/右输出，支持折叠+拖拽） |
| 课程内容展示 | ✅ 完成 | `src/components/lesson/LessonView.tsx` |
| 渐进提示 | ✅ 完成 | `src/components/lesson/Hints.tsx` |
| 上下课导航 | ✅ 完成 | `src/components/lesson/LessonNav.tsx` |
| 课程地图 | ✅ 完成 | `src/components/lesson/CourseMap.tsx` |
| 课程数据模型 | ✅ 完成 | `src/data/courses/index.ts` |
| L1 全部4节课 | ✅ 完成 | `src/data/courses/main/l1/` |
| L2 全部4节课 | ✅ 完成 | `src/data/courses/main/l2/` |
| L3 全部4节课 | ✅ 完成 | `src/data/courses/main/l3/` |
| 课程页面 | ✅ 完成 | `src/pages/Lesson.tsx` |
| 课程地图页 | ✅ 完成 | `src/pages/CourseMapPage.tsx` |
| 成就页（基础版） | ✅ 完成 | `src/pages/Achievements.tsx` |
| Kid-friendly 主题 | ✅ 完成 | `src/styles/theme.css` |
| 构建分包 | ✅ 完成 | `vite.config.ts` (vendor/codemirror chunks) |

### 待实现 ❌

| 模块 | 优先级 | 预估工时 |
|------|--------|----------|
| 代码模板片段系统 | 🟡 中 | 1-2天 |
| 故事线页面 + 课程 | 🟡 中 | 2-3天 |
| L2-L5 课程内容 | 🔴 正在进行 | L2/L3 已完成 |
| 成就自动解锁逻辑 | 🟡 中 | 1天 |
| 移动端响应式适配 | 🟡 中 | 2天 |
| 代码补全 (autocomplete) | 🟢 低 | 1天 |
| Pyodide Worker 线程 | 🟢 低 | 2天 |
| 游戏线 (Code Arena) | 🟢 低 | 3-4天 |
| 部署上线 | 🟡 中 | 0.5天 |

---

## 2. 待实现模块详细设计

### 2.1 Turtle Canvas 可视化 ✅ 已完成

**实现概述**：Python 端通过 `_commands` 纯 Python list 收集指令 → 执行后 `json.dumps` 序列化 → JS 端 `JSON.parse` 反序列化 → Canvas 2D 渲染。避开 Pyodide 跨语言代理生命周期问题。

**关键文件**：
- `src/engine/turtle.ts` — Python turtle 模块源码（`TURTLE_PYTHON_MODULE`）+ JS 绘图函数（`executeTurtleCommands`、`drawTurtleResult`）
- `src/components/output/TurtleCanvas.tsx` — 400×400 Canvas 组件，网格背景 + 三角 turtle 图标
- `src/engine/pyodide.ts` — `setupTurtleBridge()` + `collectTurtleCommands()` + `collectVariables()`

**实际架构**（与最初设计不同，针对 Pyodide 互操作问题做了调整）：
```
Python _cmd() → _commands.append((type, value))
    ↓
JS collectTurtleCommands() → pyodide.runPython("json.dumps(_commands)")
    ↓
JSON.parse → TurtleCommand[] → TurtleCanvas → Canvas 2D

---

### 2.2 变量查看器 ✅ 已完成

**实现概述**：在 `runPython` 执行结束后通过 `pyodide.globals.toJs()` 读取全局命名空间，过滤 Python builtins 后展示为表格。直接内嵌在 `OutputPanel.tsx` 中。

**关键文件**：
- `src/engine/pyodide.ts` — `collectVariables()` + `formatVariableInfo()` 函数
- `src/components/output/OutputPanel.tsx` — `VariablesView` 组件（表格视图）
- `src/types/index.ts` — `VariableInfo` 类型

---

### 2.3 代码模板片段系统

**目标**：在编辑器下方提供一组可点击的代码模板按钮，点击后自动插入到光标位置。

**实现**：

1. **组件**：`src/components/editor/CodeTemplates.tsx`

```typescript
interface Template {
  label: string;       // 按钮显示文字
  icon: string;         // emoji
  code: string;         // 要插入的代码
  description: string;  // 悬停提示
}

const BASIC_TEMPLATES: Template[] = [
  { label: 'print', icon: '🖨️', code: 'print("")', description: '输出文字' },
  { label: 'input', icon: '⌨️', code: 'name = input("你的名字？")', description: '获取用户输入' },
  { label: 'for', icon: '🔁', code: 'for i in range(10):\n    print(i)', description: 'for 循环' },
  { label: 'if', icon: '🔀', code: 'if 条件:\n    print("成立！")', description: 'if 判断' },
  { label: 'list', icon: '📋', code: 'my_list = ["a", "b", "c"]', description: '创建列表' },
  { label: 'def', icon: '🔧', code: 'def my_func():\n    print("Hello")\n\nmy_func()', description: '定义函数' },
];
```

2. **插入逻辑**：通过 CodeMirror 的 `view.dispatch` 在光标位置插入模板文本。需要从 `CodeEditor` 中暴露 `editorView` 引用。

3. **改造 `CodeEditor.tsx`**：增加 `onInsertTemplate` 回调，使用 `useRef` 持有 `EditorView` 实例。

```typescript
// CodeEditor 中通过 ref 暴露 view
const editorRef = useRef<EditorView | null>(null);

// 在 CodeMirror 的 onCreateEditor 中获取 view
const handleCreate = useCallback((view: EditorView) => {
  editorRef.current = view;
}, []);
```

4. **UI 布局**：在编辑器工具栏区域（RunButton 同一行下方）展示模板按钮，用 `flex-wrap` 排列。

---

### 2.4 成就自动解锁逻辑

**当前问题**：`AchievementsPage` 中的成就解锁逻辑写在页面组件里，逻辑分散，且只在进入成就页时触发。应该改为**在完成课程时自动检查并解锁**。

**方案**：在 `useProgress` Hook 中增加 `checkAndUnlockBadges` 方法。

**实现**：

```typescript
// src/data/achievements.ts — 成就定义与解锁条件
export interface AchievementDef {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  // 解锁条件：检查用户进度，返回是否满足
  check: (progress: UserProgress) => boolean;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: 'first_run',
    name: '初次运行',
    emoji: '▶️',
    desc: '第一次运行 Python 代码',
    check: (p) => Object.keys(p.completedLessons).length > 0,
  },
  {
    id: 'first_print',
    name: '开口说话',
    emoji: '🗣️',
    desc: '使用 print() 输出文字',
    check: (p) => Object.values(p.completedLessons).some(lp => lp.attempts > 0),
  },
  {
    id: 'complete_l1',
    name: '初学者',
    emoji: '🌱',
    desc: '完成 L1 全部课程',
    check: (p) => ['l1_1','l1_2','l1_3','l1_4'].every(id => p.completedLessons[id]?.completed),
  },
  // ... 其余成就
];
```

**触发时机**：在 `completeLesson` 调用后，立即遍历所有成就定义，检查新解锁的成就。

```typescript
// useProgress.ts 中
const completeLesson = useCallback((lessonId, stars, code) => {
  setProgress((prev) => {
    const updated = { /* ... 更新逻辑 ... */ };
    // 检查新成就
    const newBadges = ACHIEVEMENTS
      .filter(a => a.check(updated) && !updated.unlockedBadges.includes(a.id))
      .map(a => a.id);
    updated.unlockedBadges = [...updated.unlockedBadges, ...newBadges];
    return updated;
  });
}, []);
```

---

### 2.5 故事线 (Story Mode)

**目标**：连续叙事型的 Python 学习模式，主角小蛇 Python 在代码世界冒险。

**设计**：

```
故事线页面布局：
┌──────────────────────────────────────────────────┐
│  故事模式标题 + 关卡地图（横向滚动）                │
├──────────────────┬───────────────────────────────┤
│                  │                               │
│  故事内容区      │   代码编辑器 + 输出面板         │
│  (对话/场景/     │   (复用现有编辑器组件)          │
│   剧情文本)      │                               │
│                  │                               │
│  [NPC头像]       │                               │
│  "小蛇，写一个   │                               │
│   print() 来     │                               │
│   唤醒我吧！"    │                               │
│                  │                               │
└──────────────────┴───────────────────────────────┘
```

**新增文件**：

```
src/
├── pages/
│   └── Story.tsx              # 故事模式页面
├── components/story/
│   ├── StoryDialog.tsx        # 剧情对话气泡
│   ├── StoryMap.tsx           # 关卡地图（横向滚动）
│   └── StoryCharacter.tsx     # 角色展示
├── data/courses/story/
│   ├── index.ts
│   ├── s1.ts                  # 唤醒小蛇
│   ├── s2.ts                  # 穿越数字峡谷
│   ├── s3.ts                  # 三岔路口
│   ├── s4.ts                  # 魔法宝库
│   └── s5.ts                  # 铸造魔法杖
```

**课程数据结构**：复用 `Lesson` 类型，额外增加故事相关的可选字段：

```typescript
export interface Lesson {
  // ... 现有字段
  storyContext?: {
    chapter: number;           // 故事章节
    setting: string;           // 场景描述
    dialog: StoryDialogLine[]; // 剧情对话
  };
}

interface StoryDialogLine {
  speaker: string;    // 角色名
  avatar: string;      // emoji 头像
  text: string;        // 对话内容
  highlight?: boolean; // 是否高亮（关键剧情）
}
```

**路由**：在 `App.tsx` 中增加 `/story` 和 `/story/:storyId` 路由。

---

### 2.6 L2-L5 课程内容

**内容规划**：按照 DESIGN.md §3.1 的设计，共 16 节新课。

每节课的数据结构参考 `l1_1` 的格式，存放在 `src/data/courses/main/l{2-5}/`。

**目录结构**：

```
src/data/courses/main/
├── l1/   (已完成)
├── l2/
│   ├── index.ts    → 导出 l2Lessons
│   ├── lesson5.ts  → 数字倒计时
│   ├── lesson6.ts  → 乘法口诀表
│   ├── lesson7.ts  → 画个正方形 (turtle)
│   └── lesson8.ts  → 彩虹螺旋 (turtle)
├── l3/
│   ├── index.ts
│   ├── lesson9.ts  → 猜数字
│   ├── lesson10.ts → 年龄小管家
│   ├── lesson11.ts → 画个星星 (turtle)
│   └── lesson12.ts → 石头剪刀布
├── l4/
│   ├── index.ts
│   ├── lesson13.ts → 购物清单
│   ├── lesson14.ts → 英文单词本
│   ├── lesson15.ts → 随机点名器
│   └── lesson16.ts → 画个花园 (turtle)
└── l5/
    ├── index.ts
    ├── lesson17.ts → 制作自己的指令
    ├── lesson18.ts → 万能画形状 (turtle)
    ├── lesson19.ts → 密码生成器
    └── lesson20.ts → 我的作品展
```

**编写规范**：每节课遵循以下模板：
- `starterCode`：3-5 行，让学生有修改的起点
- `solution`：完整可运行的参考答案
- `hints`：3 级渐进提示，从模糊到具体
- `checks`：2-3 个自动检查项

---

### 2.7 移动端响应式适配

**目标**：在 iPad/平板设备上可用（非手机优先）。

**方案**：CSS 断点策略，480px / 768px / 1024px。

**关键改造点**：

1. **Lesson 页面**（`Lesson.module.css`）：小屏幕下三栏变单栏，编辑器/输出面板上下堆叠
2. **TopNav**：小屏幕下菜单项简化（只显示图标）
3. **CourseMap**：课程卡片网格在小屏幕下变为单列
4. **编辑器字号**：移动端降至 16px（原 18px）

**CSS 变量扩展**：

```css
:root {
  --sidebar-width: 320px;
  --sidebar-width-tablet: 260px;
  /* 在小屏幕上隐藏 sidebar，改为顶部切换 */
}

@media (max-width: 768px) {
  .lessonPage {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    max-height: 40vh;
    overflow-y: auto;
  }
}
```

---

### 2.8 Pyodide Worker 线程

**目标**：将 Python 代码执行放到 Web Worker 中，防止死循环阻塞 UI 线程。

> **注意**：当前阶段（MVP）**不需要**实现。Pyodide 的 `setInterruptBuffer` 已经提供了基本的超时中断能力。Web Worker 化会增加显著的复杂度（需要把 Pyodide WASM 加载到 Worker、序列化通信等），且对用户体验的提升有限。建议在第 4 阶段再做。

**预留方案**（供后续参考）：

```
主线程                       Worker 线程
  │                            │
  ├── postMessage(code) ──────→│
  │                            ├── loadPyodide()
  │                            ├── runPythonAsync(code)
  │                            ├── setTimeout(3s) → 超时中断
  │                            │
  │←── postMessage(result) ────┤
```

---

### 2.9 代码补全 (Autocomplete)

**当前状态**：`CodeEditor.tsx` 中 `autocompletion: false` 关闭了补全。

**方案**：启用 `@codemirror/autocomplete`，但**只保留基础关键字补全**（~20个词），不引入完整的 Jedi/PyLint 语言服务。

```typescript
import { autocompletion } from '@codemirror/autocomplete';

const kidPythonCompletions = [
  { label: 'print', type: 'function', detail: '输出文字' },
  { label: 'input', type: 'function', detail: '获取用户输入' },
  { label: 'range', type: 'function', detail: '生成数字序列' },
  { label: 'len', type: 'function', detail: '获取长度' },
  { label: 'for', type: 'keyword', detail: '循环' },
  { label: 'if', type: 'keyword', detail: '条件判断' },
  { label: 'else', type: 'keyword' },
  { label: 'elif', type: 'keyword' },
  { label: 'def', type: 'keyword', detail: '定义函数' },
  { label: 'return', type: 'keyword' },
  { label: 'import', type: 'keyword' },
  { label: 'True', type: 'constant' },
  { label: 'False', type: 'constant' },
  { label: 'None', type: 'constant' },
  { label: 'and', type: 'keyword' },
  { label: 'or', type: 'keyword' },
  { label: 'not', type: 'keyword' },
  { label: 'in', type: 'keyword' },
  { label: 'list', type: 'function', detail: '创建列表' },
  { label: 'dict', type: 'function', detail: '创建字典' },
  { label: 'str', type: 'function', detail: '转成字符串' },
  { label: 'int', type: 'function', detail: '转成整数' },
  { label: 'append', type: 'method', detail: '添加到列表末尾' },
  { label: 'random', type: 'module', detail: '随机数模块' },
];

// 在 CodeEditor 中启用
extensions={[python(), kidFriendlyTheme, autocompletion()]}
```

---

## 3. 数据流与组件交互

### 3.1 课程页面数据流

```
useParams() → lessonId
    ↓
getLesson(lessonId) → Lesson 对象
    ↓
┌─────────────────────────────────────────────┐
│  LessonView  ← Lesson.content              │
│  CodeEditor  ← Lesson.starterCode          │
│  Hints       ← Lesson.hints                │
│  OutputPanel ← ExecutionResult             │
│  RunButton   → handleRun() → runPython()   │
│  "完成本节"  → handleComplete() → useProgress│
└─────────────────────────────────────────────┘
```

### 3.2 代码执行数据流

```
用户点击 "▶ 运行"
    ↓
handleRun()
    ├── setIsRunning(true)
    ├── 检查 Pyodide 是否已加载
    │   ├── 已加载 → 直接执行
    │   └── 未加载 → loadPyodide() → 显示加载进度
    ├── runPython(code)
    │   ├── 重定向 stdout/stderr
    │   ├── resetGlobals() 清理命名空间
    │   ├── pyodide.runPythonAsync(code)
    │   ├── 成功 → { stdout, error: null, success: true }
    │   └── 失败 → translateError() → { stdout, error: kidFriendlyMsg }
    └── setResult() → OutputPanel 自动更新
```

### 3.3 进度持久化数据流

```
completeLesson(lessonId, stars, code)
    ↓
setProgress(prev → {
  completedLessons: { ...prev, [lessonId]: { completed, stars, attempts, lastCode } },
  totalStars: prev.totalStars + delta,
  unlockedBadges: checkAchievements(updated),
})
    ↓
useLocalStorage() → localStorage.setItem('hipython:progress', JSON)
    ↓
下次打开页面时 → localStorage.getItem → 自动恢复
```

---

## 4. 技术决策记录

| 决策 | 选择 | 理由 | 替代方案 |
|------|------|------|----------|
| React 版本 | 19.x | 项目已安装 19.2.6 | 18.x |
| 路由方案 | React Router v7 | 项目已安装 7.17.0 | v6 |
| CSS 方案 | CSS Modules | 无额外依赖，天然隔离 | Tailwind, styled-components |
| 状态管理 | Context + useReducer | 组件树浅，不需要全局状态库 | Redux, Zustand |
| 持久化 | LocalStorage | 零配置，5MB 足够 | IndexedDB（当前不需要） |
| Pyodide 导入 | 动态 import | 避免首屏加载 11MB WASM | 直接 import |
| Turtle 实现 | JS 端解释器 | 避免 Python→JS 每步互操作 | Python 端自绘 |
| Worker 线程 | MVP 不做 | 复杂度高，setInterruptBuffer 够用 | Web Worker |
| 部署 | 静态站点 | 零运维，Vercel 免费 | 自建服务器 |
| 测试 | MVP 不做 | 面向一个孩子，手动测试足够 | Vitest, Playwright |

---

## 5. 文件清单

### 阶段一已完成

```
src/
├── types/index.ts                       # 类型定义（含 Turtle、VariableInfo）
├── styles/theme.css                     # Kid-friendly 主题变量
├── engine/
│   ├── pyodide.ts                       # Pyodide 加载/执行/turtle注入/变量收集
│   ├── turtle.ts                        # Python turtle 模块源码 + JS Canvas 渲染
│   └── errorTranslate.ts                # 11种 kid-friendly 错误翻译
├── hooks/
│   ├── usePyodide.ts                    # Pyodide React Hook
│   ├── useLocalStorage.ts               # 持久化 Hook
│   └── useProgress.ts                   # 进度管理 Hook
├── components/
│   ├── editor/
│   │   ├── CodeEditor.tsx               # CodeMirror 6 封装（底部含运行按钮）
│   │   ├── CodeEditor.module.css
│   │   ├── RunButton.tsx                # 运行按钮
│   │   ├── RunButton.module.css
│   │   ├── ErrorDisplay.tsx             # 错误友好展示
│   │   └── ErrorDisplay.module.css
│   ├── output/
│   │   ├── OutputPanel.tsx              # 控制台/画布/变量 三Tab面板
│   │   ├── OutputPanel.module.css
│   │   ├── TurtleCanvas.tsx             # 400×400 Canvas 画布
│   │   └── TurtleCanvas.module.css
│   ├── lesson/
│   │   ├── LessonView.tsx               # 课程内容展示
│   │   ├── LessonView.module.css
│   │   ├── LessonNav.tsx                # 上下课导航
│   │   ├── LessonNav.module.css
│   │   ├── CourseMap.tsx                # 课程地图
│   │   ├── CourseMap.module.css
│   │   ├── Hints.tsx                    # 渐进提示
│   │   └── Hints.module.css
│   └── layout/
│       ├── AppShell.tsx                 # 应用外壳
│       ├── AppShell.module.css
│       ├── TopNav.tsx                   # 顶部导航
│       ├── TopNav.module.css
│       ├── ResizeHandle.tsx             # 可拖拽分隔条
│       └── ResizeHandle.module.css
├── data/courses/
│   ├── index.ts                         # 课程注册中心
│   └── main/l1/                         # L1 4节课
├── pages/
│   ├── Home.tsx                         # 首页
│   ├── Home.module.css
│   ├── Lesson.tsx                       # 三栏可缩放课程页
│   ├── Lesson.module.css
│   ├── CourseMapPage.tsx                # 课程地图页
│   └── Achievements.tsx                 # 成就页
├── App.tsx                              # 路由
└── main.tsx                             # 入口
```

---

## 6. 关键环境配置

### Pyodide 静态资源

Pyodide 需要在运行时加载 `~11MB` 的 WASM 和 Python 标准库文件。Vite 开发模式下需要配置：

```typescript
// vite.config.ts 补充
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy' // 需要安装

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{
        src: 'node_modules/pyodide/*.{wasm,js,data}',
        dest: 'pyodide'
      }]
    })
  ],
  // ...
})
```

或者使用 CDN 方案（推荐部署时使用）：

```typescript
// pyodide.ts 中
const pyodide = await initPyodide({
  indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
});
```

---

## 文档索引

| 文档 | 作用 |
|------|------|
| [DESIGN.md](DESIGN.md) | 产品方案与架构设计（做什么） |
| **IMPLEMENT.md** (本文档) | 实现细节与设计决策（怎么做） |
| [TASK.md](TASK.md) | 可执行的任务清单（分步执行） |
| [COURSES.md](COURSES.md) | 课程内容编写规范与模板 |