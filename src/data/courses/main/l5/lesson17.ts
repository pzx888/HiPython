// ============================================================
// HiPython — L5 Lesson 17: 制作自己的指令
// ============================================================

import type { Lesson } from '../../../../types';

export const l5Lesson17: Lesson = {
  id: 'l5_17',
  title: '第17课：制作自己的指令',
  series: 'main',
  difficulty: 5,
  prerequisites: ['l4_13'],
  estimatedTime: 25,
  objectives: [
    '理解函数的含义——自己创造新"指令"',
    '学会用 def 定义函数',
    '学会调用自己写的函数',
  ],
  content: {
    intro:
      '还记得 Scratch 里的"自定义积木"吗？\n' +
      '你可以把一段常用的积木组合打包成一个新积木，\n' +
      '然后每次用的时候直接拖出来就行了！\n\n' +
      'Python 里也有同样的东西——叫**函数（function）**！\n' +
      '用 `def` 关键字，你就能创造属于自己的新"指令"。\n\n' +
      '就像一个魔法咒语——你给一段代码起个名字，\n' +
      '以后只要喊这个名字，整段代码就会自动执行！🪄',
    sections: [
      {
        type: 'text',
        title: '函数 = 给一段代码起名字',
        body:
          '定义函数的格式：\n\n' +
          '```\n' +
          'def 函数名():\n' +
          '    要执行的代码...\n' +
          '```\n\n' +
          '• `def` — define 的缩写，意思是"定义"\n' +
          '• 函数名 — 你自己起的名字\n' +
          '• `()` — 括号（暂时先空着）\n' +
          '• `:` — 别忘了冒号！\n' +
          '• 函数里面的代码要**缩进**（和 if/for 一样）',
      },
      {
        type: 'code',
        title: '第一个函数',
        body:
          '# 定义一个叫 greet 的函数\n' +
          'def greet():\n' +
          '    print("=" * 20)\n' +
          '    print("你好！欢迎来到 Python 世界！")\n' +
          '    print("=" * 20)\n\n' +
          '# 调用函数（喊它的名字）\n' +
          'greet()\n' +
          'print("这是一段学习代码")\n' +
          'greet()  # 再喊一次！',
      },
      {
        type: 'tip',
        title: 'def 和 调用的区别',
        body:
          '`def greet():` — 这是"制造"函数，就像写一张菜谱。\n' +
          '`greet()` — 这是"使用"函数，就像按菜谱做菜。\n\n' +
          '⚠️ 常见错误：定义了函数但忘了调用它！\n' +
          '只写 `def` 不写 `函数名()`，代码是不会自己跑的哦。',
      },
      {
        type: 'text',
        title: '函数的好处',
        body:
          '为什么需要函数？三个好处：\n\n' +
          '1. **不用重复写** — 一段代码写一次，用很多次\n' +
          '2. **代码更整洁** — 给代码起个好名字，一看就懂\n' +
          '3. **改起来方便** — 改了函数定义，所有用到的地方都会变\n\n' +
          '以后写复杂程序，把功能拆成一个个小函数，思路会清晰很多！',
      },
      {
        type: 'code',
        title: '多个函数的组合',
        body:
          'def print_line():\n' +
          '    print("-" * 30)\n\n' +
          'def show_title():\n' +
          '    print_line()\n' +
          '    print("   我的小程序")\n' +
          '    print_line()\n\n' +
          'def show_body():\n' +
          '    print("这是内容部分")\n' +
          '    print("这里是结尾")\n\n' +
          '# 按顺序调用\n' +
          'show_title()\n' +
          'show_body()\n' +
          'print_line()',
      },
      {
        type: 'challenge',
        body:
          '创建你自己的函数！\n\n' +
          '要求：\n' +
          '1. 定义一个函数 `say_hello()`，打印 3 句问候语\n' +
          '2. 定义一个函数 `draw_stars()`，打印一排星星（比如 10 个 ⭐）\n' +
          '3. 定义一个函数 `show_motto()`，打印你最喜欢的一句话\n' +
          '4. 按顺序调用这三个函数，看看效果！\n\n' +
          '💡 提示：先定义（def），再调用（函数名()）。定义放在代码前面！',
      },
    ],
    summary:
      '你会创造自己的魔法咒语了！以后想说什么就定义什么！🪄\n\n' +
      '今天学到的新技能：\n' +
      '• `def 函数名():` — 定义一个函数\n' +
      '• `函数名()` — 调用（执行）一个函数\n' +
      '• 函数 = 给一段代码起名字\n' +
      '• 定义一次，随时调用\n\n' +
      '这是编程里最重要的概念之一。\n' +
      '所有大型程序都是由成千上万个小函数组成的！',
  },
  starterCode:
    '# 定义一个打招呼的函数\n' +
    'def say_hello():\n' +
    '    print("=" * 20)\n' +
    '    print("你好！我是 Python 小助手！")\n' +
    '    print("今天来学函数吧！")\n' +
    '    print("=" * 20)\n\n' +
    '# 调用它\n' +
    'say_hello()\n' +
    'print()\n' +
    'say_hello()  # 再调用一次',
  solution:
    'def say_hello():\n' +
    '    print("=" * 20)\n' +
    '    print("你好！我是 Python 小助手！")\n' +
    '    print("今天来学函数吧！")\n' +
    '    print("=" * 20)\n\n' +
    'def draw_stars():\n' +
    '    print("⭐" * 10)\n\n' +
    'def show_motto():\n' +
    '    print("我的座右铭：只要努力，就能做到！💪")\n\n' +
    'say_hello()\n' +
    'draw_stars()\n' +
    'show_motto()\n' +
    'draw_stars()',
  hints: [
    '用 `def 函数名():` 开头，记得写冒号 `:`',
    '函数里面的代码要缩进（按 Tab 或 4 个空格）',
    '定义完了之后，写 `函数名()` 来调用它',
  ],
  checks: [
    { description: '代码里有 def', type: 'contains', value: 'def ' },
    { description: '代码里有函数调用（括号）', type: 'contains', value: '():' },
    { description: '代码里有 print(', type: 'contains', value: 'print(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};