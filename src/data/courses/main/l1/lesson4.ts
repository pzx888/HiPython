// ============================================================
// HiPython — L1 Lesson 4: 猜猜我是谁
// ============================================================

import type { Lesson } from '../../../../types';

export const l1Lesson4: Lesson = {
  id: 'l1_4',
  title: '第4课：猜猜我是谁',
  series: 'main',
  difficulty: 2,
  prerequisites: ['l1_3'],
  estimatedTime: 25,
  objectives: [
    '理解什么是变量',
    '学会使用变量存储信息',
    '学会字符串拼接（把变量和文字组合在一起）',
  ],
  content: {
    intro:
      '现在我们要学一个超重要的概念——**变量**！📦\n\n' +
      '变量就像一个**贴了标签的盒子**，你可以把东西放进去，然后随时拿出来用。\n' +
      '在 Python 里，你可以用变量来存储名字、数字、任何东西！\n\n' +
      '如果你学过 Scratch，变量就像你在 Scratch 里创建的那些"变量积木块"——非常像！',
    sections: [
      {
        type: 'text',
        title: '创建一个变量',
        body:
          '创建变量很简单——给它一个名字，用一个等号 `=` 把值"装"进去：\n\n' +
          '`name = "小明"` — 这行代码的意思是：创建一个叫 `name` 的盒子，把 `"小明"` 放进去。',
      },
      {
        type: 'code',
        title: '变量示例',
        body:
          'name = "小明"\n' +
          'age = 10\n' +
          'hobby = "踢足球"\n\n' +
          'print("我叫", name)\n' +
          'print("我今年", age, "岁")\n' +
          'print("我喜欢", hobby)',
      },
      {
        type: 'tip',
        title: '变量命名小技巧',
        body:
          '• 变量名只能由字母、数字和下划线 `_` 组成\n' +
          '• 不能以数字开头（`1name` ❌，`name1` ✅）\n' +
          '• 尽量用有意义的名字（`x` ❌，`studentName` ✅）\n' +
          '• Python 区分大小写：`name` 和 `Name` 是两个不同的变量！',
      },
      {
        type: 'text',
        title: '字符串拼接',
        body:
          '你可以把变量和文字组合在一起显示。Python 里用逗号 `,` 把它们连起来，\n' +
          'print() 会自动在中间加空格。\n\n' +
          '又或者用 `+` 把字符串连在一起（不过数字要先转成字符串）。',
      },
      {
        type: 'challenge',
        body:
          '写一个"猜猜我是谁"的小程序：\n\n' +
          '1. 创建 3 个变量，分别存你的名字、年龄和爱好\n' +
          '2. 用 print() 把这些信息"介绍"出来\n' +
          '3. 再加一个变量，存一个你最喜欢的数字，然后显示出来\n' +
          '4. 试试修改变量的值，看看输出会怎么变化',
      },
    ],
    summary:
      '太棒了！你学会了变量！🎉 这是编程里最重要的一课。\n\n' +
      '记住：\n' +
      '• 变量 = 带标签的盒子，用来存东西\n' +
      '• `name = "小明"` — 把 `"小明"` 存到 `name` 里\n' +
      '• 文字变量用引号，数字变量不用引号\n' +
      '• 用 `print(变量1, 变量2)` 来显示变量的值\n\n' +
      '恭喜你完成了 L1 的所有课程！你已经掌握了 Python 的基本功！🎓',
  },
  starterCode:
    'name = "小明"\n' +
    'age = 10\n\n' +
    'print("大家好！")\n' +
    'print("我叫", name)\n',
  solution:
    'name = "小明"\n' +
    'age = 10\n' +
    'hobby = "编程"\n' +
    'favoriteNumber = 7\n\n' +
    'print("===============")\n' +
    'print("  猜猜我是谁？")\n' +
    'print("===============")\n' +
    'print("我叫", name)\n' +
    'print("我今年", age, "岁")\n' +
    'print("我喜欢", hobby)\n' +
    'print("我最喜欢的数字是", favoriteNumber)\n' +
    'print("你猜对了吗？😄")',
  hints: [
    '先创建变量：`name = "你的名字"`，`age = 你的年龄`',
    '用 `print()` 把变量显示出来：`print("我叫", name)`',
    '试试创建 3 个以上的变量，每个变量有不同的信息，然后用 print() 全部展示出来',
  ],
  checks: [
    {
      description: '代码中至少定义了 3 个变量（包含 = 号）',
      type: 'contains',
      value: '=',
    },
    {
      description: '代码中使用了 print()',
      type: 'contains',
      value: 'print(',
    },
    {
      description: '代码可以正常运行（没有错误）',
      type: 'no_error',
    },
  ],
};