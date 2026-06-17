// ============================================================
// HiPython — Story S1: 唤醒小蛇
// ============================================================

import type { Lesson } from '../../../types';

export const s1Episode: Lesson = {
  id: 's1',
  title: '第一章：唤醒小蛇',
  series: 'story',
  difficulty: 1,
  prerequisites: [],
  estimatedTime: 15,
  objectives: [
    '学会使用 print() 输出文字',
    '完成第一个剧情任务',
  ],
  content: {
    intro:
      '🐍 在一个神秘的代码世界里，住着一条叫 Python 的小蛇…\n\n' +
      '但是有一天，Python 小蛇睡着了，怎么也叫不醒。\n' +
      '传说只有用 `print()` 魔法，才能唤醒它！\n\n' +
      '你愿意帮帮小蛇吗？',
    sections: [
      {
        type: 'text',
        title: '📜 故事背景',
        body:
          '你来到了代码世界的大门前。\n' +
          '守门的老乌龟说："想进去？先让这扇门对你说话！"\n\n' +
          '老乌龟给了你一个魔法咒语：`print("开门！")`\n' +
          '试试在编辑器里输入这个咒语，然后点运行！',
      },
      {
        type: 'code',
        title: '老乌龟的咒语',
        body: 'print("开门！")',
      },
      {
        type: 'tip',
        title: 'print() 的用法',
        body:
          '`print()` 是 Python 里最基础的"魔法"。\n' +
          '它能把小括号里的文字显示在屏幕上。\n\n' +
          '记住：文字要放在**引号**里！\n' +
          '`"开门！"` — 双引号包起来。',
      },
      {
        type: 'challenge',
        body:
          '小蛇醒了！但它还很虚弱，需要你用三句 `print()` 来给它能量：\n' +
          '1. 告诉小蛇你的名字\n' +
          '2. 说一句鼓励的话\n' +
          '3. 喊出小蛇的名字 "Python"',
      },
    ],
    summary:
      '🎉 你成功唤醒了 Python 小蛇！\n\n' +
      '小蛇非常感谢你，它决定和你一起在代码世界里冒险。\n' +
      '下一关，你们将穿越数字峡谷…准备好了吗？',
  },
  starterCode: 'print("开门！")',
  solution: 'print("我叫小明")\nprint("加油！")\nprint("Python")',
  hints: [
    '用 `print()` 把你想要说的话包起来',
    '每一句用一个 `print()`，写三行',
    '别忘了把文字放在引号里',
  ],
  checks: [
    { description: '代码里至少有一个 print()', type: 'contains', value: 'print(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};