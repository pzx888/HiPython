# HiPython — 课程内容编写规范

> 为 10 岁（小学四年级）孩子编写 Python 课程的标准和模板。
> 参照 [DESIGN.md](DESIGN.md) §3 课程设计，遵循 [IMPLEMENT.md](IMPLEMENT.md) 的数据结构。

---

## 1. 编写原则

### 1.1 语言风格

| 原则 | 说明 | 示例 |
|------|------|------|
| **口语化** | 用孩子能听懂的话，像聊天一样 | "来试试看吧！" 而不是 "请执行以下操作" |
| **类比生活** | 用生活场景解释抽象概念 | 变量 = 贴了标签的盒子，列表 = 一排抽屉 |
| **正面鼓励** | 多用"太棒了""试试看""没关系" | "没关系，错了也没事，再试一次！" |
| **短句** | 每句不超过 20 字 | 直接、简洁、有力 |
| **emoji 辅助** | 用 emoji 帮助视觉理解和记忆 | 🐍 Python, 📦 变量, 🔁 循环 |
| **中英混合适度** | 代码用英文，解释用中文 | "用 `print()` 来输出" |

### 1.2 难度控制

- **L1**：每课 1 个新概念，不需要前置知识
- **L2**：每课 1-2 个新概念，需要 L1 基础
- **L3**：引入逻辑组合，需要理解循环
- **L4**：引入数据结构，需要理解变量和循环
- **L5**：引入抽象思维，需要理解前三者

每个新概念：
- 先用熟悉的例子引入
- 再给代码示例
- 然后让学生自己修改
- 最后给一个挑战

### 1.3 内容长度

| 内容 | 限制 |
|------|------|
| `intro` 段落 | 2-4 句 |
| 每个 `section` body | 3-6 句 |
| 整节课 sections | 4-6 个 |
| 代码示例 | 3-10 行 |
| `starterCode` | 3-5 行 |
| `solution` | 3-15 行 |
| 每个 `hint` | 1-2 句 |
| `checks` | 2-3 个 |
| 预估时间 | 15-30 分钟 |

---

## 2. 课程文件模板

### 2.1 新课程文件模板

```typescript
// ============================================================
// HiPython — L{X} Lesson {N}: {中文标题}
// ============================================================

import type { Lesson } from '../../../../types';

export const l{X}_{N}: Lesson = {
  id: 'l{X}_{N}',
  title: '第{N}课：{中文标题}',
  series: 'main',
  difficulty: {1-5},
  prerequisites: ['{前置课程ID}'],
  estimatedTime: {预估分钟数},
  objectives: [
    '{目标1：用孩子能理解的话描述}',
    '{目标2}',
    '{目标3}',
  ],
  content: {
    intro: '{开场白——引起兴趣，说明今天要做什么好玩的东西}',
    sections: [
      // 见下文 §2.2 各类型 section 模板
    ],
    summary: '{总结——用"你学会了"开头，列出关键知识点，鼓励继续}',
  },
  starterCode: '{初始代码，让学生在此基础上修改}',
  solution: '{参考解答，完整可运行}',
  hints: [
    '{提示1：最模糊，只给方向}',
    '{提示2：中等，给具体线索}',
    '{提示3：最具体，几乎给出答案}',
  ],
  checks: [
    // 见下文 §2.3 checks 模板
  ],
};
```

### 2.2 Section 类型模板

#### type: 'text' — 讲解段落

```typescript
{
  type: 'text',
  title: '{小节标题，如 "什么是变量？"}',
  body: '{用孩子能理解的比喻解释概念。2-4 句，不要太长。}',
}
```

**示例**：
```typescript
{
  type: 'text',
  title: '什么是变量？',
  body:
    '变量就像一个**贴了标签的盒子**。\n' +
    '你把东西放进去，贴上标签，以后就能找到它。\n\n' +
    '比如：`name = "小明"` 就是做一个叫 `name` 的盒子，里面装着 `"小明"`。',
}
```

#### type: 'code' — 代码示例

```typescript
{
  type: 'code',
  title: '{这个代码做什么，如 "示例"}',
  body: '{代码内容，纯文本}',
}
```

**示例**：
```typescript
{
  type: 'code',
  title: '示例',
  body: 'name = "小明"\nprint("你好，" + name)',
}
```

#### type: 'tip' — 小贴士

```typescript
{
  type: 'tip',
  title: '{贴士标题，可选}',
  body: '{常见错误提醒、小技巧、注意事项}',
}
```

**示例**：
```typescript
{
  type: 'tip',
  title: '注意引号',
  body:
    '文字必须用引号包起来：`"你好"` 或 `\'你好\'`。\n' +
    '如果忘了写引号，Python 会以为 `你好` 是一个变量的名字！',
}
```

#### type: 'challenge' — 挑战任务

```typescript
{
  type: 'challenge',
  body: '{挑战描述，用数字列表，3-5 条要求}',
}
```

**示例**：
```typescript
{
  type: 'challenge',
  body:
    '来做一个你自己的信息卡片吧！\n' +
    '1. 用变量存你的名字\n' +
    '2. 用变量存你的年龄\n' +
    '3. 用 `print()` 把它们打印出来\n\n' +
    '试试看能不能做出下面这样的效果：\n' +
    '"我叫小明，今年 10 岁"',
}
```

### 2.3 Checks 模板

```typescript
checks: [
  {
    description: '{人类可读的检查描述}',
    type: 'contains',          // 代码中包含某字符串
    value: 'print(',           // 要查找的字符串
  },
  {
    description: '代码可以正常运行',
    type: 'no_error',          // 运行无错误
  },
  {
    description: '输出中包含"小明"',
    type: 'output_contains',   // 运行输出中包含某字符串
    value: '小明',
  },
],
```

**三种 check 类型**：
| type | 含义 | 需要 value |
|------|------|-----------|
| `contains` | 代码文本中包含指定字符串 | ✅ |
| `output_contains` | 运行输出中包含指定字符串 | ✅ |
| `no_error` | 代码运行无错误 | ❌ |

---

## 3. 各难度等级课程编写指南

### 3.1 L1 — 初识 Python

**主题**：`print()`, 字符串, 数字运算, `input()`, 变量

**编写要点**：
- 每课只引入 1 个真正的新概念
- 大量使用 `print()` 让学生看到即时反馈
- 不要解释"为什么"，先让学生"做出来"
- 代码示例不超过 5 行
- starterCode 最好是 1 行可运行的代码

**典型结构**：
```
intro → 概念讲解(text) → 代码示例(code) → 小贴士(tip) → 动手试试(challenge) → 总结
```

### 3.2 L2 — 循环的魔法

**主题**：`for` 循环, `range()`, 嵌套循环, turtle 基础

**编写要点**：
- 从"重复做一件事"的日常场景引入
- 先用 `range(5)` 这种简单形式，不急着讲参数
- turtle 课程要给出坐标系参考（画布中心是 (0,0)）
- 嵌套循环放在最后一课，给学生消化时间

**turtle 课程特殊处理**：
- starterCode 中要 `import turtle` 开头
- 告诉学生画布的方向（→ 是 0°，↓ 是 90°，Canvas 坐标系）
- 提示学生画布大小是 400×400

### 3.3 L3 — 判断与选择

**主题**：`if/else`, 比较运算符, `if/elif/else`, `random` 模块

**编写要点**：
- 从"如果…就…"的日常语言映射到 `if`
- 比较运算符用数学符号对照（`>` 大于号，`==` 等于号）
- 强调 `==` 和 `=` 的区别（常见错误）
- `random` 模块作为"惊喜制造机"引入

### 3.4 L4 — 数据的容器

**主题**：列表, `append()`, 遍历, 字典

**编写要点**：
- 列表 = 一排有编号的抽屉，从 0 号开始
- 字典 = 贴了标签的盒子（类比变量，但有很多个）
- 多用具体例子（购物清单、单词本）
- 避免讲"索引""键值对"这种术语，用"第几个""名字"代替

### 3.5 L5 — 函数的艺术

**主题**：`def`, 函数定义与调用, 参数, 综合项目

**编写要点**：
- 函数 = 自己做积木块（对应 Scratch 的自定义积木）
- 从小函数开始，逐步增加参数
- 最后一课是自由创作，给学生最大发挥空间
- 强调"写一次，用很多次"的便利

---

## 4. 故事线课程编写规范

### 4.1 故事线文件模板

```typescript
import type { Lesson } from '../../../../types';

export const story1: Lesson = {
  id: 's1',
  title: '第一章：唤醒小蛇',
  series: 'story',
  difficulty: 1,
  prerequisites: [],
  estimatedTime: 15,
  objectives: [
    '学会使用 print()',
    '完成第一个剧情任务',
  ],
  content: {
    intro:
      '🐍 在一个神秘的代码世界里，住着一条叫 Python 的小蛇…\n\n' +
      '但是有一天，Python 小蛇睡着了，怎么也叫不醒。\n' +
      '传说只有用 `print()` 魔法，才能唤醒它！\n\n' +
      '你愿意帮帮小蛇吗？',
    sections: [
      {
        type: 'text',
        title: '📜 故事背景',
        body:
          '你来到了代码世界的大门前。\n' +
          '守门的老乌龟说："想进去？先让这扇门对你说话！"\n\n' +
          '老乌龟给了你一个魔法咒语：`print("开门！")`\n' +
          '试试在右边的编辑器里输入这个咒语，然后点运行！',
      },
      // ... 更多 section
      {
        type: 'challenge',
        body:
          '小蛇醒了！但它还很虚弱，需要你用三句 `print()` 来给它能量：\n' +
          '1. 告诉小蛇你的名字\n' +
          '2. 说一句鼓励的话\n' +
          '3. 喊出小蛇的名字 "Python"',
      },
    ],
    summary:
      '🎉 你成功唤醒了 Python 小蛇！\n\n' +
      '小蛇非常感谢你，它决定和你一起在代码世界里冒险。\n' +
      '下一关，你们将穿越数字峡谷…准备好了吗？',
  },
  starterCode: 'print("开门！")',
  solution: 'print("我叫小明")\nprint("加油！")\nprint("Python")',
  hints: [
    '用 `print()` 把你想要说的话包起来',
    '每一句用一个 `print()`，写三行',
    '别忘了把文字放在引号里',
  ],
  checks: [
    { description: '代码里至少有一个 print()', type: 'contains', value: 'print(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
```

### 4.2 故事线设计原则

- **连续叙事**：每关结尾留悬念，吸引下一关
- **角色塑造**：小蛇 Python 是主角，不同关卡有不同 NPC
- **剧情驱动**：用剧情需要来解释"为什么要学这个"
- **简短**：每关剧情文本不超过课程内容，控制在 15-20 分钟

---

## 5. 游戏线课程编写规范

### 5.1 游戏关卡文件模板

```typescript
import type { Lesson } from '../../../../types';

export const game1: Lesson = {
  id: 'g1',
  title: '挑战1：快递员',
  series: 'game',
  difficulty: 1,
  prerequisites: [],
  estimatedTime: 10,
  objectives: [
    '在限定时间内完成代码',
    '用最少的代码行数解决问题',
  ],
  content: {
    intro:
      '🏆 欢迎来到 Code Arena！\n\n' +
      '这里是代码竞技场，每一关都有一个挑战任务。\n' +
      '你需要用 Python 代码来解决问题，越快越好，代码越短越好！',
    sections: [
      {
        type: 'text',
        title: '任务',
        body:
          '小明是一个快递员，他需要打印 5 次"您的快递到了！"。\n' +
          '你能帮他写一段代码，在屏幕上输出 5 次这句话吗？\n\n' +
          '⏱️ 限制：代码不能超过 3 行',
      },
      {
        type: 'challenge',
        body:
          '用 `for` 循环来完成任务！\n' +
          '• 代码不能超过 3 行\n' +
          '• 输出必须恰好是 5 行 "您的快递到了！"',
      },
    ],
    summary: '太厉害了！你用了循环，只用了 2 行代码就完成了任务！',
  },
  starterCode: '# 在这里写代码，不能超过 3 行哦\n',
  solution: 'for i in range(5):\n    print("您的快递到了！")',
  hints: [
    '还记得 `for i in range(5):` 吗？',
    'range(5) 会重复 5 次',
    '在 for 循环里面写 print()',
  ],
  checks: [
    { description: '使用了 for 循环', type: 'contains', value: 'for ' },
    { description: '使用了 range(5)', type: 'contains', value: 'range(5)' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
```

### 5.2 游戏线设计原则

- **关卡制**：每关一道题，难度递增
- **限制条件**：代码行数、运行时间（用 `hasInfiniteLoopRisk` 检查）
- **即时反馈**：通过 checks 自动判断是否通关
- **重玩性**：鼓励尝试不同解法

---

## 6. 检查清单

编写每节课后，对照此清单检查：

- [ ] 标题清晰，孩子能知道这节课要做什么
- [ ] `objectives` 用孩子能理解的话描述，3 条以内
- [ ] `intro` 有吸引力，说明了"为什么学这个"
- [ ] 每个 section 不超过 6 句
- [ ] 至少有一个 `code` 类型的 section（代码示例）
- [ ] 至少有一个 `tip` 类型的 section（常见错误提醒）
- [ ] 至少有一个 `challenge` 类型的 section（动手任务）
- [ ] `summary` 有鼓励性收尾，列出核心知识点
- [ ] `starterCode` 可以独立运行（或非常接近可运行）
- [ ] `solution` 完整可运行，不超过 15 行
- [ ] `hints` 有 3 级，逐级具体
- [ ] `checks` 有 2-3 个，覆盖关键检查点
- [ ] 新概念有类比或生活场景解释
- [ ] 没有连续超过 3 行的纯文字（用 code/tip/challenge 穿插）
- [ ] `estimatedTime` 合理（15-30 分钟）

---

## 7. 已完成的课程参考

| 课程 | 文件 | 特点 |
|------|------|------|
| L1-1: 你好，世界！ | [lesson1.ts](src/data/courses/main/l1/lesson1.ts) | 最简单的入门课，只教 print() |
| L1-2: 我的名片 | [lesson2.ts](src/data/courses/main/l1/lesson2.ts) | 字符串、多行 print |
| L1-3: 迷你计算器 | [lesson3.ts](src/data/courses/main/l1/lesson3.ts) | 数字运算、input() |
| L1-4: 猜猜我是谁 | [lesson4.ts](src/data/courses/main/l1/lesson4.ts) | 变量、字符串拼接 |

编写新课时，建议先阅读 L1-1 和 L1-3 作为参考——前者是纯概念课，后者是交互课。

---

## 文档索引

| 文档 | 作用 |
|------|------|
| [DESIGN.md](DESIGN.md) | 产品方案与架构设计（做什么） |
| [IMPLEMENT.md](IMPLEMENT.md) | 实现细节与设计决策（怎么做） |
| [TASK.md](TASK.md) | 可执行的任务清单（分步执行） |
| **COURSES.md** (本文档) | 课程内容编写规范与模板 |