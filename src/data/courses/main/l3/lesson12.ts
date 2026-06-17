// ============================================================
// HiPython — L3 Lesson 12: 石头剪刀布
// ============================================================

import type { Lesson } from '../../../../types';

export const l3Lesson12: Lesson = {
  id: 'l3_12',
  title: '第12课：石头剪刀布',
  series: 'main',
  difficulty: 3,
  prerequisites: ['l3_10'],
  estimatedTime: 30,
  objectives: [
    '学会使用 random 模块生成随机数',
    '掌握多条件嵌套判断（if 里面套 if）',
    '做一个完整的人机对战小游戏',
  ],
  content: {
    intro:
      '猜数字只有一个秘密数字，玩几次就腻了。\n\n' +
      '如果计算机每次**随机出招**，那就好玩多了！\n\n' +
      'Python 的 `random` 模块可以让计算机"随机选"。\n' +
      '就像一个抽签筒，每次摇出来的结果都不一样。\n\n' +
      '今天我们要做一个完整的"石头✊剪刀✌️布🖐️"小游戏——你和计算机对战！',
    sections: [
      {
        type: 'text',
        title: 'random 模块 — 让计算机随机选',
        body:
          '`import random` 引入随机数模块。\n\n' +
          '最有用的两个函数：\n' +
          '• `random.randint(1, 3)` — 随机返回 1、2 或 3\n' +
          '• `random.choice(["石头", "剪刀", "布"])` — 从列表中随机选一个\n\n' +
          '我们用 `random.choice()` 让计算机随机出招！',
      },
      {
        type: 'code',
        title: 'random 示例',
        body:
          'import random\n\n' +
          'moves = ["石头", "剪刀", "布"]\n' +
          'computer = random.choice(moves)\n' +
          'print("计算机出了：", computer)',
      },
      {
        type: 'tip',
        title: 'if 里面可以套 if',
        body:
          '石头剪刀布的判断逻辑需要两层：\n\n' +
          '第一层：比较你和计算机谁赢（9 种组合）\n' +
          '第二层：每种组合里面可能有更细的判断\n\n' +
          '不用怕，用之前学的 if/elif/else 就能搞定！\n' +
          '关键是先把"谁赢谁输"的规则想清楚了再写代码。',
      },
      {
        type: 'text',
        title: '判断胜负的逻辑',
        body:
          '石头剪刀布的胜负规则：\n' +
          '• 石头 赢 剪刀\n' +
          '• 剪刀 赢 布\n' +
          '• 布 赢 石头\n' +
          '• 相同 = 平局\n\n' +
          '写出所有可能的情况分别判断，或者更聪明的方法：\n' +
          '算出玩家和计算机出招的下标差来判断胜负（暂时不用管，先老老实实写 if）。',
      },
      {
        type: 'challenge',
        body:
          '做一个石头剪刀布小游戏！\n\n' +
          '要求：\n' +
          '1. 用 `input()` 让玩家出拳（石头/剪刀/布）\n' +
          '2. 用 `random.choice()` 让计算机随机出招\n' +
          '3. 判断胜负并显示结果\n' +
          '4. 如果玩家输入的不是"石头""剪刀""布"，提示输入错误\n\n' +
          '提示：先检查输入是否合法，再比较胜负！',
      },
    ],
    summary:
      '你做了一个可以真正"玩"的游戏！用 random 让计算机随机出招，用 if 判断胜负。\n\n' +
      '今天的新技能：\n' +
      '• `import random` — 随机数模块\n' +
      '• `random.choice()` — 从列表随机选\n' +
      '• 多条件嵌套判断\n\n' +
      '现在你已经会做交互式游戏了，去和爸爸挑战几盘吧！✊✌️🖐️',
  },
  starterCode:
    'import random\n\nprint("=== 石头剪刀布 ===\\n")\n\nplayer = input("请出拳（石头/剪刀/布）：")\ncomputer = random.choice(["石头", "剪刀", "布"])\n\nprint("你出了：", player)\nprint("计算机出了：", computer)\n\nif player == computer:\n    print("平局！🤝")\nelif player == "石头":\n    if computer == "剪刀":\n        print("你赢了！🎉")\n    else:\n        print("计算机赢了 😅")\nelif player == "剪刀":\n    if computer == "布":\n        print("你赢了！🎉")\n    else:\n        print("计算机赢了 😅")\nelif player == "布":\n    if computer == "石头":\n        print("你赢了！🎉")\n    else:\n        print("计算机赢了 😅")\nelse:\n    print("请输入 石头、剪刀 或 布！")',
  solution:
    'import random\n\nprint("=== 石头剪刀布 ===\\n")\n\nplayer = input("请出拳（石头/剪刀/布）：")\ncomputer = random.choice(["石头", "剪刀", "布"])\n\nprint("你出了：", player)\nprint("计算机出了：", computer)\n\nif player == computer:\n    print("平局！🤝")\nelif player == "石头":\n    if computer == "剪刀":\n        print("你赢了！🎉")\n    else:\n        print("计算机赢了 😅")\nelif player == "剪刀":\n    if computer == "布":\n        print("你赢了！🎉")\n    else:\n        print("计算机赢了 😅")\nelif player == "布":\n    if computer == "石头":\n        print("你赢了！🎉")\n    else:\n        print("计算机赢了 😅")\nelse:\n    print("请输入 石头、剪刀 或 布！")',
  hints: [
    '用 `random.choice(["石头", "剪刀", "布"])` 让计算机随机选一个',
    '先判断 `player == computer` → 平局',
    '然后分"石头""剪刀""布"三种情况，每种里面再判断计算机出什么',
  ],
  checks: [
    { description: '代码里有 import random', type: 'contains', value: 'import random' },
    { description: '代码里有 if 判断', type: 'contains', value: 'if ' },
    { description: '代码里有 input()', type: 'contains', value: 'input(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};