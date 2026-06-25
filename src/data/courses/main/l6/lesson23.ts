// ============================================================
// HiPython — L6 Lesson 23: 魔法画阵
// ============================================================

import type { Lesson } from '../../../../types';

export const l6Lesson23: Lesson = {
  id: 'l6_23',
  title: '第23课：魔法画阵',
  series: 'main',
  difficulty: 6,
  prerequisites: ['l6_22'],
  estimatedTime: 30,
  objectives: [
    '用 def 定义画星星的函数',
    '用列表存颜色和位置，循环调用函数',
    '组合 turtle + 函数 + 循环画复杂图案',
  ],
  content: {
    intro:
      '魔法师要画一个「星星法阵」✨\n\n' +
      '法阵里有 5 颗不同颜色的星星，\n' +
      '分布在不同的位置。\n\n' +
      '如果每颗星都手写一遍代码，要写好多重复内容！\n' +
      '聪明的做法：写一个 `draw_star()` 函数，\n' +
      '然后在不同位置反复调用它。\n\n' +
      '这就是 L6 的图形综合挑战！',
    sections: [
      {
        type: 'text',
        title: '画一颗星',
        body:
          '五角星可以这样画：走 5 次，每次前进 + 右转 144 度。\n\n' +
          '把它包进函数里：\n\n' +
          '`def draw_star(size):`\n' +
          '  里面用 for 循环画 5 条边\n\n' +
          '调用时传入大小：`draw_star(40)`',
      },
      {
        type: 'code',
        title: '星星函数示例',
        body:
          'import turtle\n\n' +
          'def draw_star(size):\n' +
          '    for _ in range(5):\n' +
          '        turtle.forward(size)\n' +
          '        turtle.right(144)\n\n' +
          'draw_star(40)',
      },
      {
        type: 'text',
        title: '在不同位置画多颗星',
        body:
          '用两个列表：\n' +
          '• `colors` — 每颗星的颜色\n' +
          '• `positions` — 每颗星的位置 (x, y)\n\n' +
          '用 for 循环遍历，每次：\n' +
          '1. `goto` 飞到位置\n' +
          '2. `color` 设置颜色\n' +
          '3. 调用 `draw_star()` 画星',
      },
      {
        type: 'challenge',
        body:
          '补全魔法画阵程序！\n\n' +
          '要求：\n' +
          '1. 写 `def draw_star(size):` 函数，画五角星\n' +
          '2. 用 for 循环在 5 个不同位置画 5 颗不同颜色的星\n' +
          '3. 最后 `turtle.done()`\n\n' +
          '运行后应该在画布上看到彩色星星法阵！',
      },
    ],
    summary:
      '魔法画阵完成！✨\n\n' +
      '函数 + 列表 + 循环 + turtle = 强大组合。\n' +
      '写一次函数，到处调用——这就是编程的省力之道。\n\n' +
      '最后一关：终极闯关，加油！',
  },
  starterCode:
    'import turtle\n' +
    'turtle.speed(10)\n\n' +
    '# TODO: 定义 draw_star(size) 函数，画五角星\n\n' +
    'colors = ["red", "blue", "green", "orange", "purple"]\n' +
    'positions = [(-100, 0), (-50, 50), (0, 0), (50, 50), (100, 0)]\n\n' +
    'for i in range(len(positions)):\n' +
    '    turtle.penup()\n' +
    '    turtle.goto(positions[i][0], positions[i][1])\n' +
    '    turtle.pendown()\n' +
    '    turtle.color(colors[i])\n' +
    '    # TODO: 调用 draw_star 画一颗星\n\n' +
    'turtle.done()',
  solution:
    'import turtle\n' +
    'turtle.speed(10)\n\n' +
    'def draw_star(size):\n' +
    '    for _ in range(5):\n' +
    '        turtle.forward(size)\n' +
    '        turtle.right(144)\n\n' +
    'colors = ["red", "blue", "green", "orange", "purple"]\n' +
    'positions = [(-100, 0), (-50, 50), (0, 0), (50, 50), (100, 0)]\n\n' +
    'for i in range(len(positions)):\n' +
    '    turtle.penup()\n' +
    '    turtle.goto(positions[i][0], positions[i][1])\n' +
    '    turtle.pendown()\n' +
    '    turtle.color(colors[i])\n' +
    '    draw_star(40)\n\n' +
    'turtle.done()',
  hints: [
    '函数里：`for _ in range(5):` 然后 `forward(size)` 和 `right(144)`',
    '循环里补一行：`draw_star(40)`',
    '别忘了函数要写在 for 循环**之前**',
  ],
  checks: [
    { description: '代码里有 import turtle', type: 'contains', value: 'import turtle' },
    { description: '代码里有 def 函数', type: 'contains', value: 'def ' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里调用了 draw_star', type: 'contains', value: 'draw_star(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
