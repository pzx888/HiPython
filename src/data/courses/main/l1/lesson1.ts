// ============================================================
// HiPython — L1 Lesson 1: 你好，世界！
// ============================================================

import type { Lesson } from '../../../../types';

export const l1Lesson1: Lesson = {
  id: 'l1_1',
  title: '第1课：你好，世界！',
  series: 'main',
  difficulty: 1,
  prerequisites: [],
  estimatedTime: 20,
  objectives: [
    '认识 Python：知道 Python 是什么、能做什么',
    '学会使用 print() 函数让计算机输出文字',
    '了解什么是"运行代码"',
  ],
  content: {
    intro:
      '嗨！欢迎来到 Python 的世界！🐍\n\n' +
      'Python 是一门编程语言，就像你学过的 Scratch 积木块一样，用它可以让计算机帮你做事。\n' +
      '只不过，这次我们不拖积木块了——我们来**打字**！这很酷，对吧？\n\n' +
      '今天，我们要让计算机对你"说话"。准备好了吗？',
    sections: [
      {
        type: 'text',
        title: '什么是 print()？',
        body:
          '`print()` 是 Python 里最常用的指令之一，它的作用就是**在屏幕上显示文字**。\n' +
          '括号 `()` 里的内容，就是你想让计算机显示的东西。\n\n' +
          '比如，你想让计算机说"你好"，就写：',
      },
      {
        type: 'code',
        title: '示例',
        body: 'print("你好，世界！")',
      },
      {
        type: 'tip',
        title: '注意引号',
        body:
          '文字必须要用引号 `" "` 包起来，单引号 `\' \'` 也可以。\n' +
          'Python 用引号来区分"这是文字"和"这是代码指令"。',
      },
      {
        type: 'text',
        title: '试试修改文字',
        body:
          '你可以把 `print()` 里面的文字换成任何你想说的话！\n' +
          '可以换成你的名字、你喜欢的动物、或者一句悄悄话。试试看吧！',
      },
      {
        type: 'challenge',
        body:
          '让计算机输出三句话：\n' +
          '1. 你的名字\n' +
          '2. 你最喜欢的颜色\n' +
          '3. 你今天的心情\n\n' +
          '每一句用一个 `print()` 来写！',
      },
    ],
    summary:
      '太棒了！你学会了第一个 Python 指令：`print()`。\n' +
      '它就是让计算机"说话"的工具。现在你已经是一个小小程序员了！🎉\n\n' +
      '记住：\n' +
      '• `print()` — 显示文字在屏幕上\n' +
      '• 文字要放在引号里，比如 `"你好"`\n' +
      '• 点 ▶ 运行 按钮就能看到结果',
  },
  starterCode: 'print("你好，世界！")',
  solution:
    'print("小明")\n' +
    'print("我最喜欢蓝色")\n' +
    'print("今天很开心！")',
  hints: [
    '用 `print()` 把你想说的话包起来就可以啦！比如 `print("你的名字")`',
    '每一句话用一个 `print()`，写三行就行了',
    '别忘了把文字放在引号里哦：`print("学 Python 真好玩")`',
  ],
  checks: [
    {
      description: '代码里至少有一个 print()',
      type: 'contains',
      value: 'print(',
    },
    {
      description: '代码可以正常运行（没有错误）',
      type: 'no_error',
    },
  ],
};