// ============================================================
// HiPython — L5 Lesson 19: 密码生成器
// ============================================================

import type { Lesson } from '../../../../types';

export const l5Lesson19: Lesson = {
  id: 'l5_19',
  title: '第19课：密码生成器',
  series: 'main',
  difficulty: 5,
  prerequisites: ['l5_17', 'l4_13'],
  estimatedTime: 30,
  objectives: [
    '复习函数的定义与调用',
    '组合 random、字符串和循环',
    '做一个实用的密码生成工具',
  ],
  content: {
    intro:
      '你有没有想过——网站的密码是怎么"生成"出来的？\n' +
      '像 "aB3xK9mP" 这种密码，一看就不是人想的！\n\n' +
      '其实是用程序自动生成的。\n' +
      '今天我们要做一个**密码生成器**——\n' +
      '随机把字母和数字混在一起，生成安全的密码！🔐\n\n' +
      '要用到的技能：函数 + 列表 + random + 循环——\n' +
      '这可是你学过的"全家桶"组合！',
    sections: [
      {
        type: 'text',
        title: '密码是怎么生成的？',
        body:
          '生成密码的思路很简单：\n\n' +
          '1. 准备一堆可用字符（字母、数字、符号）\n' +
          '2. 用 `random.choice()` 从里面随机挑\n' +
          '3. 挑一次就是一个密码字符\n' +
          '4. 重复挑 N 次（比如 8 次），组合在一起\n\n' +
          '用 for 循环来控制密码长度，用字符串拼接来组合结果！',
      },
      {
        type: 'code',
        title: '最简单的密码生成',
        body:
          'import random\n\n' +
          'chars = "abcdefghijklmnopqrstuvwxyz0123456789"\n' +
          'password = ""\n\n' +
          'for _ in range(8):\n' +
          '    password += random.choice(chars)\n\n' +
          'print("生成的密码：", password)',
      },
      {
        type: 'tip',
        title: '密码要够强',
        body:
          '一个强密码通常包含：\n' +
          '• 大写字母 (A-Z)\n' +
          '• 小写字母 (a-z)\n' +
          '• 数字 (0-9)\n' +
          '• 特殊符号 (!@#$%等)\n\n' +
          'Python 提供了 `string` 模块帮你准备这些字符：\n' +
          '• `import string`\n' +
          '• `string.ascii_letters` — 所有英文字母\n' +
          '• `string.digits` — 所有数字\n' +
          '• `string.punctuation` — 所有符号',
      },
      {
        type: 'text',
        title: '用函数封装起来',
        body:
          '可以把密码生成器封装成一个函数：\n\n' +
          '`def generate_password(length):`\n\n' +
          '参数 `length` 决定密码多长。\n' +
          '这样你就可以生成不同长度的密码：\n' +
          '• `generate_password(6)` → 6 位密码\n' +
          '• `generate_password(12)` → 12 位超强密码\n\n' +
          '函数让密码生成器变成一个随时可用的工具！',
      },
      {
        type: 'code',
        title: '完整的密码生成器函数',
        body:
          'import random\nimport string\n\n' +
          'def generate_password(length):\n' +
          '    # 准备所有可用字符\n' +
          '    all_chars = string.ascii_letters + string.digits + "!@#$%"\n' +
          '    password = ""\n' +
          '    for _ in range(length):\n' +
          '        password += random.choice(all_chars)\n' +
          '    return password\n\n' +
          'print("8位密码：", generate_password(8))\n' +
          'print("12位密码：", generate_password(12))',
      },
      {
        type: 'challenge',
        body:
          '做一个密码生成器！\n\n' +
          '基础要求：\n' +
          '1. 定义一个 `generate_password(length)` 函数\n' +
          '2. 函数里准备好可用字符（至少包含字母和数字）\n' +
          '3. 用 `random.choice()` 随机挑选字符\n' +
          '4. 用循环拼出指定长度的密码\n' +
          '5. 调用函数生成 2-3 个不同长度的密码\n\n' +
          '🌟 进阶挑战：\n' +
          '• 多生成几个密码，用 `input()` 让用户选择想要多长的密码\n' +
          '• 尝试加入特殊符号让密码更强',
      },
    ],
    summary:
      '你做出了一个实用的密码生成器！以后再也不怕想不出密码了。🔐\n\n' +
      '今天的综合技能：\n' +
      '• `import string` — 获取所有可用字符\n' +
      '• `random.choice()` — 随机挑选\n' +
      '• 字符串拼接 (`+=`) — 把字符拼在一起\n' +
      '• `def` 封装函数 — 做成可复用的工具\n' +
      '• 函数 + random + 列表 = 密码生成器！\n\n' +
      '这就是编程的乐趣——把零碎的知识组合成一个有用的工具！',
  },
  starterCode:
    'import random\n' +
    'import string\n\n' +
    'def generate_password(length):\n' +
    '    all_chars = string.ascii_letters + string.digits\n' +
    '    password = ""\n' +
    '    for _ in range(length):\n' +
    '        password += random.choice(all_chars)\n' +
    '    return password\n\n' +
    'print("生成的 6 位密码：", generate_password(6))\n' +
    'print("生成的 10 位密码：", generate_password(10))',
  solution:
    'import random\n' +
    'import string\n\n' +
    'def generate_password(length):\n' +
    '    all_chars = string.ascii_letters + string.digits + "!@#$%&*"\n' +
    '    password = ""\n' +
    '    for _ in range(length):\n' +
    '        password += random.choice(all_chars)\n' +
    '    return password\n\n' +
    'print("=== 密码生成器 ===\\n")\n' +
    'print("6 位密码：", generate_password(6))\n' +
    'print("8 位密码：", generate_password(8))\n' +
    'print("12 位密码：", generate_password(12))\n' +
    'print("\\n选一个你喜欢的用吧！🔐")',
  hints: [
    '先 `import random` 和 `import string`',
    '用 `string.ascii_letters` 获取所有字母，`string.digits` 获取所有数字',
    '密码初始值为空字符串 `""`，在循环里用 `+=` 拼接随机字符',
  ],
  checks: [
    { description: '代码里有 def', type: 'contains', value: 'def ' },
    { description: '代码里有 import random', type: 'contains', value: 'import random' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码中可以正常运行', type: 'no_error' },
  ],
};