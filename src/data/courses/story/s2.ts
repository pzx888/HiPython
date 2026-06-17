// ============================================================
// HiPython — Story S2: 穿越数字峡谷
// ============================================================

import type { Lesson } from '../../../types';

export const s2Episode: Lesson = {
  id: 's2',
  title: '第二章：穿越数字峡谷',
  series: 'story',
  difficulty: 2,
  prerequisites: ['s1'],
  estimatedTime: 20,
  objectives: [
    '学会使用 for 循环',
    '用 range() 生成数字序列',
    '理解"重复做一件事"的魔法',
  ],
  content: {
    intro:
      '小蛇和你踏上了冒险之路。走着走着，眼前出现了一个巨大的峡谷——\n\n' +
      '峡谷对面有 5 座浮桥，但它们都缩回去了，需要喊 5 次"桥来！"才能伸出来。\n\n' +
      '一个一个 `print()` 太累了……\n' +
      '峡谷守卫鹰说："用**循环魔法**！"\n\n' +
      'Python 的 `for` 循环能帮你重复做事，一次写、自动重复！',
    sections: [
      {
        type: 'text',
        title: '🦅 守护鹰的教导',
        body:
          '守护鹰拍着翅膀说：\n\n' +
          '"`for i in range(5):` — 这个咒语会让下面的事重复 5 次！"\n\n' +
          '`range(5)` 代表 0, 1, 2, 3, 4 这 5 个数字。\n' +
          '`for` 循环每次取出一个数字，然后执行缩进的代码。',
      },
      {
        type: 'code',
        title: '喊 5 次"桥来！"',
        body: 'for i in range(5):\n    print("桥来！")',
      },
      {
        type: 'tip',
        title: '循环的缩进',
        body:
          '和 `if` 一样，`for` 下面要缩进的代码才是"循环体"。\n' +
          '`for i in range(5):` — 写冒号，然后下一行缩进！\n\n' +
          '没有缩进的代码不属于循环，只会执行一次。',
      },
      {
        type: 'text',
        title: '数字也能循环',
        body:
          '`i` 是循环变量，每次循环它会自动变成下一个数字。\n' +
          '我们可以用 `i` 来做有趣的事——\n' +
          '比如打印"第 1 次喊"，"第 2 次喊"……\n\n' +
          '用 `i + 1`（因为 i 从 0 开始），就能显示 1、2、3、4、5！',
      },
      {
        type: 'challenge',
        body:
          '帮小蛇搭起 5 座浮桥！\n\n' +
          '要求：\n' +
          '1. 用 `for` 循环重复 5 次\n' +
          '2. 每次打印"桥来！第X次"（X 从 1 到 5）\n' +
          '3. 最后打印"全部浮桥已搭好！"\n\n' +
          '💡 提示：用 `for i in range(5):` 和 `print("桥来！第", i+1, "次")`',
      },
    ],
    summary:
      '你学会了循环魔法，轻松搭好了 5 座浮桥！🌉\n\n' +
      '今天的新技能：\n' +
      '• `for i in range(5):` — 重复 5 次\n' +
      '• 循环变量 `i` — 自动从 0 数到 4\n' +
      '• 缩进 — 告诉 Python 哪些代码属于循环\n\n' +
      '有了循环的力量，你和 Python 小蛇继续前进！',
  },
  starterCode:
    'for i in range(5):\n    print("桥来！")',
  solution:
    'for i in range(5):\n' +
    '    print("桥来！第", i + 1, "次")\n\n' +
    'print("\\n全部浮桥已搭好！过桥啦！🌉")',
  hints: [
    '用 `for i in range(5):` 来循环 5 次',
    '每次循环打印"桥来！第X次"，用 `i+1` 显示次数',
    '注意循环结束后要打印一句祝贺的话',
  ],
  checks: [
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里有 range(', type: 'contains', value: 'range(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};