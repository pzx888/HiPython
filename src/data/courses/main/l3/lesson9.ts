// ============================================================
// HiPython — L3 Lesson 9: 猜数字游戏
// ============================================================

import type { Lesson } from '../../../../types';

export const l3Lesson9: Lesson = {
  id: 'l3_9',
  title: '第9课：猜数字游戏',
  series: 'main',
  difficulty: 3,
  prerequisites: ['l2_6'],
  estimatedTime: 25,
  objectives: [
    '理解 if/else 条件判断',
    '学会使用比较运算符（>, <, ==）',
    '做出一个猜数字小游戏',
  ],
  content: {
    intro:
      '之前我们学的代码，计算机都是"照做"就行——你说什么它做什么。\n\n' +
      '但真正的程序需要会**做判断**：\n' +
      '• 如果密码正确 → 让你进门\n' +
      '• 如果密码错误 → 不让你进\n' +
      '• 如果分数高 → 显示"厉害！"\n' +
      '• 如果分数低 → 显示"加油！"\n\n' +
      '今天我们就来学这个"如果…就…"——Python 里的 `if` 语句。\n' +
      '然后用它做一个猜数字游戏！',
    sections: [
      {
        type: 'text',
        title: 'if 语句 — 让程序做判断',
        body:
          '`if` 后面跟一个**条件**，冒号下面写"条件成立时要做什么"。\n\n' +
          '就像说："如果外面下雨，我就带伞。"\n\n' +
          '比较运算符有：\n' +
          '• `>` 大于  `>=` 大于等于\n' +
          '• `<` 小于  `<=` 小于等于\n' +
          '• `==` 等于（两个等号！一个等号是赋值）\n' +
          '• `!=` 不等于',
      },
      {
        type: 'code',
        title: 'if 示例',
        body: 'score = 85\nif score >= 60:\n    print("及格啦！🎉")\nelse:\n    print("再试一次吧！💪")',
      },
      {
        type: 'tip',
        title: '== 和 = 不一样！',
        body:
          '`=` 一个等号 = **赋值**（把东西放在盒子里）\n' +
          '`==` 两个等号 = **判断是否相等**（问问：这两个一样吗？）\n\n' +
          '这是新手最容易搞混的地方，记住：判断相不相等用 `==`！',
      },
      {
        type: 'text',
        title: '猜数字游戏的思路',
        body:
          '游戏的规则很简单：\n' +
          '1. 程序在心里想一个数字（比如 7）\n' +
          '2. 玩家输入一个数字\n' +
          '3. 如果猜大了 → 提示"大了"\n' +
          '4. 如果猜小了 → 提示"小了"\n' +
          '5. 如果猜对了 → 提示"恭喜！"\n\n' +
          '用 `input()` 获取玩家输入，用 `int()` 把文字转成数字，用 if/elif/else 做判断。',
      },
      {
        type: 'challenge',
        body:
          '做一个猜数字游戏！\n\n' +
          '要求：\n' +
          '1. 用一个变量 `secret = 7` 存储目标数字\n' +
          '2. 用 `input()` 让玩家猜\n' +
          '3. 用 `int()` 把输入的文字转成数字\n' +
          '4. 用 if/elif/else 判断大了、小了、还是猜中了\n\n' +
          '提示：`int(input("请输入："))` 可以一步完成输入和转数字。',
      },
    ],
    summary:
      '你做了第一个有"判断"的程序！这是程序变聪明的第一步。\n\n' +
      '记住了：\n' +
      '• `if 条件:` — 条件成立就执行\n' +
      '• `else:` — 否则执行\n' +
      '• 比较用 `>` `<` `==` `!=`\n' +
      '• `=` 赋值，`==` 判断相等\n\n' +
      '试试把 secret 改成别的数字，和爸爸一起玩！',
  },
  starterCode:
    'secret = 7\n\nanswer = int(input("我心里想了一个1到10的数字，你猜是几？"))\n\nif answer > secret:\n    print("大了！再试试")\nelif answer < secret:\n    print("小了！再试试")\nelse:\n    print("🎉 猜对了！太厉害了！")',
  solution:
    'secret = 7\n\nanswer = int(input("我心里想了一个1到10的数字，你猜是几？"))\n\nif answer > secret:\n    print("大了！再试试")\nelif answer < secret:\n    print("小了！再试试")\nelse:\n    print("🎉 猜对了！太厉害了！")',
  hints: [
    '用 `int(input(...))` 把玩家输入的文字变成数字',
    '三个分支：`if answer > secret`、`elif answer < secret`、`else`（等于）',
    '注意：判断相等用 `==`，不是 `=`',
  ],
  checks: [
    { description: '代码里有 if 语句', type: 'contains', value: 'if ' },
    { description: '代码里有 int(input())', type: 'contains', value: 'int(input(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};