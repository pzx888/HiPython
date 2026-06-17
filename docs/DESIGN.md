# HiPython — 少儿Python学习平台方案

## Context

为一位10岁（小学四年级）孩子搭建的亲子共学 Python 平台。孩子有1年Scratch基础、~1000英语词汇量、打字偏慢。目标是做一个 **Web应用 + 项目式学习为主线 + 故事/游戏支线拓展** 的系统，让孩子在家和程序员父亲一起学习。

核心决策：
- Python 执行：**Pyodide**（浏览器端跑Python，零后端）
- 代码编辑器：**CodeMirror 6**（包体小、支持移动端、可定制）
- 内容范围：**平台 + 完整课程内容**一起做
- MVP周期：**4-8周**

---

## 1. 系统架构

```
┌─────────────────────────────────────────────────────┐
│                  HiPython (SPA)                      │
├─────────────────────────────────────────────────────┤
│  React 18 + TypeScript + Vite                        │
├──────────┬──────────┬──────────┬────────────────────┤
│ 课程系统 │ 编辑器   │ 执行引擎 │ 用户系统           │
│ (课程    │ CodeMirror│ Pyodide │ 进度/成就          │
│  路线图) │ 6 + 定制 │ (WASM)  │ /徽章              │
├──────────┴──────────┴──────────┴────────────────────┤
│  课程内容层 (Markdown/MDX 驱动的课程数据)            │
├─────────────────────────────────────────────────────┤
│  路由: React Router  |  UI: 自定义组件 + CSS Modules │
└─────────────────────────────────────────────────────┘
```

### 技术选型

| 层 | 技术 | 理由 |
|---|---|---|
| 框架 | React 18 + TypeScript | 类型安全，生态丰富 |
| 构建 | Vite | 快，对 WASM (Pyodide) 支持好 |
| 路由 | React Router v6 | 标准选择 |
| 编辑器 | CodeMirror 6 (`@uiw/react-codemirror`) | 包体小(470KB gzip)，支持移动端，可扩展 |
| Python运行时 | Pyodide (CPython 3.12 on WASM) | 完整Python，支持turtle/math/random等 |
| 图形输出 | Pyodide + HTML5 Canvas (turtle仿真) | 利用浏览器Canvas做turtle可视化 |
| 样式 | CSS Modules + 自研组件 | 不引入重UI库，完全自定义kid-friendly风格 |
| 状态管理 | React Context + useReducer | 够用，不引入Redux |
| 持久化 | LocalStorage (进度) + IndexedDB (代码) | 纯前端，无需服务器 |
| 部署 | 静态站点 (Vercel/Netlify/GitHub Pages) | 零运维成本 |

### 为什么不用传统的后端沙箱？

- 零服务器成本
- 离线可用（PWA潜力）
- 无需处理恶意代码安全隔离（Pyodide天然沙箱）
- 延迟低（代码执行在本地浏览器）
- 部署简单（一堆静态文件）

---

## 2. 核心模块设计

### 2.1 代码编辑器模块

基于 `@uiw/react-codemirror` + `@codemirror/lang-python` 定制：

- **Kid-friendly 默认配置**：
  - 字号 18px
  - 高对比度语法高亮
  - 简化工具栏（只有"运行"和"撤销"按钮）
  - 隐藏高级功能（代码折叠、正则搜索、minimap）
- **代码补全**：优先展示 `print()` `input()` `for` `if` 等基础关键字
- **代码模板插入**：提供拖拽或点击插入的代码片段（print语句、for循环框架等）
- **错误友好提示**：拦截Python异常，翻译成孩子的语言

### 2.2 Python 执行引擎模块

- **Pyodide 懒加载**：首次进入编辑器页时异步加载（~11MB WASM），显示加载进度
- **stdout 捕获**：重定向 `print()` 输出到右侧输出面板
- **turtle 支持**：拦截 turtle 模块调用，绘制到 Canvas
- **超时保护**：Worker 线程中执行（或使用 Pyodide 的 `setInterruptBuffer`），3秒自动中断防止死循环
- **受限环境**：禁用 `open()` `__import__` 等危险操作

### 2.3 课程系统模块

课程数据结构（TypeScript）：
```typescript
interface Lesson {
  id: string;
  title: string;           // 中英文标题
  series: 'main' | 'story' | 'game';  // 主线/故事线/游戏线
  difficulty: 1 | 2 | 3 | 4 | 5;
  prerequisites: string[];  // 前置课程ID
  estimatedTime: number;    // 预估分钟数
  content: LessonContent;   // 教学内容（MDX）
  starterCode: string;      // 起始代码模板
  solution: string;         // 参考解答
  hints: string[];          // 渐进提示（3级）
  checks: CodeCheck[];      // 自动检查规则
}
```

### 2.4 输出面板模块

分为三个区域（Tab切换）：
1. **控制台**：`print()` 输出
2. **画布**：turtle 绘图结果
3. **变量**：当前作用域变量值（类似 Python Tutor 的可视化，可简化）

### 2.5 成就与进度模块

- **进度存储**：LocalStorage，记录每课完成状态、尝试次数、代码历史
- **成就徽章**：首次运行、首个循环、首个函数、完成一个系列等
- **星星评分**：每课1-3颗星（基于：运行成功/通过检查/代码简洁）

---

## 3. 课程内容设计

### 3.1 主线：项目式学习（`main`）

分为5个难度等级(L1-L5)，每个等级3-5个项目。

#### L1：初识Python — 让计算机说话

| 课时 | 项目 | 知识点 | 作品 |
|------|------|--------|------|
| 1 | 你好，世界！ | `print()`，运行代码 | 打印一句话 |
| 2 | 我的名片 | 字符串、多行print | 打印ASCII名片 |
| 3 | 迷你计算器 | 数字、`+ - * /`、`input()` | 两个数字运算 |
| 4 | 猜猜我是谁 | 变量、字符串拼接 | 个人信息卡片 |

#### L2：循环的魔法 — 重复的力量

| 课时 | 项目 | 知识点 | 作品 |
|------|------|--------|------|
| 5 | 数字倒计时 | `for`循环、`range()` | 倒计时器 |
| 6 | 乘法口诀表 | 嵌套循环、格式化输出 | 9x9表 |
| 7 | 画个正方形 | turtle入门、直角转弯 | 正方形 |
| 8 | 彩虹螺旋 | turtle颜色、`left()`/`right()` | 彩色螺旋线 |

#### L3：判断与选择 — 让程序做决定

| 课时 | 项目 | 知识点 | 作品 |
|------|------|--------|------|
| 9 | 我猜对了吗 | `if/else`、比较运算符 | 猜数字游戏 |
| 10 | 年龄小管家 | `if/elif/else`、`int()`转换 | 年龄判断器 |
| 11 | 画个星星 | turtle + 条件 + 循环 | 五角星 |
| 12 | 石头剪刀布 | `random`模块、多条件 | 人机对战 |

#### L4：数据的容器 — 组织信息

| 课时 | 项目 | 知识点 | 作品 |
|------|------|--------|------|
| 13 | 购物清单 | 列表、`append()`、遍历 | 可编辑清单 |
| 14 | 英文单词本 | 字典、键值对 | 单词翻译器 |
| 15 | 随机点名器 | 列表+random+循环 | 课堂点名 |
| 16 | 画个花园 | turtle+列表+循环 | 多朵花 |

#### L5：函数的艺术 — 创造积木块

| 课时 | 项目 | 知识点 | 作品 |
|------|------|--------|------|
| 17 | 制作自己的指令 | `def`、函数定义与调用 | 自定义打招呼 |
| 18 | 万能画形状 | 带参数的turtle函数 | 画任意多边形 |
| 19 | 密码生成器 | 函数+random+字符串 | 随机密码 |
| 20 | 我的作品展 | 综合项目 | 自选创意作品 |

### 3.2 故事线：Python 大冒险（`story`）

连续叙事，主角小蛇 Python 在代码世界的冒险，每关用代码解决一个剧情问题。

| 关卡 | 故事场景 | 对应知识点 | 对应主线 |
|------|----------|------------|----------|
| S1 | 唤醒小蛇 | `print()` | L1 |
| S2 | 穿越数字峡谷 | 循环、range | L2 |
| S3 | 三岔路口 | 条件判断 | L3 |
| S4 | 魔法宝库 | 列表、字典 | L4 |
| S5 | 铸造魔法杖 | 函数 | L5 |

### 3.3 游戏线：Code Arena（`game`）

独立小游戏挑战，纯粹闯关模式：
- 关卡制，难度递增
- 每题限制代码行数或运行时间
- 排行榜（本地家庭排行）

---

## 4. 关键交互设计

### 4.1 页面布局

```
┌──────────────────────────────────────────────────┐
│  顶部导航：课程地图 | 故事模式 | 挑战模式 | 成就   │
├──────────┬───────────────────┬───────────────────┤
│          │                   │                   │
│  课程    │   代码编辑器       │   输出面板         │
│  导航    │                   │   [控制台|画布]    │
│  (当前课 │   (CodeMirror 6)  │                   │
│   内容)  │                   │   ┌───────────┐   │
│          │                   │   │ 运行结果   │   │
│  - 讲解  │                   │   │           │   │
│  - 提示  │                   │   │ turtle图  │   │
│  - 任务  │                   │   │           │   │
│          │                   │   └───────────┘   │
│          ├───────────────────┤                   │
│          │  [▶ 运行] [↩ 撤销]│                   │
│          │  [💡提示] [📋模板]│                   │
├──────────┴───────────────────┴───────────────────┤
│  底部：进度条 | 星星 | 下一课                       │
└──────────────────────────────────────────────────┘
```

### 4.2 Kid-friendly 细节

- **大字**：界面文字16px起，代码18px
- **大按钮**："运行"按钮 64x64px，亮绿色，点在右下角
- **错误翻译层**：
  - `NameError: name 'xxx' is not defined` → "咦？`xxx` 还没有被定义哦，先给它一个值吧！"
  - `TypeError` → "类型不匹配，你试着检查一下是不是把不同类型的东西混在一起用了？"
  - `SyntaxError` → "这里有个小语法错误，看看是不是少了括号或者引号？"
- **代码模板**：点击按钮自动插入 `print()` `for i in range():` 等常用片段
- **Scratch对照**：保留功能扩展点

---

## 5. 实现阶段

### 第一阶段：基础平台 + L1课程（第1-2周）

**目标**：一个能跑Python代码、有基本编辑器、至少完成2节完整课程的平台。

- [ ] Vite + React + TypeScript 项目初始化
- [ ] 路由骨架搭建（首页、课程页、编辑器页）
- [ ] CodeMirror 6 集成（Python语法高亮 + 基本补全）
- [ ] Pyodide 集成（加载、执行、stdout捕获）
- [ ] 输出面板（控制台输出）
- [ ] 课程数据模型 + 课程页面布局
- [ ] L1 两节课完整内容
- [ ] 本地存储（代码保存）

### 第二阶段：完善编辑器 + L2-L3（第3-4周）

- [ ] turtle Canvas 可视化
- [ ] 错误友好翻译层
- [ ] 代码模板片段系统
- [ ] 课程导航路线图
- [ ] L2 (循环) 4节课
- [ ] L3 (条件判断) 4节课
- [ ] 成就系统（基础版）

### 第三阶段：故事线 + L4-L5（第5-6周）

- [ ] 故事线 (S1-S5) 课程内容
- [ ] L4 (数据结构) 4节课
- [ ] L5 (函数) 4节课
- [ ] 成就系统完善
- [ ] 国际化准备（界面中英文）

### 第四阶段：打磨 + 游戏线（第7-8周）

- [ ] 游戏线基础关卡
- [ ] UI 美化（kid-friendly 主题）
- [ ] 移动端响应式适配
- [ ] 性能优化（Pyodide 预加载策略）
- [ ] 部署上线

---

## 6. 技术细节补充

### 6.1 Pyodide 集成要点

```typescript
// 核心执行逻辑
async function runPython(code: string): Promise<{stdout: string; error: string | null}> {
  const pyodide = await loadPyodide(); // 全局单例，首次加载~3-5秒
  let stdout = '';
  pyodide.setStdout({ batched: (text) => { stdout += text + '\n'; } });
  try {
    await pyodide.runAsync(code);
    return { stdout, error: null };
  } catch (e) {
    return { stdout, error: translateError(e as Error) };
  }
}
```

### 6.2 Turtle 支持方案

Pyodide 不自带 turtle 图形，需要：
1. 在 Python 端实现一个简化版 turtle 模块（或用 `py-turtle` 的思路）
2. Python 端发出绘图指令 → JS 端在 Canvas 上绘制
3. 或者直接使用 Canvas API 的 Python 封装

最简单的方案：自己实现一个迷你 turtle 模块，支持 `forward/backward/left/right/penup/pendown/color/speed`，通过 JS 互操作在 Canvas 上画图。

### 6.3 目录结构

```
hipython/
├── src/
│   ├── components/
│   │   ├── editor/          # 代码编辑器组件
│   │   │   ├── CodeEditor.tsx
│   │   │   ├── RunButton.tsx
│   │   │   ├── CodeTemplates.tsx
│   │   │   └── ErrorDisplay.tsx
│   │   ├── output/          # 输出面板组件
│   │   │   ├── OutputPanel.tsx
│   │   │   ├── Console.tsx
│   │   │   └── TurtleCanvas.tsx
│   │   ├── lesson/          # 课程组件
│   │   │   ├── LessonView.tsx
│   │   │   ├── LessonNav.tsx
│   │   │   ├── CourseMap.tsx
│   │   │   └── Hints.tsx
│   │   ├── achievements/    # 成就组件
│   │   │   ├── BadgeGrid.tsx
│   │   │   └── ProgressBar.tsx
│   │   └── layout/          # 布局组件
│   │       ├── AppShell.tsx
│   │       └── TopNav.tsx
│   ├── engine/              # Python 执行引擎
│   │   ├── pyodide.ts       # Pyodide 加载与执行
│   │   ├── turtle.ts        # Turtle 图形桥接
│   │   └── errorTranslate.ts # 错误翻译
│   ├── data/                # 课程数据
│   │   ├── courses/         # 按系列分
│   │   │   ├── main/        # 主线L1-L5
│   │   │   ├── story/       # 故事线
│   │   │   └── game/        # 游戏线
│   │   └── achievements.ts  # 成就定义
│   ├── hooks/               # 自定义Hooks
│   │   ├── usePyodide.ts
│   │   ├── useProgress.ts
│   │   └── useLocalStorage.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Lesson.tsx
│   │   ├── CourseMap.tsx
│   │   ├── Story.tsx
│   │   ├── Arena.tsx
│   │   └── Achievements.tsx
│   ├── styles/
│   │   └── theme.css        # Kid-friendly 主题变量
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── turtle-worker.js     # (可选) Web Worker
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 7. 验证方案

### 开发验证

1. **功能验证**：每完成一个模块，用 `npm run dev` 启动，在浏览器中手动测试：
   - 代码编辑 → 运行 → 查看输出
   - turtle 绘图 → Canvas 显示
   - 课程导航 → 进度保存
2. **内容验证**：每节课都由程序员父亲（你）带孩子过一遍，收集反馈调整

### 技术验证

1. Pyodide 加载时间是否在可接受范围（目标 < 5秒）
2. 移动端（iPad/平板）上编辑体验是否可用
3. LocalStorage 容量是否够用（注意 5MB 限制）

### 最终验证

1. 孩子能独立完成整个 L1（第1-4课）而不需要父亲频繁介入
2. 孩子能说出 `print` `for` `if` 各自的作用
3. 孩子能独立写出一个10行以内的小程序

---

## 8. 关键文件清单（创建顺序）

1. `package.json` + `vite.config.ts` + `tsconfig.json` — 项目配置
2. `src/main.tsx` + `src/App.tsx` — 应用入口
3. `src/engine/pyodide.ts` — Pyodide 加载与执行（核心）
4. `src/engine/errorTranslate.ts` — 错误翻译
5. `src/components/editor/CodeEditor.tsx` — 编辑器
6. `src/components/output/OutputPanel.tsx` — 输出面板
7. `src/pages/Lesson.tsx` — 课程主页面
8. `src/data/courses/main/l1/` — L1 课程内容
9. `src/components/lesson/CourseMap.tsx` — 课程地图
10. 其余组件和课程内容逐步补充