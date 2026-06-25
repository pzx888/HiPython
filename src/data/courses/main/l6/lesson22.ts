// ============================================================
// HiPython — L6 Lesson 22: 超市收银台
// ============================================================

import type { Lesson } from '../../../../types';

export const l6Lesson22: Lesson = {
  id: 'l6_22',
  title: '第22课：超市收银台',
  series: 'main',
  difficulty: 6,
  prerequisites: ['l6_21'],
  estimatedTime: 30,
  objectives: [
    '用列表和循环展示商品菜单',
    '用 input 和 if 处理用户选购',
    '计算价格并输出总计',
  ],
  content: {
    intro:
      '欢迎来到小超市！🛒\n\n' +
      '你是今天的收银员——\n' +
      '要用 Python 做一个收银程序：\n\n' +
      '• 展示商品菜单\n' +
      '• 让顾客输入想买什么\n' +
      '• 算出价格，满 5 元减 1 元\n' +
      '• 打印「总计」\n\n' +
      '这会用到列表、循环、if 和 input——\n' +
      '都是你已经学过的老朋友！',
    sections: [
      {
        type: 'text',
        title: '商品列表',
        body:
          '商品存在列表里，每个商品是一个小括号：\n\n' +
          '`items = [("苹果", 3), ("牛奶", 8), ("面包", 5)]`\n\n' +
          '小括号里第一个是名字，第二个是价格。\n' +
          '用 `for name, price in items:` 可以同时取出名字和价格！',
      },
      {
        type: 'code',
        title: '展示菜单',
        body:
          'items = [("苹果", 3), ("牛奶", 8), ("面包", 5)]\n\n' +
          'print("今日菜单：")\n' +
          'for name, price in items:\n' +
          '    print(f"  {name} — {price} 元")',
      },
      {
        type: 'text',
        title: '查找商品和打折',
        body:
          '顾客输入商品名后，用 for 循环找匹配的商品：\n\n' +
          '```\n' +
          'for name, price in items:\n' +
          '    if name == choice:\n' +
          '        total = price\n' +
          '```\n\n' +
          '如果 total >= 5，减 1 元，然后打印 `总计：X 元`。',
      },
      {
        type: 'challenge',
        body:
          '补全收银台程序！\n\n' +
          '要求：\n' +
          '1. 用 for 循环打印「今日菜单」和所有商品\n' +
          '2. 用 input 问顾客想买什么\n' +
          '3. 找到商品后打印价格，满 5 元减 1 元\n' +
          '4. 最后 print 包含「总计」的行\n' +
          '5. 如果商品不存在，提示「没有这个商品」\n\n' +
          '运行后输入「苹果」试试，应该看到总计 2 元（3-1=2）！',
      },
    ],
    summary:
      '收银台开张啦！🛒\n\n' +
      '你组合了：列表 + for + if + input + 计算\n' +
      '这就是真实程序的样子——多个知识点一起工作。\n\n' +
      '下一关：用 turtle 画魔法阵！',
  },
  starterCode:
    'items = [("苹果", 3), ("牛奶", 8), ("面包", 5), ("鸡蛋", 6)]\n\n' +
    'print("=== 欢迎光临小超市！===")\n' +
    '# TODO: 打印 "今日菜单：" 并列出所有商品\n\n' +
    'choice = input("你想买什么？")\n' +
    'total = 0\n\n' +
    '# TODO: 用 for 循环查找 choice 对应的商品，设置 total\n\n' +
    'if total > 0:\n' +
    '    print(f"你选了 {choice}，价格 {total} 元")\n' +
    '    # TODO: 满 5 元减 1 元\n' +
    '    # TODO: 打印 "总计：X 元"\n' +
    'else:\n' +
    '    print("没有这个商品哦～")',
  solution:
    'items = [("苹果", 3), ("牛奶", 8), ("面包", 5), ("鸡蛋", 6)]\n\n' +
    'print("=== 欢迎光临小超市！===")\n' +
    'print("今日菜单：")\n' +
    'for name, price in items:\n' +
    '    print(f"  {name} — {price} 元")\n\n' +
    'choice = input("你想买什么？")\n' +
    'total = 0\n\n' +
    'for name, price in items:\n' +
    '    if name == choice:\n' +
    '        total = price\n' +
    '        break\n\n' +
    'if total > 0:\n' +
    '    print(f"你选了 {choice}，价格 {total} 元")\n' +
    '    if total >= 5:\n' +
    '        total = total - 1\n' +
    '        print("满5元减1元！")\n' +
    '    print(f"总计：{total} 元")\n' +
    'else:\n' +
    '    print("没有这个商品哦～")',
  hints: [
    '菜单部分：`print("今日菜单：")` 然后 `for name, price in items:` 打印每个商品',
    '查找：`for name, price in items:` 里 `if name == choice: total = price`',
    '打折后：`print(f"总计：{total} 元")`',
  ],
  checks: [
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里有 if 判断', type: 'contains', value: 'if ' },
    { description: '代码里有 input()', type: 'contains', value: 'input(' },
    { description: '运行后输出包含「今日菜单」', type: 'output_contains', value: '今日菜单' },
    { description: '运行后输出包含「总计」', type: 'output_contains', value: '总计' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
