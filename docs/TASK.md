# HiPython — 实现任务清单

> 基于 [DESIGN.md](DESIGN.md) 方案和 [IMPLEMENT.md](IMPLEMENT.md) 设计，将剩余工作拆解为可执行的任务。
> 每个任务标注：预估工时、前置依赖、产出物、验证方式。

---

## 当前进度：L6 综合挑战 ✅ 已完成（2026-06-24）

阶段一~四 ✅ 已完成。阶段五（L6 综合挑战 4 课 + 成就 + L5-20 文案）✅ 已完成。

🟢 **线上地址**：[https://pzx888.github.io/HiPython/](https://pzx888.github.io/HiPython/)

Spec：[specs/L6-CAPSTONE.md](specs/L6-CAPSTONE.md)

---

## 阶段一：基础平台 + L1课程 ✅ 已完成

（项目初始化、路由、编辑器、Pyodide、输出面板、L1课程等全部完成）

---

## 阶段二：完善编辑器 + L2-L3 课程 ✅ 已完成

### T1 — Turtle Canvas 可视化系统 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-16) |
| **产出** | `src/engine/turtle.ts`, `src/components/output/TurtleCanvas.tsx`, `src/components/layout/ResizeHandle.tsx` |

已实现：
- Python 端 turtle 模块注入（通过 `sys.modules['turtle']` 注册，支持 `import turtle`）
- `_commands` Python list 收集指令 → `json.dumps` 序列化 → JS `JSON.parse` 反序列化
- 支持 12 种指令：forward/backward/left/right/penup/pendown/color/speed/circle/goto/setheading/clear/done
- 400×400 Canvas 渲染 + 网格背景 + 三角 turtle 图标
- 三栏可缩放布局 + 面板折叠/展开 + 拖拽调节宽度

---

### T2 — 变量查看器 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-16) |
| **产出** | `OutputPanel.tsx` 内嵌 VariablesView, `pyodide.ts` 中 `collectVariables()` |

---

### T3 — 代码模板片段系统 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | `src/components/editor/CodeTemplates.tsx`, `CodeTemplates.module.css`, 改造 `CodeEditor.tsx` |

已实现：
- 10 个 kid-friendly 模板按钮（print/input/for/if/list/def/variable/random/turtle/dict）
- emoji + 中文标签，hover 显示描述
- `CodeEditor` 通过 `forwardRef` + `useImperativeHandle` 暴露 `insertTemplate()` 方法
- 模板条放在 `CodeEditor` 内部的 `children` slot，由 `.editorWrapper` flex 容器统一管理空间
- 水平滚动支持（模板多时自动滚动）

---

### T4 — 代码补全启用 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | 改造 `CodeEditor.tsx` |

已实现：
- `autocompleteEnabled` prop（默认 `false`），由 Lesson.tsx 中「💡 提示 OFF/ON」按钮控制
- 25+ kid-friendly Python 补全项（print/input/for/if/def/list/dict/import turtle 等）
- 每项有中文提示说明
- `useMemo` 动态切换 extensions 数组

---

### T5 — 成就自动解锁 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | `src/data/achievements.ts`, 改造 `useProgress.ts` 和 `Achievements.tsx` |

已实现：
- `src/data/achievements.ts` — 集中定义 19 个成就（10 course + 9 typing），每个带 `check(progress)` 函数
- `useProgress.ts` `completeLesson()` 中自动调用 `getUnlockableBadges()` 解锁成就
- `Achievements.tsx` 中移除页面内推导逻辑，统一使用 `ACHIEVEMENTS` 和 `getUnlockableBadges()`
- 运行时双重检查：saved badges + runtime check 并集

---

### T6 — L2 课程内容（4 节课） ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-16) |
| **产出** | `src/data/courses/main/l2/` (4 files + index.ts) |

已完成：T6.1 数字倒计时 / T6.2 乘法口诀表 / T6.3 画个正方形 / T6.4 彩虹螺旋 / T6.5 注册

每节课参照 [COURSES.md](COURSES.md) 模板编写。

---

### T7 — L3 课程内容（4 节课） ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-16) |
| **产出** | `src/data/courses/main/l3/` (4 files + index.ts) |

已完成：T7.1 猜数字 / T7.2 年龄小管家 / T7.3 画个星星 / T7.4 石头剪刀布 / T7.5 注册

---

## 阶段三：故事线 + L4-L5 课程 ✅ 已完成

### T8 — 故事线页面 + 课程 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | `src/pages/Story.tsx`, `src/components/story/`, `src/data/courses/story/` |

已实现：
- `Story.tsx` — 故事模式页面（关卡进度条 + 地图 + 简介）
- `StoryMap.tsx` — 关卡地图组件（✅/🔒/📍 三种状态，线性解锁）
- `StoryDialog.tsx` — 对话气泡组件（打字机效果 + 点击跳过 + 点击继续）
- 5 关故事课程：s1 唤醒小蛇(print) / s2 穿越数字峡谷(循环) / s3 三岔路口(if) / s4 魔法宝库(列表) / s5 铸造魔法杖(def)
- 路由 `/story` + TopNav「📖 故事模式」导航项

### T9 — L4 课程内容（4 节课）✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | `src/data/courses/main/l4/` (4 files + index.ts) |

已完成：T9.1 购物清单 / T9.2 英文单词本 / T9.3 随机点名器 / T9.4 画个花园 / T9.5 注册

### T10 — L5 课程内容（4 节课）✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | `src/data/courses/main/l5/` (4 files + index.ts) |

已完成：T10.1 制作自己的指令 / T10.2 万能画形状 / T10.3 密码生成器 / T10.4 我的作品展 / T10.5 注册

---

## 阶段四：打磨 + 游戏线（预估 5-7 天）

### T11 — 移动端响应式适配 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | 各 CSS Module/theme.css 的媒体查询 |

已实现：
- `theme.css` — 响应式 CSS 变量：tablet (<900px) 缩小 typing key/target；mobile (<600px) 进一步缩小
- `TopNav.module.css` — tablet 缩小品牌和导航；mobile (<480px) 隐藏品牌名仅显示图标
- `Home.module.css` — mobile (<768px) 单栏 features grid、缩小 hero 字号和按钮
- `Lesson.module.css` — tablet (<900px) 三栏垂直堆叠、expandTab 横向显示；mobile (<600px) 紧凑面板头、小字号按钮
- `Story.module.css` — 已有 mobile (<768px) content 列换行

---

### T12 — 游戏线 (Code Arena) ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | `src/pages/Arena.tsx`, `src/data/courses/game/` (5 files + index.ts) |

已实现：
- `Arena.tsx` — 竞技场页面（挑战卡片网格 + 进度统计 + 线性解锁 + 星级显示）
- 5 关游戏挑战：g1 快递员(for) / g2 密码破译(random+if) / g3 列表整理师(去重) / g4 几何艺术家(turtle+list) / g5 终极对决(综合)
- 每关有限制条件（代码行数限制 + 时间限制）
- 路由 `/arena` + TopNav「🏟️ 竞技场」导航项
- 响应式：mobile 单列布局

---

### T13 — UI 美化与打磨 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | 全局 theme.css 增强、Lesson.module.css 动画、AppShell.module.css 过渡 |

已实现：
- **页面切换过渡动画** — AppShell `<main>` fadeIn + slideUp (0.25s ease-out)
- **完成课程庆祝动画** — 庆祝弹出层（emoji 抖动 + 星星旋转弹出 + 点击关闭）
- **星星获得动画** — starPop 关键帧（缩放+旋转 0→1.3→1）
- **统一按钮效果** — theme.css 全局 `button,a{transition}` + hover brightness + active scale
- **加载状态美化** — backdrop-filter 磨砂背景 + 渐变色 shimmer 进度条

---

### T14 — 部署上线 ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-17) |
| **产出** | GitHub Pages 线上地址 |

已实现：
- **T14.1** Pyodide CDN — `https://cdn.jsdelivr.net/npm/pyodide@314.0.0/`（匹配 npm 314.0.0）
- **T14.2** `npm run build` ✅ 零错误
- **T14.3** GitHub Pages 部署 — `npm run deploy` → gh-pages 分支
- **T14.4** 环境区分 — 本地 `BrowserRouter` + `/pyodide/`，生产 `HashRouter` + CDN
- 线上验证通过：首页加载、Python 执行、turtle 画图均正常

🟢 **线上地址**：[https://pzx888.github.io/HiPython/](https://pzx888.github.io/HiPython/)

---

## 任务依赖关系图

```
阶段一 ✅ (已完成)
    ├── T1 (Turtle Canvas) ✅
    ├── T2 (变量查看器) ✅

阶段二 ✅ (已完成):
    ├── T6 (L2 课程) ✅
    ├── T7 (L3 课程) ✅

阶段三 ✅ (已完成):
    ├── T3 (代码模板) ✅
    ├── T4 (代码补全) ✅
    ├── T5 (成就自动解锁) ✅
    ├── T8 (故事线) ✅
    ├── T9 (L4 课程) ✅
    ├── T10 (L5 课程) ✅

阶段四 ✅ (已完成):
    ├── T11 (响应式) ✅
    ├── T12 (游戏线) ✅
    ├── T13 (UI 打磨) ✅
    └── T14 (部署) ✅

阶段五 ✅ (已完成):
    └── T15 (L6 综合挑战 4 课) ✅
```

## 阶段五：L6 综合挑战 ✅ 已完成

### T15 — L6 课程内容（4 节课） ✅ 已完成

| 属性 | 内容 |
|------|------|
| **状态** | ✅ 已完成 (2026-06-24) |
| **产出** | `src/data/courses/main/l6/` (4 files + index.ts) |
| **Spec** | [specs/L6-CAPSTONE.md](specs/L6-CAPSTONE.md) |

已完成：L6-21 代码侦探 / L6-22 超市收银台 / L6-23 魔法画阵 / L6-24 终极闯关

同步更新：`Difficulty` 6、CourseMap L6 标题、成就 `complete_l6` + `l6_all_stars`、L5-20 改为「创作热身」

```

## 项目完成统计

| 指标 | 数量 |
|------|------|
| 总任务数 | 14 |
| 主课程（L1-L6） | 24 节 |
| 故事章节 | 5 集 |
| 游戏挑战 | 5 关 |
| 打字练习 | 完整模块 |
| 成就徽章 | 21 个 |
| 组件数 | 20+ |
| 代码行数 | ~10,000 |
| 构建产物 | 157KB gzip + Pyodide CDN ~11MB |

---

## 文档索引

| 文档 | 作用 |
|------|------|
| [DESIGN.md](DESIGN.md) | 产品方案与架构设计（做什么） |
| [IMPLEMENT.md](IMPLEMENT.md) | 实现细节与设计决策（怎么做） |
| **TASK.md** (本文档) | 可执行的任务清单（分步执行） |
| [COURSES.md](COURSES.md) | 课程内容编写规范与模板 |