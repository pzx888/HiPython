// ============================================================
// HiPython — L4 Lesson 13: 购物清单
// ============================================================

import type { Lesson } from '../../../../types';

export const l4Lesson13: Lesson = {
  id: 'l4_13',
  title: '第13课：购物清单',
  series: 'main',
  difficulty: 4,
  prerequisites: ['l3_10'],
  estimatedTime: 25,
  objectives: [
    '认识列表——一个能装很多东西的"大盒子"',
    '学会用 append() 往列表里添加东西',
    '用 for 循环遍历列表里的每一项',
  ],
  content: {
    intro:
      '你有没有跟妈妈一起去超市买过东西？\n\n' +
      '出门前，妈妈会说："记好了，要买牛奶、面包、鸡蛋、苹果……"\n' +
      '如果只买一两样还能记住，但要买十样呢？肯定得写个清单！\n\n' +
      '在 Python 里，我们也需要一个"购物清单"来装很多东西。\n' +
      '它叫**列表（list）**，就像一个有很多格子的抽屉柜！🗄️',
    sections: [
      {
        type: 'text',
        title: '列表——有很多格子的抽屉柜',
        body:
          '列表用方括号 `[]` 表示，里面的东西用逗号隔开：\n\n' +
          '`shopping = ["牛奶", "面包", "鸡蛋", "苹果"]`\n\n' +
          '每个格子有一个**编号**，从 **0** 开始！\n' +
          '• 第 0 号格子：`shopping[0]` → `"牛奶"`\n' +
          '• 第 1 号格子：`shopping[1]` → `"面包"`\n' +
          '• 第 2 号格子：`shopping[2]` → `"鸡蛋"`\n\n' +
          '⚠️ 计算机从 0 开始数，不是从 1！刚开始会不习惯，多练几次就好啦。',
      },
      {
        type: 'code',
        title: '创建和查看列表',
        body:
          'shopping = ["牛奶", "面包", "鸡蛋", "苹果"]\n\n' +
          'print("我的购物清单：", shopping)\n' +
          'print("第一样要买的是：", shopping[0])\n' +
          'print("一共有", len(shopping), "样东西")',
      },
      {
        type: 'tip',
        title: 'len() — 数一数有多少',
        body:
          '`len(列表名)` 可以告诉你列表里有几样东西。\n' +
          '比如 `len(shopping)` 就是 4。\n\n' +
          '这在写循环时特别有用——不用自己数，计算机帮你数！',
      },
      {
        type: 'text',
        title: '往列表里加东西 — append()',
        body:
          '清单写好了，突然想起来还要买酸奶！怎么办？\n\n' +
          '用 `append()` 加到末尾：\n' +
          '`shopping.append("酸奶")`\n\n' +
          '就像在抽屉柜最后面再加一个新抽屉，放进"酸奶"。\n' +
          'append 就是"追加、添加"的意思。',
      },
      {
        type: 'code',
        title: '用 append 加东西',
        body:
          'shopping = ["牛奶", "面包", "鸡蛋"]\n' +
          'print("原来：", shopping)\n\n' +
          'shopping.append("酸奶")\n' +
          'shopping.append("香蕉")\n\n' +
          'print("现在：", shopping)\n' +
          'print("一共有", len(shopping), "样")',
      },
      {
        type: 'text',
        title: '遍历列表——一件一件看',
        body:
          '如果想打印清单里的每一样东西，用 `for` 循环就行：\n\n' +
          '`for item in shopping:`\n' +
          '    `print("要买：", item)`\n\n' +
          '`for ... in ...` 就像你用手指着清单，一件一件念出来。\n' +
          '每次循环，`item` 就变成下一件商品的名字。',
      },
      {
        type: 'challenge',
        body:
          '做一个你自己的购物清单程序！\n\n' +
          '要求：\n' +
          '1. 创建一个购物清单，至少有 3 样东西\n' +
          '2. 用 `print()` 显示清单的内容\n' +
          '3. 用 `append()` 再添加 2 样东西\n' +
          '4. 用 `for` 循环把清单里每一样都打印出来\n' +
          '5. 最后打印 "一共有 X 样东西要买"\n\n' +
          '💡 想想看：为什么用 for 循环比一个一个 print 更好？',
      },
    ],
    summary:
      '你现在有了一个超级购物清单！以后去超市就不会忘东西啦。🛒\n\n' +
      '今天学到的新技能：\n' +
      '• `[ ]` — 创建列表，用逗号分隔\n' +
      '• `列表[编号]` — 取出第几个东西（从 0 开始！）\n' +
      '• `列表.append(东西)` — 往最后面加一个\n' +
      '• `for 变量 in 列表:` — 遍历每一个\n' +
      '• `len(列表)` — 数一数有几个\n\n' +
      '列表是 Python 里最常用的"容器"，好好掌握它！',
  },
  starterCode:
    'shopping = ["牛奶", "面包", "鸡蛋"]\n\n' +
    'print("我的购物清单：", shopping)\n' +
    'print("第一样：", shopping[0])\n\n' +
    '# 添加两样东西\n' +
    'shopping.append("苹果")\n' +
    'shopping.append("香蕉")\n\n' +
    'print("更新后的清单：", shopping)\n' +
    'print("一共有", len(shopping), "样东西")',
  solution:
    'shopping = ["牛奶", "面包", "鸡蛋"]\n\n' +
    'print("我的购物清单：", shopping)\n' +
    'print("第一样：", shopping[0])\n\n' +
    'shopping.append("苹果")\n' +
    'shopping.append("香蕉")\n\n' +
    'print("更新后的清单：")\n' +
    'for item in shopping:\n' +
    '    print("  要买：", item)\n\n' +
    'print("一共有", len(shopping), "样东西要买")',
  hints: [
    '用方括号 `[ ]` 创建列表，里面的东西用逗号隔开',
    '用 `列表名.append("新东西")` 来添加',
    '遍历用 `for item in shopping:`，`item` 是临时变量名，可以随便取',
  ],
  checks: [
    { description: '代码里有列表（方括号）', type: 'contains', value: '[' },
    { description: '代码里有 append(', type: 'contains', value: 'append(' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
