// ============================================================
// HiPython — L2 Lesson 5: 数字倒计时
// ============================================================

import type { Lesson } from '../../../../types';

export const l2Lesson5: Lesson = {
  id: 'l2_5',
  title: '第5课：数字倒计时',
  series: 'main',
  difficulty: 2,
  prerequisites: ['l1_4'],
  estimatedTime: 25,
  objectives: [
    '认识 for 循环：知道循环是什么、为什么要用循环',
    '学会使用 range() 生成一串数字',
    '用 for 循环做出倒计时效果',
  ],
  content: {
    intro:
      '还记得 L1 里我们让计算机"说话"吗？\n\n' +
      '今天我们要学一个超酷的新技能——**循环**！\n' +
      '循环就像让计算机帮你做重复的事情，你不用写 10 遍 `print()`，只要告诉它"做 10 次"就行了！\n\n' +
      '想象一下：你在操场上跑一圈，这是一个动作；跑 5 圈，就是把这个动作**循环**了 5 次。\n' +
      'Python 里的循环也是这个道理！',
    sections: [
      {
        type: 'text',
        title: '认识 for 循环',
        body:
          '`for` 是 Python 里"循环"的意思。`for` 后面跟着一个变量，表示"每一次"。\n' +
          '`range(5)` 会生成 0, 1, 2, 3, 4 这 5 个数字。\n\n' +
          '所以 `for i in range(5):` 的意思就是："让 i 依次等于 0、1、2、3、4，每变一次就做一次下面的事情"。',
      },
      {
        type: 'code',
        title: '最简单的 for 循环',
        body: 'for i in range(5):\n    print(i)',
      },
      {
        type: 'tip',
        title: '注意冒号和缩进',
        body:
          '1. `for` 语句末尾要有冒号 `:`\n' +
          '2. 循环里面要做的代码，前面要有 4 个空格（按 Tab 键）\n' +
          '3. 有缩进的代码才属于循环，没缩进的就不是了！',
      },
      {
        type: 'text',
        title: 'range() 的用法',
        body:
          '`range(5)` 是从 0 到 4，一共 5 个数字。\n' +
          '如果想让数字从 10 开始倒着数呢？\n\n' +
          '可以用 `range(10, 0, -1)`：从 10 开始，到 1 结束（不含 0），每次减 1。\n' +
          '试试看吧，超级好用！',
      },
      {
        type: 'challenge',
        body:
          '做一个火箭发射倒计时！\n\n' +
          '让计算机从 10 数到 1，然后说"🚀 发射！"\n\n' +
          '输出应该是这样：\n' +
          '10\n9\n8\n...\n1\n🚀 发射！\n\n' +
          '提示：`range(10, 0, -1)` 可以生成 10, 9, 8, ..., 1',
      },
    ],
    summary:
      '太厉害了！你学会了循环！🎉\n\n' +
      '记住：\n' +
      '• `for i in range(5):` — 让代码重复执行 5 次\n' +
      '• `range(5)` 生成 0~4，`range(10, 0, -1)` 从 10 倒序到 1\n' +
      '• 冒号 `:` 和缩进（Tab键）是 for 循环的好朋友，别忘了！',
  },
  starterCode: 'for i in range(10, 0, -1):\n    print(i)\n\nprint("🚀 发射！")',
  solution:
    'for i in range(10, 0, -1):\n    print(i)\n\nprint("🚀 发射！")',
  hints: [
    '用 `range(10, 0, -1)` 可以生成从大到小的数字',
    '在 for 循环前面写数字，循环后面（不加缩进）写发射',
    '试试看：`for i in range(10, 0, -1):` 下面缩进写 `print(i)`，不缩进再写 `print("🚀 发射！")`',
  ],
  checks: [
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里有 range', type: 'contains', value: 'range(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};