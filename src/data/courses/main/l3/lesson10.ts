// ============================================================
// HiPython — L3 Lesson 10: 年龄小管家
// ============================================================

import type { Lesson } from '../../../../types';

export const l3Lesson10: Lesson = {
  id: 'l3_10',
  title: '第10课：年龄小管家',
  series: 'main',
  difficulty: 3,
  prerequisites: ['l3_9'],
  estimatedTime: 25,
  objectives: [
    '掌握 if/elif/else 多分支判断',
    '理解条件判断的顺序（从上到下依次检查）',
    '学会用 int() 把文字转数字',
  ],
  content: {
    intro:
      '上节课我们用 if/else 做了猜数字游戏，但只判断了 3 种情况。\n\n' +
      '现实中很多事情不止两种情况！比如：\n' +
      '• 0-3 岁：婴幼儿\n' +
      '• 4-12 岁：儿童\n' +
      '• 13-17 岁：青少年\n' +
      '• 18 岁以上：大人\n\n' +
      '这时需要 `elif`（else + if 的缩写），可以让程序分很多层判断。\n' +
      '今天我们要做一个"年龄小管家"，根据年龄给出不同的回应！',
    sections: [
      {
        type: 'text',
        title: 'if / elif / else 三兄弟',
        body:
          '完整的判断结构就像爬楼梯：\n\n' +
          '`if 条件1:` — 第一层，检查条件1\n' +
          '`elif 条件2:` — 第二层，如果条件1不成立，再检查条件2\n' +
          '`elif 条件3:` — 第三层……\n' +
          '`else:` — 最后一层，上面都不成立时执行\n\n' +
          '程序**从上到下**逐个检查，哪个条件先满足就执行哪个。\n' +
          '一旦找到一个匹配的，后面的就不看了。',
      },
      {
        type: 'code',
        title: 'elif 示例',
        body:
          'age = 10\n\n' +
          'if age < 4:\n' +
          '    print("你还是个小宝宝 👶")\n' +
          'elif age < 13:\n' +
          '    print("你是儿童！🎒")\n' +
          'elif age < 18:\n' +
          '    print("你是青少年 📚")\n' +
          'else:\n' +
          '    print("你是大人了 👨‍💻")',
      },
      {
        type: 'tip',
        title: '顺序很重要！',
        body:
          '如果把条件反过来写，结果就错了：\n\n' +
          '❌ 错误写法：先判断 `age < 18`，那么 3 岁也被归为"青少年"\n' +
          '✅ 正确写法：从最严格的条件开始判断（从小到大）\n\n' +
          '记住：**先写范围最窄的条件，再写范围更宽的条件**。',
      },
      {
        type: 'text',
        title: 'input() 和 int()',
        body:
          '`input()` 获取用户输入，但得到的是**文字**（字符串）。\n' +
          '比如输入 10，Python 把它当成 `"10"` 而不是数字 10。\n\n' +
          '`int()` 可以把文字转成整数：`int("10")` → 数字 10。\n' +
          '所以 `age = int(input("你几岁了？"))` 一步到位！',
      },
      {
        type: 'challenge',
        body:
          '做一个"年龄小管家"程序！\n\n' +
          '要求：\n' +
          '1. 用 `input()` 问年龄\n' +
          '2. 用 `int()` 把输入转成数字\n' +
          '3. 按照年龄分多档回复：\n' +
          '   · 0-3 岁：小宝宝\n' +
          '   · 4-12 岁：小朋友\n' +
          '   · 13-17 岁：大朋友\n' +
          '   · 18+ 岁：大人\n' +
          '4. 如果输入的数字很奇怪（比如 200），给出特别回复！',
      },
    ],
    summary:
      'if / elif / else 让你可以处理很多不同的情况，程序越来越像一个真正的"小管家"了！\n\n' +
      '记住：\n' +
      '• `if` 第一条判断 | `elif` 中间判断 | `else` 最后的兜底\n' +
      '• 判断是**从上到下**的，先匹配先执行\n' +
      '• `int()` 把文字转数字\n' +
      '• 条件从小范围写到大范围\n\n' +
      '试着改改年龄的分界点，看看不同的回复！',
  },
  starterCode:
    'age = int(input("请输入你的年龄："))\n\nif age <= 3:\n    print("你还是个小宝宝呢 👶")\nelif age <= 12:\n    print("你是个可爱的小朋友 🎒")\nelif age <= 17:\n    print("你是个酷酷的大朋友 📚")\nelif age <= 120:\n    print("你已经是大人啦！👨‍💻")\nelse:\n    print("哇！" + str(age) + "岁？你是神仙吗？🧚")',
  solution:
    'age = int(input("请输入你的年龄："))\n\nif age <= 3:\n    print("你还是个小宝宝呢 👶")\nelif age <= 12:\n    print("你是个可爱的小朋友 🎒")\nelif age <= 17:\n    print("你是个酷酷的大朋友 📚")\nelif age <= 120:\n    print("你已经是大人啦！👨‍💻")\nelse:\n    print("哇！" + str(age) + "岁？你是神仙吗？🧚")',
  hints: [
    '用 `age = int(input(...))` 直接获取数字年龄',
    '条件从大到小或从小到大写，顺序要对',
    '最后一个 else 用来处理"意外输入"（比如 200 岁）',
  ],
  checks: [
    { description: '代码里有 if 和 elif', type: 'contains', value: 'elif ' },
    { description: '代码里有 int(input())', type: 'contains', value: 'int(input(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};