// ============================================================
// HiPython — Game G4: 几何艺术家
// ============================================================

import type { Lesson } from '../../../types';

export const g4Challenge: Lesson = {
  id: 'g4',
  title: '挑战4：几何艺术家',
  series: 'game',
  difficulty: 4,
  prerequisites: ['g3'],
  estimatedTime: 20,
  objectives: [
    '用 turtle 画多边形组合图形',
    '用列表存储位置和颜色',
    '用函数封装画图逻辑',
  ],
  content: {
    intro:
      '🎨 美术馆要举办一场几何艺术展！\n\n' +
      '你的任务：用 turtle 画一幅几何艺术作品。\n' +
      '要求画 3 种不同的形状，每种形状用不同颜色！\n\n' +
      '⚡ 限制：代码不能超过 **15 行**',
    sections: [
      {
        type: 'text',
        title: '🖼️ 任务',
        body:
          '用 turtle 画一幅几何艺术品：\n\n' +
          '1. 至少画 3 种不同的形状（如三角形、正方形、五边形）\n' +
          '2. 每种形状用不同颜色\n' +
          '3. 形状不要重叠，用 `penup()/goto()` 移动到不同位置\n\n' +
          '用列表存位置和颜色，用循环批量画！',
      },
      {
        type: 'challenge',
        body:
          '创作你的几何艺术品！\n\n' +
          '要求：\n' +
          '• 代码不能超过 15 行\n' +
          '• 画 3 种以上不同边数的形状\n' +
          '• 每种形状不同颜色\n' +
          '• 形状分布在画布不同位置\n\n' +
          '⏱️ 时间限制：10 分钟',
      },
    ],
    summary:
      '太美了！你用最少的代码创作了丰富的几何艺术。\n' +
      '列表 + 循环 + turtle = 无限创作力！这就是编程的艺术。',
  },
  starterCode:
    'import turtle\nturtle.speed(10)\n\n# 位置列表和颜色列表\npositions = [(-80, -40), (0, -40), (80, -40)]\ncolors = ["red", "blue", "green"]\nsides = [3, 4, 5]\n\n# 在这里画图...\n\nturtle.done()',
  solution:
    'import turtle\nturtle.speed(10)\n\npositions = [(-80, -40), (0, -40), (80, -40)]\ncolors = ["red", "blue", "green"]\nsides = [3, 4, 5]\n\nfor i in range(len(sides)):\n    turtle.penup()\n    turtle.goto(positions[i][0], positions[i][1])\n    turtle.pendown()\n    turtle.color(colors[i])\n    for _ in range(sides[i]):\n        turtle.forward(40)\n        turtle.left(360 / sides[i])\n\n\nturtle.done()',
  hints: [
    '用 `for i in range(len(sides)):` 同时遍历位置、颜色和边数',
    '每个位置先 `penup()` → `goto()` → `pendown()`',
    '转角公式：`360 / sides[i]`，注意和边长配合',
  ],
  checks: [
    { description: '代码里有 import turtle', type: 'contains', value: 'import turtle' },
    { description: '代码里有列表', type: 'contains', value: '[' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里有 goto 或 circle', type: 'contains', value: 'goto' },
    { description: '代码不超过 15 行（不含空行）', type: 'max_lines', value: 15 },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};