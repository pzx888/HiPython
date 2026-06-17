// ============================================================
// HiPython — L4 Lesson 16: 画个花园
// ============================================================

import type { Lesson } from '../../../../types';

export const l4Lesson16: Lesson = {
  id: 'l4_16',
  title: '第16课：画个花园',
  series: 'main',
  difficulty: 4,
  prerequisites: ['l4_13', 'l2_7'],
  estimatedTime: 30,
  objectives: [
    '用列表存储多个位置信息',
    '用列表存储多个颜色',
    '组合 turtle + 列表 + 循环画复杂图案',
  ],
  content: {
    intro:
      '学了列表，又学过了 turtle 画图——\n' +
      '如果把两个组合在一起，会发生什么？💡\n\n' +
      '想象一下：你想画一个花园，有好多花。\n' +
      '如果一朵一朵手动写位置和颜色，要写好多行代码！\n\n' +
      '但如果用**列表**来存所有花的位置和颜色，\n' +
      '然后用**循环**一次性画出来——那就太帅了！\n\n' +
      '今天我们要当一回"代码园艺师"，用 Python 种出一个花园！🌸🌻🌺',
    sections: [
      {
        type: 'text',
        title: '用列表存位置',
        body:
          '画布上的每个点都可以用 `turtle.goto(x, y)` 来移动。\n\n' +
          '如果我们要在多个位置画花，可以把所有位置存在列表里：\n\n' +
          '`positions = [(-100, 0), (0, 0), (100, 0)]`\n\n' +
          '每个位置是一个**小括号**包起来的两个数字（x 坐标和 y 坐标）。\n' +
          '然后用循环依次飞到每个位置画花！',
      },
      {
        type: 'code',
        title: '移动到不同位置',
        body:
          'import turtle\nturtle.speed(10)\n\n' +
          '# 三朵花的位置\n' +
          'positions = [(-100, 0), (0, 0), (100, 0)]\n\n' +
          'for pos in positions:\n' +
          '    turtle.penup()\n' +
          '    turtle.goto(pos[0], pos[1])  # x, y\n' +
          '    turtle.pendown()\n' +
          '    # 在这里画花...\n\n' +
          'turtle.done()',
      },
      {
        type: 'tip',
        title: '画布的坐标系',
        body:
          '画布大小是 400×400，中心是 (0, 0)：\n\n' +
          '• 向右 → x 变大（正数）\n' +
          '• 向左 → x 变小（负数）\n' +
          '• 向下 → y 变大（正数，Canvas 坐标）\n' +
          '• 向上 → y 变小（负数）\n\n' +
          '花的位置不要超过范围，不然就画到画布外面啦！',
      },
      {
        type: 'text',
        title: '画一朵花',
        body:
          '花可以这样画：\n' +
          '1. 选一个颜色\n' +
          '2. 画一个圆圈（花瓣）\n' +
          '3. 转一点角度\n' +
          '4. 再画一个圆圈\n' +
          '5. 重复……直到转完一圈\n\n' +
          '用循环画几个花瓣（比如 6 个），就组成了一朵花！\n' +
          '把画花的代码包好，在每个位置调用一次——一个花园就出现了！',
      },
      {
        type: 'code',
        title: '画一朵花的函数',
        body:
          'def draw_flower(x, y, color):\n' +
          '    turtle.penup()\n' +
          '    turtle.goto(x, y)\n' +
          '    turtle.pendown()\n' +
          '    turtle.color(color)\n' +
          '    for _ in range(6):\n' +
          '        turtle.circle(20)\n' +
          '        turtle.left(60)',
      },
      {
        type: 'challenge',
        body:
          '用代码画一个彩色花园！\n\n' +
          '基础要求：\n' +
          '1. 用 `import turtle` 召唤小海龟\n' +
          '2. 创建一个颜色列表，如 `["red", "pink", "purple", "orange", "blue"]`\n' +
          '3. 创建位置列表，至少 5 个不同的位置\n' +
          '4. 用循环在每个位置画一朵不同颜色的花\n' +
          '5. 最后 `turtle.done()`\n\n' +
          '🌟 提示：花可以用 `circle()` 画圆来组成，\n' +
          '或者任何你觉得好看的图形都可以！创意不限！',
      },
    ],
    summary:
      '你创造了一个代码花园！每一朵花都是代码自动画出来的。🌸\n\n' +
      '今天的超级组合技：\n' +
      '• 列表存位置和颜色\n' +
      '• turtle 画图\n' +
      '• for 循环批量处理\n' +
      '• 三者组合 = 无限创作力！\n\n' +
      '列表让代码变得简洁，循环让重复工作自动化——\n' +
      '这就是编程的魅力！试试把位置换一换、颜色换一换，\n' +
      '看看能创作出什么样的花园？',
  },
  starterCode:
    'import turtle\nturtle.speed(10)\n\n' +
    'colors = ["red", "pink", "purple", "orange", "blue"]\n' +
    'positions = [(-120, 0), (-60, -30), (0, 0), (60, -30), (120, 0)]\n\n' +
    'for i in range(len(positions)):\n' +
    '    x = positions[i][0]\n' +
    '    y = positions[i][1]\n' +
    '    color = colors[i]\n\n' +
    '    turtle.penup()\n' +
    '    turtle.goto(x, y)\n' +
    '    turtle.pendown()\n' +
    '    turtle.color(color)\n' +
    '    # 画一朵花：6 个花瓣\n' +
    '    for _ in range(6):\n' +
    '        turtle.circle(15)\n' +
    '        turtle.left(60)\n\n' +
    'turtle.done()',
  solution:
    'import turtle\nturtle.speed(10)\n\n' +
    'colors = ["red", "pink", "purple", "orange", "blue"]\n' +
    'positions = [(-120, 0), (-60, -30), (0, 0), (60, -30), (120, 0)]\n\n' +
    'for i in range(len(positions)):\n' +
    '    x = positions[i][0]\n' +
    '    y = positions[i][1]\n' +
    '    color = colors[i]\n\n' +
    '    turtle.penup()\n' +
    '    turtle.goto(x, y)\n' +
    '    turtle.pendown()\n' +
    '    turtle.color(color)\n' +
    '    for _ in range(6):\n' +
    '        turtle.circle(15)\n' +
    '        turtle.left(60)\n\n' +
    'turtle.done()',
  hints: [
    '用 `positions[i][0]` 取出第 i 个位置的 x 坐标，`[1]` 是 y 坐标',
    '每个位置用 `goto()` 飞过去，再用循环画几个圆组成一朵花',
    '颜色和位置用同一个序号 `i`，就能让每朵花颜色不同',
  ],
  checks: [
    { description: '代码里有 import turtle', type: 'contains', value: 'import turtle' },
    { description: '代码里有列表', type: 'contains', value: '[' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里有 turtle.circle 或 goto', type: 'contains', value: 'circle' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
