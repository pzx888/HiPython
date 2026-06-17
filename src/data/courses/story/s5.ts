// ============================================================
// HiPython — Story S5: 铸造魔法杖
// ============================================================

import type { Lesson } from '../../../types';

export const s5Episode: Lesson = {
  id: 's5',
  title: '第五章：铸造魔法杖',
  series: 'story',
  difficulty: 5,
  prerequisites: ['s4'],
  estimatedTime: 25,
  objectives: [
    '学会用 def 定义函数',
    '理解函数 = 创造自己的魔法咒语',
    '用函数编织冒险结局',
  ],
  content: {
    intro:
      '带着满满的宝物，你们来到了世界的尽头——\n' +
      '一座古老的魔法塔。🏰\n\n' +
      '塔顶住着最强大的魔法师。他说：\n' +
      '"真正的力量不是宝物本身，而是**创造**宝物的能力。"\n\n' +
      '魔法师教你最后一个魔法：`def` — 创造属于你自己的咒语！\n' +
      '这个魔法能让你把任何一段代码变成一个"咒语"，\n' +
      '以后只要念咒语的名字，代码就会自动执行！🪄',
    sections: [
      {
        type: 'text',
        title: '🧙 魔法师的最后教导',
        body:
          '定义函数的格式：\n\n' +
          '```\n' +
          'def 咒语名():\n' +
          '    魔法效果…\n' +
          '```\n\n' +
          '调用函数：\n' +
          '`咒语名()` — 念咒语，魔法生效！\n\n' +
          '就像一句话的遥控器——\n' +
          '你按下开关（喊出函数名），整段代码就运行了。',
      },
      {
        type: 'code',
        title: '铸造魔法杖',
        body:
          'def cast_spell():\n' +
          '    print("✨ 魔法杖发光了！")\n' +
          '    print("🌟 星星从天而降")\n' +
          '    print("🎉 世界充满了光芒！")\n\n' +
          '# 挥三次魔法杖\n' +
          'cast_spell()\n' +
          'cast_spell()\n' +
          'cast_spell()',
      },
      {
        type: 'tip',
        title: '定义 vs 调用',
        body:
          '`def 函数名():` — 定义咒语（写下来，但还没念）\n' +
          '`函数名()` — 调用咒语（真正念出来，魔法发生）\n\n' +
          '定义了不调用 = 写了咒语但不念 = 什么都不会发生！\n' +
          '定义一次，可以调用无数次！',
      },
      {
        type: 'text',
        title: '创造通关魔法',
        body:
          '魔法师给你一个任务：创造三个魔法来点亮魔法塔：\n\n' +
          '1. `light_up()` — 点亮塔的第一层（print 星星）\n' +
          '2. `celebrate()` — 庆祝的通关烟花（print 烟花效果）\n' +
          '3. `goodbye()` — 写一段告别的话\n\n' +
          '把三个魔法组合起来，完成你的冒险旅程！',
      },
      {
        type: 'challenge',
        body:
          '用函数铸造你的魔法杖，完成最终冒险！\n\n' +
          '要求：\n' +
          '1. 定义 `light_up()` 函数——打印 3 行星星效果\n' +
          '2. 定义 `celebrate()` 函数——打印庆祝内容\n' +
          '3. 定义 `goodbye()` 函数——打印告别和感谢的话\n' +
          '4. 按顺序调用这三个函数\n\n' +
          '🌟 发挥你的创意——这是属于你的冒险结局！',
      },
    ],
    summary:
      '🎉🎉🎉 恭喜你完成了所有的冒险！Python 小蛇也长大啦！🐍\n\n' +
      '你在这段旅程中学会了：\n' +
      '• 💬 `print()` — 让代码说话\n' +
      '• 🔁 `for` 循环 — 重复魔法\n' +
      '• 🤔 `if/elif/else` — 选择道路\n' +
      '• 🎒 列表 — 收集宝物\n' +
      '• 🪄 `def` — 创造属于自己的咒语\n\n' +
      '你已经从一个编程新手变成了真正的代码魔法师！\n' +
      '继续探索，继续创造——代码世界的冒险永远不会结束！',
  },
  starterCode:
    'print("你来到了魔法塔顶…\\n")\n\n' +
    'def light_up():\n' +
    '    print("✨" * 10)\n' +
    '    print("  魔法塔被点亮了！")\n' +
    '    print("✨" * 10)\n\n' +
    'light_up()',
  solution:
    'print("你来到了魔法塔顶…\\n")\n\n' +
    'def light_up():\n' +
    '    print("✨" * 10)\n' +
    '    print("  魔法塔被点亮了！")\n' +
    '    print("✨" * 10)\n\n' +
    'def celebrate():\n' +
    '    print("🎉" * 10)\n' +
    '    print("  冒险成功了！你是最棒的！")\n' +
    '    print("🎉" * 10)\n\n' +
    'def goodbye():\n' +
    '    print("\\nPython 小蛇对你说：")\n' +
    '    print("  谢谢你陪我走完这段旅程！")\n' +
    '    print("  我们后会有期！🐍💚")\n\n' +
    'light_up()\n' +
    'celebrate()\n' +
    'goodbye()',
  hints: [
    '先想想三个函数分别要打印什么',
    '每个函数用 `def` 定义，注意冒号和缩进',
    '定义完后按顺序调用：`light_up()` → `celebrate()` → `goodbye()`',
  ],
  checks: [
    { description: '代码里有 def', type: 'contains', value: 'def ' },
    { description: '代码里有 print()', type: 'contains', value: 'print(' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};