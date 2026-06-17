// ============================================================
// HiPython — L2 Lesson 8: 彩虹螺旋
// ============================================================

import type { Lesson } from '../../../../types';

export const l2Lesson8: Lesson = {
  id: 'l2_8',
  title: '第8课：彩虹螺旋',
  series: 'main',
  difficulty: 2,
  prerequisites: ['l2_7'],
  estimatedTime: 30,
  objectives: [
    '学会使用 turtle.color() 改变画笔颜色',
    '理解 turtle.speed() 控制画图速度',
    '用循环 + 颜色 + 角度变化画螺旋图案',
  ],
  content: {
    intro:
      '画了正方形，还不错吧？但你有没有觉得——只有黑色有点单调？\n\n' +
      '今天我们要给小海龟配上**彩色画笔**！\n' +
      '红色、蓝色、绿色、紫色……想用什么颜色就用什么颜色。\n\n' +
      '而且，我们不只画正方形了——我们要画一个**彩色螺旋线**！\n' +
      '这种图案在数学里叫"螺旋"，看起来超酷的。',
    sections: [
      {
        type: 'text',
        title: '换颜色',
        body:
          '`turtle.color("red")` 把画笔变成红色。\n' +
          '常用的颜色名：`"red"`（红）、`"blue"`（蓝）、`"green"`（绿）、`"purple"`（紫）、`"orange"`（橙）。\n\n' +
          '但如果每次手动换颜色太麻烦了……能不能让计算机自动换？\n' +
          '当然可以！把颜色名做成一个列表，用循环依次取出来就行了。',
      },
      {
        type: 'code',
        title: '颜色列表 + 循环',
        body: 'colors = ["red", "blue", "green", "purple", "orange"]\nfor c in colors:\n    turtle.color(c)\n    turtle.forward(100)\n    turtle.left(72)',
      },
      {
        type: 'tip',
        title: '画图速度',
        body:
          '如果觉得画得太慢或太快，可以用 `turtle.speed(10)` 来控制：\n' +
          '• 速度从 1（最慢）到 10（最快）\n' +
          '• 想看动画效果 → 设慢一点（3~5）\n' +
          '• 想直接看结果 → 设 `turtle.speed(10)`',
      },
      {
        type: 'text',
        title: '螺旋的秘密',
        body:
          '螺旋线的秘密就是：**每次走的步数越来越多**！\n\n' +
          '第 1 次走 10 步，第 2 次走 20 步，第 3 次走 30 步……\n' +
          '步数越来越大，转角一直不变，就自然形成了螺旋！\n\n' +
          '用循环变量 `i` 乘以一个数，就能让步数递增。',
      },
      {
        type: 'challenge',
        body:
          '画一条彩色螺旋线！\n\n' +
          '要求：\n' +
          '1. 准备好几个颜色，比如红、蓝、绿、紫、橙\n' +
          '2. 循环 50 次\n' +
          '3. 每次的角度稍微转一下（试试 59 度）\n' +
          '4. 每次走的步数递增（试试 `i * 5`）\n' +
          '5. 每走一步换一个颜色\n\n' +
          '看看能画出什么样的图案？试试调不同的转角（比如 60、89、91）看看效果有什么不同！',
      },
    ],
    summary:
      '太美了！你用代码创造了一幅彩色螺旋艺术品！🎨\n\n' +
      '今天学到的新技能：\n' +
      '• `turtle.color("red")` — 给画笔换颜色\n' +
      '• `turtle.speed(10)` — 控制画画速度\n' +
      '• 颜色列表 + 循环 = 自动换色\n' +
      '• 步数递增 + 固定转角 = 螺旋\n\n' +
      '去试试不同的颜色组合和转角吧，看看能画出什么惊喜！',
  },
  starterCode:
    'import turtle\nturtle.speed(10)\n\ncolors = ["red", "blue", "green", "purple", "orange"]\n\nfor i in range(50):\n    turtle.color(colors[i % 5])\n    turtle.forward(i * 5)\n    turtle.left(59)\n\nturtle.done()',
  solution:
    'import turtle\nturtle.speed(10)\n\ncolors = ["red", "blue", "green", "purple", "orange"]\n\nfor i in range(50):\n    turtle.color(colors[i % 5])\n    turtle.forward(i * 5)\n    turtle.left(59)\n\nturtle.done()',
  hints: [
    '用 `colors[i % 5]` 可以让颜色循环使用（i 除以 5 的余数取 0~4）',
    '步数用 `i * 5` 会让每次走的距离越来越大',
    '转角试试 59、60、89、91，看看画出来的图案有什么不一样？',
  ],
  checks: [
    { description: '代码里有 import turtle', type: 'contains', value: 'import turtle' },
    { description: '代码里有 turtle.color', type: 'contains', value: 'color(' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};