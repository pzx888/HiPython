// ============================================================
// HiPython — Game G5: 终极对决
// ============================================================

import type { Lesson } from '../../../types';

export const g5Challenge: Lesson = {
  id: 'g5',
  title: '挑战5：终极对决',
  series: 'game',
  difficulty: 5,
  prerequisites: ['g4'],
  estimatedTime: 25,
  objectives: [
    '综合运用所有 Python 知识',
    '在代码行数限制下完成复杂任务',
    '体验极限编程的乐趣',
  ],
  content: {
    intro:
      '🏟️ 欢迎来到终极对决！\n\n' +
      '这是 Code Arena 的最终挑战——\n' +
      '你需要在一个程序中完成多项任务。\n' +
      '用上你学过的所有技能！\n\n' +
      '⚡ 限制：代码不能超过 **20 行**',
    sections: [
      {
        type: 'text',
        title: '🎯 任务：魔法商店',
        body:
          '做一个"魔法商店"小程序：\n\n' +
          '1. 展示一个魔法道具清单（列表 + 循环）\n' +
          '2. 让用户输入想买的道具名（input）\n' +
          '3. 如果有 → 显示价格\n' +
          '4. 如果没有 → 提示"本店没有这个道具"\n' +
          '5. 用随机数给用户一个"惊喜折扣"',
      },
      {
        type: 'code',
        title: '参考结构',
        body:
          'import random\n\nshop = {"魔杖": 100, "药水": 30, "宝剑": 200}\nprint("欢迎光临魔法商店！")\n# 展示商品\n# 获取用户选择\n# 判断是否有货\n# 随机折扣\n# 显示最终价格',
      },
      {
        type: 'challenge',
        body:
          '做出你的魔法商店！\n\n' +
          '要求：\n' +
          '• 代码不能超过 20 行\n' +
          '• 至少包含 4 个道具\n' +
          '• 用 random 给随机折扣（如 8 折）\n' +
          '• 显示最终价格\n\n' +
          '🏆 这是终极挑战——展示你的全部实力！',
      },
    ],
    summary:
      '🎉 你完成了 Code Arena 的所有挑战！\n\n' +
      '从快递员到魔法店老板——\n' +
      '你用一个又一个挑战证明了自己的编程实力！\n\n' +
      '这只是开始，代码世界里还有无限的挑战等着你。\n' +
      '继续练习，继续成长！💪',
  },
  starterCode:
    'import random\n\nshop = {"魔杖": 100, "药水": 30, "宝剑": 200, "盾牌": 150}\nprint("=== 欢迎光临魔法商店！===\\n")\n\n# 展示所有商品...\n\n# 获取用户选择...\n\n# 判断是否有货 + 随机折扣...',
  solution:
    'import random\n\nshop = {"魔杖": 100, "药水": 30, "宝剑": 200, "盾牌": 150}\nprint("=== 欢迎光临魔法商店！===\\n")\n\nfor item, price in shop.items():\n    print(f"  {item} — {price} 金币")\n\nchoice = input("\\n想买什么？")\n\nif choice in shop:\n    discount = random.randint(1, 9) / 10\n    final = int(shop[choice] * discount)\n    print(f"原价 {shop[choice]} 金币")\n    print(f"打 {int(discount*10)} 折 → {final} 金币！")\nelse:\n    print("本店没有这个道具哦～")',
  hints: [
    '用 `for item, price in shop.items():` 同时遍历键和值',
    '用 `if choice in shop:` 判断用户输入的商品是否存在',
    '折扣用 `random.randint(1, 9) / 10` 生成 0.1~0.9 的随机折扣',
  ],
  checks: [
    { description: '代码里有 import random', type: 'contains', value: 'import random' },
    { description: '代码里有字典', type: 'contains', value: '{' },
    { description: '代码里有 input()', type: 'contains', value: 'input(' },
    { description: '代码里有 if 判断', type: 'contains', value: 'if ' },
    { description: '代码不超过 20 行（不含空行）', type: 'max_lines', value: 20 },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};