// ============================================================
// HiPython — Story S3: 三岔路口
// ============================================================

import type { Lesson } from '../../../types';

export const s3Episode: Lesson = {
  id: 's3',
  title: '第三章：三岔路口',
  series: 'story',
  difficulty: 3,
  prerequisites: ['s2'],
  estimatedTime: 25,
  objectives: [
    '学会使用 if/elif/else 做选择',
    '理解条件判断的含义',
    '用代码决定冒险的走向',
  ],
  content: {
    intro:
      '过了峡谷，你们来到一个三岔路口。\n\n' +
      '左边是森林 🌲，中间是山洞 🏔️，右边是河流 🌊。\n' +
      '路牌上写着：不同的选择会通往不同的冒险！\n\n' +
      '但走哪条路呢？小蛇说："让代码来决定！"\n' +
      'Python 的 `if` 就是用来做选择的魔法——\n\n' +
      '"如果…就…"——像极了生活中的选择！',
    sections: [
      {
        type: 'text',
        title: '🤔 if 判断——让代码做选择',
        body:
          '`if` 就是"如果"的意思：\n\n' +
          '```\n' +
          'if 条件:\n' +
          '    满足条件时执行的代码\n' +
          'else:\n' +
          '    不满足条件时执行的代码\n' +
          '```\n\n' +
          '就像：如果下雨 → 带伞，否则 → 直接出门。\n' +
          '用 Python 的 `if/else`，让你的代码变聪明！',
      },
      {
        type: 'code',
        title: '岔路选择器',
        body:
          'choice = input("你走哪条路？(森林/山洞/河流)")\n\n' +
          'if choice == "森林":\n' +
          '    print("你走进了森林，遇到了一只友好的小鹿")\n' +
          'elif choice == "山洞":\n' +
          '    print("你爬进了山洞，发现了闪闪发光的宝石")\n' +
          'elif choice == "河流":\n' +
          '    print("你来到河边，河水很清澈，鱼儿在游")\n' +
          'else:\n' +
          '    print("你站在路口犹豫不决…")',
      },
      {
        type: 'tip',
        title: '== 和 = 的区别',
        body:
          '`=` — 赋值（把东西放进变量里）\n' +
          '`==` — 判断相等（问我俩是不是一样的）\n\n' +
          '⚠️ 判断相等一定要用 **两个等号**！\n' +
          '这是初学者最容易犯的错哦！',
      },
      {
        type: 'text',
        title: 'elif — 多个选择',
        body:
          '如果不止两个选择怎么办？加 `elif`！\n\n' +
          '`if` — 第一个条件\n' +
          '`elif` — 否则如果……（可以写多个）\n' +
          '`else` — 以上都不满足时\n\n' +
          '就像自助餐：先看有没有鸡腿，没有就看有没有鱼，\n' +
          '都没有就随便吃点。',
      },
      {
        type: 'challenge',
        body:
          '帮小蛇做一个岔路选择器！\n\n' +
          '要求：\n' +
          '1. 用 `input()` 让玩家选择走哪条路\n' +
          '2. 用 `if/elif/else` 判断不同的选择\n' +
          '3. 每条路都有一个独特的冒险故事\n' +
          '4. 如果玩家输入的不是选项之一，给一个默认结果\n\n' +
          '🌟 发挥你的想象力，给每条路写一段有趣的描述！',
      },
    ],
    summary:
      '你和小蛇学会了用 `if` 做选择！每条路都有不同的冒险故事。🗺️\n\n' +
      '今天的新技能：\n' +
      '• `if/elif/else` — 做判断、做选择\n' +
      '• `==` — 判断相等（两个等号！）\n' +
      '• `input()` + `if` — 互动式冒险故事\n\n' +
      '代码的世界充满了选择——每一条路都是一次新的冒险！',
  },
  starterCode:
    'print("=== 三岔路口 ===\\n")\n' +
    'choice = input("你走哪条路？(森林/山洞/河流)\\n")\n\n' +
    'if choice == "森林":\n' +
    '    print("你走进了森林…")\n' +
    'elif choice == "山洞":\n' +
    '    print("你爬进了山洞…")\n' +
    'elif choice == "河流":\n' +
    '    print("你来到河边…")\n' +
    'else:\n' +
    '    print("你犹豫不决…")',
  solution:
    'print("=== 三岔路口 ===\\n")\n' +
    'choice = input("你走哪条路？(森林/山洞/河流)\\n")\n\n' +
    'if choice == "森林":\n' +
    '    print("你走进了森林，遇到了一只友好的小鹿 🦌")\n' +
    '    print("小鹿带你去了一片秘密的果子林")\n' +
    'elif choice == "山洞":\n' +
    '    print("你爬进了山洞，发现了闪闪发光的宝石 💎")\n' +
    '    print("宝石照亮了整个山洞，好美啊！")\n' +
    'elif choice == "河流":\n' +
    '    print("你来到河边，河水很清澈，鱼儿在游 🐟")\n' +
    '    print("一条大鱼跳出水面，和你打了个招呼！")\n' +
    'else:\n' +
    '    print("你站在路口犹豫不决…")\n' +
    '    print("小蛇说：别怕，选一条路就好！")',
  hints: [
    '用 `input()` 获取玩家输入，用 `==` 判断是不是某个值',
    '用 `if/elif/else` 分别处理不同的选项',
    '记得处理玩家输入不在选项里的情况（else）',
  ],
  checks: [
    { description: '代码里有 if', type: 'contains', value: 'if ' },
    { description: '代码里有 input()', type: 'contains', value: 'input(' },
    { description: '代码里有 ==', type: 'contains', value: '==' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};