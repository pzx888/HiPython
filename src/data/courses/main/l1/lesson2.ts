// ============================================================
// HiPython — L1 Lesson 2: 我的名片
// ============================================================

import type { Lesson } from '../../../../types';

export const l1Lesson2: Lesson = {
  id: 'l1_2',
  title: '第2课：我的名片',
  series: 'main',
  difficulty: 1,
  prerequisites: ['l1_1'],
  estimatedTime: 20,
  objectives: [
    '学会使用多个 print() 来输出多行文字',
    '了解什么是字符串（文字）',
    '学会用 print() 画出简单的图案',
  ],
  content: {
    intro:
      '上一节课我们学会了让计算机说一句话。\n' +
      '这次我们来玩得更酷一点——用 print() 来做一张属于你自己的**文字名片**！📇\n\n' +
      '名片上可以写上你的名字、年龄、爱好，甚至画一些小图案出来！',
    sections: [
      {
        type: 'text',
        title: '多行输出',
        body:
          '你可以写多个 `print()`，每个 `print()` 会输出一行文字。\n' +
          '就像这样——每一行 print 就是一行新的东西显示在屏幕上：',
      },
      {
        type: 'code',
        title: '示例：我的名片',
        body:
          'print("==================")\n' +
          'print("   🧒 小明")\n' +
          'print("   年龄：10岁")\n' +
          'print("   爱好：编程")\n' +
          'print("==================")',
      },
      {
        type: 'tip',
        title: '什么是字符串？',
        body:
          '在 Python 里，放在引号里的一串文字叫做**字符串**（String）。\n' +
          '可以理解为"一串字符"——可以是一个字母、一个单词、甚至一整句话。\n\n' +
          '比如 `"Hello"` 是一个字符串，`"你好！"` 也是一个字符串。',
      },
      {
        type: 'text',
        title: '用符号画图案',
        body:
          'python 里你可以用各种符号来画简单的图案！\n' +
          '试试用 `=`、`*`、`-`、`#` 这些符号，配合 `print()` 画出边框或装饰线。',
      },
      {
        type: 'challenge',
        body:
          '设计一张你自己的名片！要求：\n\n' +
          '1. 要有一条装饰线（用符号拼出来的）\n' +
          '2. 要有你的名字（可以用 emoji 装饰）\n' +
          '3. 至少写上两样关于你的信息（年龄、爱好、梦想……随你选！）\n' +
          '4. 名片结尾也要有一条装饰线',
      },
    ],
    summary:
      '不错！你已经能做文字名片了！🎨\n\n' +
      '记住：\n' +
      '• 每个 `print()` 输出一行\n' +
      '• 字符串 = 引号包起来的文字\n' +
      '• 善用符号和 emoji 可以让输出更有趣\n\n' +
      '下一课，我们要让 Python 做数学题！准备好了吗？🔢',
  },
  starterCode:
    'print("=============")\n' +
    'print("  我的名片")\n' +
    'print("=============")\n',
  solution:
    'print("=================")\n' +
    'print("  🌟 小明 🌟")\n' +
    'print("  年龄：10岁")\n' +
    'print("  爱好：踢足球")\n' +
    'print("  梦想：当宇航员")\n' +
    'print("=================")',
  hints: [
    '先用一个 print() 画顶上的一条线，再用几个 print() 写内容，最后画底线',
    '用 `"====="` 这样的符号来画线，用 emoji 来装饰内容',
    '试试这个结构：\nprint("=====")  ← 顶线\nprint("  名字")\nprint("  信息")\nprint("=====")  ← 底线',
  ],
  checks: [
    {
      description: '代码里至少有 3 个 print()',
      type: 'contains',
      value: 'print(',
    },
    {
      description: '代码可以正常运行（没有错误）',
      type: 'no_error',
    },
  ],
};