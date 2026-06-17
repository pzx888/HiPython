// ============================================================
// HiPython — Game G3: 列表整理师
// ============================================================

import type { Lesson } from '../../../types';

export const g3Challenge: Lesson = {
  id: 'g3',
  title: '挑战3：列表整理师',
  series: 'game',
  difficulty: 3,
  prerequisites: ['g2'],
  estimatedTime: 15,
  objectives: [
    '用列表存储数据',
    '用 append 添加元素',
    '用 for 遍历列表找到目标',
  ],
  content: {
    intro:
      '📋 你收到了一个乱糟糟的购物清单！\n\n' +
      '里面有的东西重复了，有的东西不需要。\n' +
      '你的任务：把清单整理好，只留下需要的东西！\n\n' +
      '⚡ 限制：代码不能超过 **12 行**',
    sections: [
      {
        type: 'text',
        title: '🗂️ 任务',
        body:
          '有一个清单：`["牛奶", "面包", "牛奶", "鸡蛋", "面包", "苹果"]`\n\n' +
          '你的任务是：\n' +
          '1. 创建一个新列表，只放第一次出现的商品\n' +
          '2. 如果商品已经在新列表里了，跳过\n' +
          '3. 打印整理后的清单\n\n' +
          '提示：用 `if item not in new_list:` 判断！',
      },
      {
        type: 'challenge',
        body:
          '整理购物清单，去掉重复的商品！\n\n' +
          '要求：\n' +
          '• 代码不能超过 12 行\n' +
          '• 整理后的清单不能有重复\n' +
          '• 保持商品原来的顺序\n\n' +
          '⏱️ 时间限制：8 分钟',
      },
    ],
    summary:
      '清单整理完毕！`if item not in new_list:` 是一个超有用的技巧。\n' +
      '这个技巧在真实编程中经常用到——"去重"！',
  },
  starterCode:
    'items = ["牛奶", "面包", "牛奶", "鸡蛋", "面包", "苹果"]\nunique_items = []\n\n# 在这整理清单...\n\nprint("整理后：", unique_items)',
  solution:
    'items = ["牛奶", "面包", "牛奶", "鸡蛋", "面包", "苹果"]\nunique_items = []\n\nfor item in items:\n    if item not in unique_items:\n        unique_items.append(item)\n\nprint("整理后：", unique_items)',
  hints: [
    '创建一个空列表 `unique_items = []` 来放整理后的结果',
    '遍历原清单，用 `if item not in unique_items:` 判断是否已存在',
    '如果不重复，用 `unique_items.append(item)` 加入新列表',
  ],
  checks: [
    { description: '代码里有列表', type: 'contains', value: '[' },
    { description: '代码里有 append', type: 'contains', value: 'append' },
    { description: '代码里有 for 和 if', type: 'contains', value: 'if ' },
    { description: '代码不超过 12 行（不含空行）', type: 'max_lines', value: 12 },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};