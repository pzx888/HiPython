// ============================================================
// HiPython — L5 Lesson 18: 万能画形状
// ============================================================

import type { Lesson } from '../../../../types';

export const l5Lesson18: Lesson = {
  id: 'l5_18',
  title: '第18课：万能画形状',
  series: 'main',
  difficulty: 5,
  prerequisites: ['l5_17', 'l2_7'],
  estimatedTime: 30,
  objectives: [
    '学会给函数添加参数',
    '理解参数的作用——让函数更灵活',
    '用带参数的 turtle 函数画不同形状',
  ],
  content: {
    intro:
      '上一课的函数很厉害——但每次做的事都一样。\n' +
      '如果我想画正方形，又想画三角形、五边形……\n' +
      '难道每种形状都写一个函数吗？\n\n' +
      '不用！给函数加上**参数（parameter）**就行！\n' +
      '参数就像函数肚子里的"变量槽"——\n' +
      '你每次调用时告诉它不同的数字，它就能做不同的事！\n\n' +
      '就像微波炉——你设定不同时间，它加热不同长度。\n' +
      '函数加上参数，也变成了"万能"工具！🔧',
    sections: [
      {
        type: 'text',
        title: '带参数的函数',
        body:
          '定义带参数的函数：\n\n' +
          '```\n' +
          'def 函数名(参数1, 参数2, ...):\n' +
          '    在函数里使用参数...\n' +
          '```\n\n' +
          '调用时传入具体的值：\n' +
          '`函数名(100, "red")`\n\n' +
          '参数让你能把"信息"传进函数里，\n' +
          '函数就能根据不同的信息做出不同的结果！',
      },
      {
        type: 'code',
        title: '带参数的函数示例',
        body:
          '# sides=边数, length=边长\n' +
          'def draw_shape(sides, length):\n' +
          '    angle = 360 / sides\n' +
          '    for _ in range(sides):\n' +
          '        turtle.forward(length)\n' +
          '        turtle.left(angle)\n\n' +
          'draw_shape(4, 100)  # 正方形\n' +
          'draw_shape(3, 100)  # 三角形\n' +
          'draw_shape(6, 60)   # 六边形',
      },
      {
        type: 'tip',
        title: '参数名 = 变量名',
        body:
          '定义时括号里的叫**参数名**，可以随便取。\n' +
          '调用时传入的叫**实参**（实际参数）。\n\n' +
          '比如 `draw_shape(4, 100)` 调用时：\n' +
          '• `sides` = 4\n' +
          '• `length` = 100\n\n' +
          '参数名的顺序很重要——按定义时的顺序来传！',
      },
      {
        type: 'text',
        title: '万能画形状 + turtle',
        body:
          '现在我们来做一个"万能画形状"函数：\n\n' +
          '• 参数1：边数（画几边形）\n' +
          '• 参数2：边长（每条边多长）\n' +
          '• 参数3：颜色\n\n' +
          '有了这三个参数，你就能画任何正多边形！\n' +
          '三角形、正方形、五边形、六边形……甚至一百边形！',
      },
      {
        type: 'code',
        title: '万能画形状函数',
        body:
          'import turtle\nturtle.speed(10)\n\n' +
          'def draw_polygon(sides, length, color):\n' +
          '    turtle.color(color)\n' +
          '    angle = 360 / sides\n' +
          '    for _ in range(sides):\n' +
          '        turtle.forward(length)\n' +
          '        turtle.left(angle)\n\n' +
          '# 画各种形状\n' +
          'draw_polygon(3, 80, "red")    # 三角形\n' +
          'draw_polygon(4, 80, "blue")   # 正方形\n' +
          'draw_polygon(5, 60, "green")  # 五边形\n' +
          'draw_polygon(8, 40, "purple") # 八边形',
      },
      {
        type: 'challenge',
        body:
          '做一个万能画形状机器！\n\n' +
          '要求：\n' +
          '1. 定义一个 `draw_polygon(sides, length, color)` 函数\n' +
          '2. 函数里面计算转角 = 360 / sides\n' +
          '3. 用循环画出正多边形\n' +
          '4. 调用函数画出至少 4 种不同的形状\n' +
          '5. 每种形状用不同的颜色\n\n' +
          '🌟 进阶：用 `turtle.penup()` 和 `turtle.goto()` 把不同形状画在画布的不同位置，\n' +
          '组成一幅"几何艺术"作品！',
      },
    ],
    summary:
      '你用几行代码就能画任何正多边形了——这就是参数的力量！\n\n' +
      '今天的核心技能：\n' +
      '• `def func(param1, param2):` — 带参数的函数\n' +
      '• 参数让函数变"万能"——不同输入，不同输出\n' +
      '• `360 / sides` — 计算任意多边形的外角\n' +
      '• turtle + 函数 = 几何艺术家！\n\n' +
      '试试画一个正 100 边形——它是圆的近似哦！',
  },
  starterCode:
    'import turtle\nturtle.speed(10)\n\n' +
    'def draw_polygon(sides, length, color):\n' +
    '    turtle.color(color)\n' +
    '    angle = 360 / sides\n' +
    '    for _ in range(sides):\n' +
    '        turtle.forward(length)\n' +
    '        turtle.left(angle)\n\n' +
    '# 画几个形状试试\n' +
    'draw_polygon(3, 80, "red")\n' +
    'draw_polygon(4, 80, "blue")\n' +
    'draw_polygon(6, 50, "green")\n\n' +
    'turtle.done()',
  solution:
    'import turtle\nturtle.speed(10)\n\n' +
    'def draw_polygon(sides, length, color):\n' +
    '    turtle.color(color)\n' +
    '    angle = 360 / sides\n' +
    '    for _ in range(sides):\n' +
    '        turtle.forward(length)\n' +
    '        turtle.left(angle)\n\n' +
    'draw_polygon(3, 80, "red")\n' +
    'draw_polygon(4, 80, "blue")\n' +
    'draw_polygon(5, 60, "green")\n' +
    'draw_polygon(8, 40, "purple")\n\n' +
    'turtle.done()',
  hints: [
    '每个多边形的外角 = 360 ÷ 边数，用 `angle = 360 / sides` 计算',
    '画图的逻辑和画正方形一样：重复"前进 → 转角度"',
    '别忘了先 `import turtle`，最后写 `turtle.done()`',
  ],
  checks: [
    { description: '代码里有 def 定义函数', type: 'contains', value: 'def ' },
    { description: '函数有参数（括号内有内容）', type: 'contains', value: 'draw_polygon(' },
    { description: '代码里有 import turtle', type: 'contains', value: 'import turtle' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};