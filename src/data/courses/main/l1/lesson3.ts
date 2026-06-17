// ============================================================
// HiPython — L1 Lesson 3: 迷你计算器
// ============================================================

import type { Lesson } from '../../../../types';

export const l1Lesson3: Lesson = {
  id: 'l1_3',
  title: '第3课：迷你计算器',
  series: 'main',
  difficulty: 1,
  prerequisites: ['l1_2'],
  estimatedTime: 25,
  objectives: [
    '了解 Python 可以直接做数学运算',
    '认识基本运算符：+、-、*、/',
    '了解数字和字符串的区别',
  ],
  content: {
    intro:
      'Python 可不只会说话，它还是一个小小数学家！🧮\n\n' +
      '你可以直接用 Python 来算算术，就像用计算器一样——' +
      '而且比计算器还快！\n' +
      '今天我们就要来探索 Python 的数学魔法。',
    sections: [
      {
        type: 'text',
        title: 'Python 会算数',
        body:
          '在 `print()` 里，你可以直接写算式，Python 会帮你算出结果：',
      },
      {
        type: 'code',
        title: '试试这些',
        body:
          'print(3 + 5)    # 加法 → 8\n' +
          'print(10 - 4)   # 减法 → 6\n' +
          'print(6 * 7)    # 乘法 → 42\n' +
          'print(20 / 4)   # 除法 → 5.0',
      },
      {
        type: 'tip',
        title: '运算符小抄',
        body:
          '• `+` 加号 → 加法\n' +
          '• `-` 减号 → 减法\n' +
          '• `*` 星号 → 乘法（不是 × 哦！）\n' +
          '• `/` 斜线 → 除法\n\n' +
          'Python 里用 `*` 做乘法、用 `/` 做除法——和数学课不一样，要记住！',
      },
      {
        type: 'text',
        title: '数字 vs 文字',
        body:
          '注意：`print(3 + 5)` 和 `print("3 + 5")` 不一样！\n\n' +
          '• 没有引号 → Python 会算出结果（8）\n' +
          '• 有引号 → Python 直接显示文字（3 + 5）\n\n' +
          '引号告诉 Python："原样显示，不要算！"',
      },
      {
        type: 'code',
        title: '混合使用',
        body:
          'print("3 + 5 =", 3 + 5)\n' +
          'print("10 × 6 =", 10 * 6)\n' +
          'print("100 − 37 =", 100 - 37)',
      },
      {
        type: 'challenge',
        body:
          '做一个小小计算器！\n\n' +
          '1. 写出 5 个不同的算式（加减乘除都要用）\n' +
          '2. 每个算式前写上文字说明\n' +
          '3. 试试比较大的数字，比如 `1234 * 5678`，看看 Python 能不能算出来',
      },
    ],
    summary:
      '厉害！你发现了吗——Python 做算术比人快多了！⚡\n\n' +
      '记住：\n' +
      '• `+` `-` `*` `/` 四个运算符\n' +
      '• 数字不加引号（让 Python 算出来）\n' +
      '• 文字要加引号\n' +
      '• 可以混用：`print("结果是", 6 * 7)`',
  },
  starterCode:
    'print("我的计算器")\nprint("==========")\nprint("3 + 5 =", 3 + 5)\n',
  solution:
    'print("我的迷你计算器")\n' +
    'print("================")\n' +
    'print("3 + 5 =", 3 + 5)\n' +
    'print("10 - 4 =", 10 - 4)\n' +
    'print("6 * 7 =", 6 * 7)\n' +
    'print("20 / 4 =", 20 / 4)\n' +
    'print("1234 * 5678 =", 1234 * 5678)',
  hints: [
    '用 `print("文字", 算式)` 的格式，逗号前面的文字加引号，后面的算式不加引号',
    '试试这 4 个运算符：`+` `-` `*` `/`，每个都用一次',
    '别忘了：乘法用 `*` 不是 ×，除法用 `/` 不是 ÷',
  ],
  checks: [
    {
      description: '代码中包含 * 运算符',
      type: 'contains',
      value: '*',
    },
    {
      description: '代码中包含 / 运算符',
      type: 'contains',
      value: '/',
    },
    {
      description: '代码可以正常运行（没有错误）',
      type: 'no_error',
    },
  ],
};