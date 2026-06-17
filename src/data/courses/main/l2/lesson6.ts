// ============================================================
// HiPython — L2 Lesson 6: 乘法口诀表
// ============================================================

import type { Lesson } from '../../../../types';

export const l2Lesson6: Lesson = {
  id: 'l2_6',
  title: '第6课：乘法口诀表',
  series: 'main',
  difficulty: 2,
  prerequisites: ['l2_5'],
  estimatedTime: 25,
  objectives: [
    '理解嵌套循环（循环里面套循环）',
    '学会用 print() 的 end 参数控制换行',
    '用嵌套循环打印乘法口诀表',
  ],
  content: {
    intro:
      '上节课我们学会了 for 循环，计算机可以帮我们重复做事了！\n\n' +
      '但是如果把两个循环套在一起会怎样？就像俄罗斯套娃，大循环套小循环。\n\n' +
      '今天，我们要用这个"套娃循环"来做一个乘法口诀表。\n' +
      '想想数学课上背的"一一得一、一二得二"——让计算机帮我们全打出来！',
    sections: [
      {
        type: 'text',
        title: '什么是嵌套循环？',
        body:
          '嵌套循环就是一个循环**放在**另一个循环里面。\n\n' +
          '就像你玩游戏时的"关卡"和"每关的任务"：\n' +
          '• 外层循环 = 从第1关到第9关\n' +
          '• 内层循环 = 每关里面要做的事情\n\n' +
          '外层每走一步，内层走完一整圈。',
      },
      {
        type: 'code',
        title: '嵌套循环示例',
        body: 'for i in range(1, 4):      # 外层：i = 1, 2, 3\n    for j in range(1, 4):  # 内层：j = 1, 2, 3\n        print(i, "×", j, "=", i * j)',
      },
      {
        type: 'tip',
        title: 'print() 不换行',
        body:
          '默认的 `print()` 每次都会换行。但如果想在一行打印多个东西，可以加上 `end="  "`（两个空格）：\n\n' +
          '`print(i * j, end="  ")` 就不会换行，而是在末尾加两个空格。\n' +
          '等一行打完再单独 `print()` 来换行。',
      },
      {
        type: 'text',
        title: '九九乘法表的结构',
        body:
          '我们要打印的是经典的乘法表：\n\n' +
          '1×1=1  1×2=2  1×3=3  ...  1×9=9\n' +
          '2×1=2  2×2=4  2×3=6  ...  2×9=18\n' +
          '...\n' +
          '9×1=9  9×2=18  9×3=27  ...  9×9=81\n\n' +
          '外层循环控制"第几行"（i 从 1 到 9），内层循环控制"一行里的第几个"（j 从 1 到 9）。',
      },
      {
        type: 'challenge',
        body:
          '用嵌套循环打印一个 9×9 乘法表！\n\n' +
          '要求：\n' +
          '1. 一共 9 行，每行 9 个算式\n' +
          '2. 每个算式格式：`i×j=结果`，比如 `3×4=12`\n' +
          '3. 同一行的算式用空格分开\n\n' +
          '提示：内层 print 用 `end="  "`，外层每行结束用 `print()` 换行。',
      },
    ],
    summary:
      '嵌套循环看起来很复杂，但其实就记住一句话：**外层走一步，内层走一圈**。\n\n' +
      '今天学会了：\n' +
      '• 嵌套循环 = 循环里面套循环\n' +
      '• `print("文字", end="  ")` 不换行\n' +
      '• `print()` 单独写一行就是换行\n\n' +
      '你已经可以用代码帮自己背乘法口诀了，太聪明了！🧠',
  },
  starterCode:
    'for i in range(1, 10):\n    for j in range(1, 10):\n        print(i, "×", j, "=", i * j, end="  ")\n    print()',
  solution:
    'for i in range(1, 10):\n    for j in range(1, 10):\n        print(i, "×", j, "=", i * j, end="  ")\n    print()',
  hints: [
    '外层 `for i in range(1, 10):` 控制第几行',
    '内层 `for j in range(1, 10):` 控制每行里的算式，用 `end="  "` 不换行',
    '内层循环结束后，记得写一个空的 `print()` 来换行！',
  ],
  checks: [
    { description: '代码里有嵌套的 for', type: 'contains', value: 'for ' },
    { description: '代码里有 range(1, 10)', type: 'contains', value: 'range(1, 10)' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};