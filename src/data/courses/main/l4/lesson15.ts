// ============================================================
// HiPython — L4 Lesson 15: 随机点名器
// ============================================================

import type { Lesson } from '../../../../types';

export const l4Lesson15: Lesson = {
  id: 'l4_15',
  title: '第15课：随机点名器',
  series: 'main',
  difficulty: 4,
  prerequisites: ['l4_13'],
  estimatedTime: 25,
  objectives: [
    '复习列表和 random 模块的组合使用',
    '学会从列表中随机抽取元素',
    '做一个实用的随机点名小程序',
  ],
  content: {
    intro:
      '上课的时候，老师想请一个同学回答问题——\n' +
      '但选谁好呢？每个同学都举手，老师好为难！\n\n' +
      '不如让计算机来决定！做一个**随机点名器**——\n' +
      '把所有同学的名字放进列表里，计算机随机选一个。\n' +
      '公平、公正、还有惊喜感！🎯\n\n' +
      '这就要用到我们学过的两个老朋友：**列表** + **random**！',
    sections: [
      {
        type: 'text',
        title: '回顾两个老朋友',
        body:
          '📋 **列表**：`students = ["小明", "小红", "小刚", "小丽"]`\n\n' +
          '🎲 **random**：`import random` 让计算机做随机选择\n\n' +
          '把两个结合起来：\n' +
          '• `random.choice(列表)` — 从列表中随机挑一个\n' +
          '• `random.randint(1, 10)` — 随机出一个 1 到 10 的数字\n\n' +
          '`random.choice()` 就像抽签筒——你把手伸进去，摸出一张来！',
      },
      {
        type: 'code',
        title: '最简单的点名器',
        body:
          'import random\n\n' +
          'students = ["小明", "小红", "小刚", "小丽"]\n' +
          'lucky = random.choice(students)\n\n' +
          'print("今天被点中的同学是：", lucky, "🎉")',
      },
      {
        type: 'tip',
        title: '先打乱，再抽签',
        body:
          '如果你想更"正式"一点，可以先把名单**打乱**，再按顺序抽：\n\n' +
          '`random.shuffle(students)` — 把列表里的顺序随机打乱\n\n' +
          '打乱之后，`students[0]` 就是一个随机的人了！\n' +
          '而且打乱后整个列表都是随机的，可以一直按顺序点下去。',
      },
      {
        type: 'text',
        title: '不要让同一个人被点两次',
        body:
          '如果课堂上想给每个同学机会，不要重复点名——\n\n' +
          '一种办法：每点一个人，就把它从列表里删掉！\n' +
          '`students.remove("小明")` — 把"小明"从列表里移除。\n\n' +
          '或者更简单：\n' +
          '• 先 `random.shuffle()` 打乱名单\n' +
          '• 用一个 `index` 变量记录当前点到第几个\n' +
          '• 每次点完 `index + 1`，就不会点到重复的人了',
      },
      {
        type: 'code',
        title: '不重复点名',
        body:
          'import random\n\n' +
          'students = ["小明", "小红", "小刚", "小丽", "小华"]\n' +
          'random.shuffle(students)  # 打乱顺序\n\n' +
          'for index, student in enumerate(students):\n' +
          '    print(f"第{index+1}个：{student}")\n' +
          '# 这样每个人都会被点到一次，顺序随机！',
      },
      {
        type: 'challenge',
        body:
          '做一个实用的随机点名器！\n\n' +
          '要求：\n' +
          '1. 创建一个名单列表，至少放 5 个名字\n' +
          '2. 用 `random.choice()` 随机选一个人\n' +
          '3. 显示被选中的人，加个有趣的 emoji 🎉\n' +
          '4. 用 `random.shuffle()` 打乱名单，打印出随机排序后的名单\n\n' +
          '🌟 进阶挑战：模拟"多次点名，不重复"——\n' +
          '用循环每次点一个人并打印，然后从列表里删掉它，直到点完所有人！',
      },
    ],
    summary:
      '你做了一个随机点名器！以后老师再也不用纠结叫谁回答问题了。😄\n\n' +
      '今天复习和学到的新技能：\n' +
      '• `random.choice(列表)` — 从列表里随机抽一个\n' +
      '• `random.shuffle(列表)` — 随机打乱顺序\n' +
      '• `列表.remove(东西)` — 从列表里删除指定内容\n' +
      '• 列表 + random = 无限可能！\n\n' +
      '试试把名单换成你的朋友、零食、或者周末想做的事——\n' +
      '让计算机帮你做选择！',
  },
  starterCode:
    'import random\n\n' +
    'students = ["小明", "小红", "小刚", "小丽", "小华"]\n\n' +
    '# 随机选一个\n' +
    'lucky = random.choice(students)\n' +
    'print("🎉 被点中的同学是：", lucky)\n\n' +
    '# 打乱名单\n' +
    'random.shuffle(students)\n' +
    'print("\\n随机排序后的名单：")\n' +
    'for i, name in enumerate(students):\n' +
    '    print(f"  {i+1}. {name}")',
  solution:
    'import random\n\n' +
    'students = ["小明", "小红", "小刚", "小丽", "小华"]\n\n' +
    '# 随机选一个\n' +
    'lucky = random.choice(students)\n' +
    'print("🎉 被点中的同学是：", lucky)\n\n' +
    '# 打乱并逐个点名\n' +
    'random.shuffle(students)\n' +
    'print("\\n按顺序点名：")\n' +
    'for i, name in enumerate(students):\n' +
    '    print(f"  第{i+1}个：{name}")\n\n' +
    'print("\\n所有人都被点过啦！✅")',
  hints: [
    '先 `import random`，然后用 `random.choice(名单)` 随机选人',
    '`random.shuffle(名单)` 会直接打乱原来的列表（不需要用 = 赋值）',
    '要逐个点名不重复：先用 `random.shuffle()` 打乱，再用 `for` 循环依次打印',
  ],
  checks: [
    { description: '代码里有 import random', type: 'contains', value: 'import random' },
    { description: '代码里有列表', type: 'contains', value: '[' },
    { description: '代码里有 random.choice 或 random.shuffle', type: 'contains', value: 'random.' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
