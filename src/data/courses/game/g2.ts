// ============================================================
// HiPython — Game G2: 密码破译
// ============================================================

import type { Lesson } from '../../../types';

export const g2Challenge: Lesson = {
  id: 'g2',
  title: '挑战2：密码破译',
  series: 'game',
  difficulty: 2,
  prerequisites: ['g1'],
  estimatedTime: 15,
  objectives: [
    '用 random 生成随机密码',
    '用 input + if 判断密码是否正确',
  ],
  content: {
    intro:
      '🔐 你是一个小特工，需要破译一扇门的密码！\n\n' +
      '计算机随机生成了一个 1-10 的秘密数字。\n' +
      '你只有 3 次机会猜对它！\n\n' +
      '⚡ 限制：代码不能超过 **10 行**',
    sections: [
      {
        type: 'text',
        title: '🔍 任务',
        body:
          '做一个猜密码的小游戏：\n' +
          '1. 用 `random.randint(1, 10)` 生成密码\n' +
          '2. 用 `input()` 让玩家猜\n' +
          '3. 判断猜对了没有，给"太大了"或"太小了"的提示\n' +
          '4. 玩家猜对或猜了 3 次后结束',
      },
      {
        type: 'challenge',
        body:
          '破译密码，打开大门！\n\n' +
          '要求：\n' +
          '• 代码不能超过 10 行\n' +
          '• 给玩家提示"太大了"/"太小了"\n' +
          '• 猜对了显示"成功！"\n\n' +
          '⏱️ 时间限制：8 分钟',
      },
    ],
    summary:
      '你破译了密码！如果玩家 3 次都没猜对怎么办？\n' +
      '试试用 `for` 循环代替重复的 `input()`，让代码更简洁！',
  },
  starterCode:
    'import random\n\npassword = random.randint(1, 10)\n\n# 写你的猜密码逻辑...\n',
  solution:
    'import random\n\npassword = random.randint(1, 10)\nfor i in range(3):\n    guess = int(input("猜（1-10）："))\n    if guess == password:\n        print("成功！")\n        break\n    elif guess > password:\n        print("太大了")\n    else:\n        print("太小了")',
  hints: [
    '先 `import random`，用 `random.randint(1, 10)` 生成密码',
    '用 `for i in range(3):` 给玩家 3 次机会',
    '用 `if/elif/else` 判断大小，猜对了用 `break` 跳出循环',
  ],
  checks: [
    { description: '代码里有 import random', type: 'contains', value: 'import random' },
    { description: '代码里有 random.randint', type: 'contains', value: 'randint' },
    { description: '代码里有 if', type: 'contains', value: 'if ' },
    { description: '代码不超过 10 行（不含空行）', type: 'max_lines', value: 10 },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};