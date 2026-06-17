// ============================================================
// HiPython — Game G1: 快递员
// ============================================================

import type { Lesson } from '../../../types';

export const g1Challenge: Lesson = {
  id: 'g1',
  title: '挑战1：快递员',
  series: 'game',
  difficulty: 1,
  prerequisites: [],
  estimatedTime: 10,
  objectives: [
    '用最少的代码行数完成任务',
    '在限定时间内完成挑战',
  ],
  content: {
    intro:
      '🏆 欢迎来到 Code Arena！\n\n' +
      '这里是代码竞技场，每一关都有一个挑战任务。\n' +
      '你需要用 Python 代码来解决问题。\n' +
      '越快越好，代码越短越好！\n\n' +
      '⚡ 限制：代码不能超过 **3 行**',
    sections: [
      {
        type: 'text',
        title: '📦 任务',
        body:
          '小明是一个快递员，他需要打印 5 次"您的快递到了！"。\n' +
          '你能帮他写一段代码，在屏幕上输出 5 次这句话吗？\n\n' +
          '用 `for` 循环，一行顶五行！',
      },
      {
        type: 'challenge',
        body:
          '用 `for` 循环来完成任务！\n\n' +
          '要求：\n' +
          '• 代码不能超过 3 行\n' +
          '• 输出必须恰好是 5 行 "您的快递到了！"\n\n' +
          '⏱️ 时间限制：5 分钟',
      },
    ],
    summary:
      '太好了！你用 `for` 循环只用了 2 行代码就完成了 5 次输出！\n' +
      '代码越少越优雅——这就是编程的智慧！',
  },
  starterCode:
    '# 在这里写代码（最多 3 行哦）\n',
  solution:
    'for i in range(5):\n    print("您的快递到了！")',
  hints: [
    '还记得 `for i in range(5):` 吗？它会重复 5 次！',
    'range(5) 会生成 0, 1, 2, 3, 4 这 5 个数字',
    '在 for 循环里面写 print()，注意缩进',
  ],
  checks: [
    { description: '使用了 for 循环', type: 'contains', value: 'for ' },
    { description: '使用了 range(5)', type: 'contains', value: 'range(5)' },
    { description: '代码不超过 3 行（不含空行）', type: 'max_lines', value: 3 },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};