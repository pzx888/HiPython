// ============================================================
// HiPython — Story S4: 魔法宝库
// ============================================================

import type { Lesson } from '../../../types';

export const s4Episode: Lesson = {
  id: 's4',
  title: '第四章：魔法宝库',
  series: 'story',
  difficulty: 4,
  prerequisites: ['s3'],
  estimatedTime: 25,
  objectives: [
    '认识列表——存储多项数据的容器',
    '学会用 append() 添加宝物',
    '用 for 循环遍历列表',
  ],
  content: {
    intro:
      '你们走进了一个古老的宝库。\n\n' +
      '金光闪闪！里面有好多宝物——宝石剑、水晶盾、魔法戒指……\n' +
      '但宝物太多了，一个一个拿根本拿不完！\n\n' +
      '宝库守护者巨龙说："用**列表**魔法！"\n' +
      '列表就像一个魔法背包，可以装下任何东西——\n' +
      '而且想拿多少就拿多少！🎒',
    sections: [
      {
        type: 'text',
        title: '🐉 巨龙的教导：列表魔法',
        body:
          '列表用方括号 `[]` 创建，里面可以放很多东西：\n\n' +
          '`treasures = ["宝石剑", "水晶盾", "魔法戒指"]`\n\n' +
          '• 用 `[]` 加编号取出宝物：`treasures[0]` → "宝石剑"\n' +
          '• 用 `append()` 添加新宝物：`treasures.append("黄金杯")`\n' +
          '• 用 `for` 循环查看所有宝物\n\n' +
          '巨龙说："用这个，你可以把宝库搬空！" 😄',
      },
      {
        type: 'code',
        title: '收集宝物',
        body:
          'treasures = []  # 空背包\n\n' +
          '# 往背包里放宝物\n' +
          'treasures.append("宝石剑")\n' +
          'treasures.append("水晶盾")\n' +
          'treasures.append("魔法戒指")\n\n' +
          'print("你的背包里有：")\n' +
          'for item in treasures:\n' +
          '    print(" 💎", item)\n' +
          'print("\\n一共", len(treasures), "件宝物！")',
      },
      {
        type: 'tip',
        title: 'len() — 数宝物的帮手',
        body:
          '`len(列表)` 告诉你列表里有几个东西。\n' +
          '就像巨龙帮你数一数背包里有多少宝物——\n' +
          '不用自己数，代码帮你搞定！🔢',
      },
      {
        type: 'text',
        title: '序号从 0 开始',
        body:
          '列表编号从 **0** 开始，不是 1：\n' +
          '• 第 1 件：`treasures[0]`\n' +
          '• 第 2 件：`treasures[1]`\n' +
          '• 第 3 件：`treasures[2]`\n\n' +
          '计算机习惯从 0 开始数，刚开始可能不习惯，但很快就适应啦！',
      },
      {
        type: 'challenge',
        body:
          '帮小蛇装满宝物背包！\n\n' +
          '要求：\n' +
          '1. 创建一个空列表作为背包\n' +
          '2. 用 `append()` 加入至少 5 件宝物（发挥想象！）\n' +
          '3. 用 `for` 循环打印每一件宝物\n' +
          '4. 最后用 `len()` 显示宝物总数\n\n' +
          '🌟 想象你是冒险家，会捡到什么宝物？\n' +
          '魔法书？龙鳞？隐身斗篷？尽管写！',
      },
    ],
    summary:
      '你的背包里装满了宝物，巨龙也很佩服你！🎒\n\n' +
      '今天的新技能：\n' +
      '• `[]` — 创建列表（魔法背包）\n' +
      '• `append()` — 往背包里放东西\n' +
      '• `for item in 列表:` — 查看每件宝物\n' +
      '• `len(列表)` — 数一数有几件\n\n' +
      '带着满满的宝物，继续前进吧！',
  },
  starterCode:
    'treasures = []\n' +
    'print("你走进了魔法宝库…\\n")\n\n' +
    '# 收集宝物\n' +
    'treasures.append("宝石剑")\n' +
    'treasures.append("水晶盾")\n' +
    'treasures.append("魔法戒指")\n\n' +
    'print("背包里的宝物：")\n' +
    'for item in treasures:\n' +
    '    print(" 💎", item)\n' +
    'print("\\n共", len(treasures), "件")',
  solution:
    'treasures = []\n' +
    'print("你走进了魔法宝库…\\n")\n\n' +
    'treasures.append("宝石剑")\n' +
    'treasures.append("水晶盾")\n' +
    'treasures.append("魔法戒指")\n' +
    'treasures.append("龙鳞护甲")\n' +
    'treasures.append("隐身斗篷")\n\n' +
    'print("背包里的宝物：")\n' +
    'for item in treasures:\n' +
    '    print(" 💎", item)\n' +
    'print("\\n一共", len(treasures), "件宝物！")\n' +
    'print("巨龙说：了不起的收藏家！🐉")',
  hints: [
    '先创建空列表：`treasures = []`',
    '用 `.append("宝物名")` 添加宝物',
    '用 `for item in treasures:` 遍历所有宝物',
  ],
  checks: [
    { description: '代码里有空列表 []', type: 'contains', value: '[]' },
    { description: '代码里有 append(', type: 'contains', value: 'append(' },
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};