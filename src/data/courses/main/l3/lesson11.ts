// ============================================================
// HiPython — L3 Lesson 11: 画个星星
// ============================================================

import type { Lesson } from '../../../../types';

export const l3Lesson11: Lesson = {
  id: 'l3_11',
  title: '第11课：画个星星',
  series: 'main',
  difficulty: 3,
  prerequisites: ['l2_7', 'l3_9'],
  estimatedTime: 25,
  objectives: [
    '结合 turtle 和条件判断',
    '理解五角星的几何画法',
    '用循环 + 条件画出星星图案',
  ],
  content: {
    intro:
      '用 turtle 画正方形很容易——每次转 90 度，循环 4 次。\n\n' +
      '但五角星呢？它的角是尖尖的，内角不是 90 度，而是 **144 度**。\n' +
      '这是一个有趣的数学小知识：五角星每个"转角"是 144 度（或者说是 180-144=36 度内角）。\n\n' +
      '今天我们要把 L2 学的 turtle 和 L3 学的条件判断结合，\n' +
      '画出一个漂亮的星星——甚至可以用 if 判断来决定画的大小！',
    sections: [
      {
        type: 'text',
        title: '五角星的秘密',
        body:
          '画五角星的思路很简单：\n\n' +
          '1. 向前画一条线（星星的一条边）\n' +
          '2. 转 144 度\n' +
          '3. 重复 5 次\n\n' +
          '就这 3 步，一个完美的五角星就出来了！\n\n' +
          '试试边长 150：`turtle.forward(150)` + `turtle.left(144)` × 5 次。',
      },
      {
        type: 'code',
        title: '画五角星',
        body: 'import turtle\n\nfor i in range(5):\n    turtle.forward(150)\n    turtle.left(144)\n\nturtle.done()',
      },
      {
        type: 'tip',
        title: '为什么是 144 度？',
        body:
          '不用深究数学原理（以后你会学到），可以先记住：\n' +
          '• 正多边形转角 = 360 / 边数\n' +
          '• 正方形 → 360÷4 = 90°\n' +
          '• 五角星 → 转转 144°（这是个特殊值）\n\n' +
          '试着把 144 改成其他角度，看看会画出什么奇怪的图形？',
      },
      {
        type: 'text',
        title: '用 if 改变颜色',
        body:
          '画星星的时候，可以让奇数边用一种颜色、偶数边用另一种颜色：\n\n' +
          '`if i % 2 == 0:` — 判断 i 是不是偶数（除以 2 余数为 0）\n\n' +
          '偶数边用红色，奇数边用金色，一颗星就更漂亮了！',
      },
      {
        type: 'challenge',
        body:
          '画一颗漂亮的星星！\n\n' +
          '要求：\n' +
          '1. 用 turtle 画一颗五角星（5 条边，转角 144°）\n' +
          '2. 用 if 条件让第偶数条边是金色、第奇数条边是红色\n' +
          '3. 画完之后加上 `turtle.done()`\n\n' +
          '扩展挑战：试试画 3 颗不同大小的星星排成一排！',
      },
    ],
    summary:
      '五角星搞定！现在你已经可以用 turtle 画出标准的几何图形了。\n\n' +
      '记住：\n' +
      '• 五角星 = forward + left(144) × 5\n' +
      '• `i % 2` 可以判断奇偶\n' +
      '• turtle + if = 可以按条件改变画的样式\n\n' +
      '试试把循环次数和转角改一改，探索更多有趣的图形！',
  },
  starterCode:
    'import turtle\n\nturtle.speed(8)\n\nfor i in range(5):\n    if i % 2 == 0:\n        turtle.color("gold")\n    else:\n        turtle.color("red")\n    turtle.forward(150)\n    turtle.left(144)\n\nturtle.done()',
  solution:
    'import turtle\n\nturtle.speed(8)\n\nfor i in range(5):\n    if i % 2 == 0:\n        turtle.color("gold")\n    else:\n        turtle.color("red")\n    turtle.forward(150)\n    turtle.left(144)\n\nturtle.done()',
  hints: [
    '五角星的关键是转角 144°，循环 5 次',
    '用 `i % 2 == 0` 判断偶数，`else` 处理奇数',
    '别忘了 `import turtle` 在最上面，`turtle.done()` 在最后！',
  ],
  checks: [
    { description: '代码里有 import turtle', type: 'contains', value: 'import turtle' },
    { description: '代码里有 if 语句', type: 'contains', value: 'if ' },
    { description: '代码里有 144 度转角', type: 'contains', value: '144' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};