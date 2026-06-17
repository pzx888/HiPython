// ============================================================
// HiPython — L2 Lesson 7: 画个正方形
// ============================================================

import type { Lesson } from '../../../../types';

export const l2Lesson7: Lesson = {
  id: 'l2_7',
  title: '第7课：画个正方形',
  series: 'main',
  difficulty: 2,
  prerequisites: ['l2_5'],
  estimatedTime: 25,
  objectives: [
    '认识 turtle 画图工具',
    '学会使用 turtle.forward() 和 turtle.left()',
    '用循环画一个正方形',
  ],
  content: {
    intro:
      '写代码不光能显示文字，还能**画画**！\n\n' +
      'Python 有一个画图工具叫 turtle（小海龟）。\n' +
      '想象有一只小海龟，它嘴里叼着一支笔。\n' +
      '你告诉它"向前走 100 步"，它就画一条 100 步长的线。\n' +
      '你告诉它"左转 90 度"，它就转个身。\n\n' +
      '走吧，我们去画第一个图形！',
    sections: [
      {
        type: 'text',
        title: '认识 turtle',
        body:
          '在我们这里，小海龟住在画布上。画布大小是 400×400，小海龟一开始站在正中心。\n\n' +
          '最重要的两个指令：\n' +
          '• `turtle.forward(100)` — 向前走 100 步（画一条线）\n' +
          '• `turtle.left(90)` — 向左转 90 度\n\n' +
          '试试看：先 `import turtle`（召唤小海龟），然后写一条 `turtle.forward(100)`，运行后切换到 🎨 画布 看看！',
      },
      {
        type: 'code',
        title: '画第一条线',
        body: 'import turtle\nturtle.forward(100)\nturtle.done()',
      },
      {
        type: 'tip',
        title: '别忘了 import turtle',
        body:
          '每次画图前，都要先写 `import turtle` 来"召唤"小海龟。\n' +
          '画完之后写 `turtle.done()` 告诉计算机画完了。\n' +
          '运行代码后，切换到 🎨 画布 标签页看效果！',
      },
      {
        type: 'text',
        title: '用循环画正方形',
        body:
          '正方形有 4 条边。每条边之后，小海龟要转 90 度。\n\n' +
          '如果用循环来画：重复 4 次"向前走 → 左转 90°"\n' +
          '用之前学的 for 循环，4 行代码就搞定了！\n\n' +
          '这就是**循环 + turtle**的魔法：用最少的代码画最多的图形。',
      },
      {
        type: 'challenge',
        body:
          '画一个边长为 100 的正方形！\n\n' +
          '要求：\n' +
          '1. 用 `import turtle` 召唤小海龟\n' +
          '2. 用 for 循环画 4 条边\n' +
          '3. 每条边 100 步长，转角 90 度\n' +
          '4. 最后写 `turtle.done()`\n\n' +
          '提示：`for i in range(4):` 下面的两行代码记得缩进！',
      },
    ],
    summary:
      '你今天开始画画了！这是一个新的世界。\n\n' +
      '记住：\n' +
      '• `import turtle` — 召唤小海龟\n' +
      '• `turtle.forward(100)` — 前进画线\n' +
      '• `turtle.left(90)` — 左转（90度是一个直角）\n' +
      '• 循环 + 画画 = 超级组合！\n\n' +
      '正方形只是开始，下一课我们要画更酷的图案！',
  },
  starterCode:
    'import turtle\n\nfor i in range(4):\n    turtle.forward(100)\n    turtle.left(90)\n\nturtle.done()',
  solution:
    'import turtle\n\nfor i in range(4):\n    turtle.forward(100)\n    turtle.left(90)\n\nturtle.done()',
  hints: [
    '记得先写 `import turtle`，不然小海龟不在家！',
    '循环 4 次：每次 `turtle.forward(100)` 和 `turtle.left(90)`',
    '画完别忘了 `turtle.done()` —— 不然小海龟会一直等！',
  ],
  checks: [
    { description: '代码里有 import turtle', type: 'contains', value: 'import turtle' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里有 forward', type: 'contains', value: 'forward' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};