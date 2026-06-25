// ============================================================
// HiPython — L6 Lesson 21: 代码侦探
// ============================================================

import type { Lesson } from '../../../../types';

export const l6Lesson21: Lesson = {
  id: 'l6_21',
  title: '第21课：代码侦探',
  series: 'main',
  difficulty: 6,
  prerequisites: ['l5_20'],
  estimatedTime: 25,
  objectives: [
    '读懂别人写的代码，找到缺失的部分',
    '综合运用变量、for 循环和 if 判断',
    '完成第一个 L6 综合挑战',
  ],
  content: {
    intro:
      'L6 综合挑战开始了！🏆\n\n' +
      '前面 20 节课你学了很多知识——\n' +
      '现在是时候**把它们组合起来**了！\n\n' +
      '今天你是「代码侦探」🔍\n' +
      '有一段侦探笔记程序，但关键代码被藏起来了。\n' +
      '补全它，找出真相，宣布「破案成功！」',
    sections: [
      {
        type: 'text',
        title: '案情回顾',
        body:
          '侦探小 P 收集了三条线索，存在列表 `clues` 里：\n\n' +
          '1. 打印每条线索，格式：`线索1: 红色钥匙`\n' +
          '2. 检查列表里有没有 `"三号房间"`，有的话 `found = True`\n' +
          '3. 如果找到了，打印「找到了关键线索！」\n' +
          '4. 最后打印「破案成功！」\n\n' +
          '代码骨架已经写好了，找到 `# TODO` 的地方，把缺失的代码补上！',
      },
      {
        type: 'code',
        title: '打印线索的写法',
        body:
          'clues = ["红色钥匙", "三号房间", "午夜钟声"]\n\n' +
          'for i in range(len(clues)):\n' +
          '    print(f"线索{i+1}: {clues[i]}")',
      },
      {
        type: 'tip',
        title: '检查列表里有没有某个值',
        body:
          '用 `in` 可以检查一个东西在不在列表里：\n\n' +
          '`if "三号房间" in clues:`\n\n' +
          '如果在，条件成立，就可以做你想做的事啦！',
      },
      {
        type: 'challenge',
        body:
          '补全右边的代码，让侦探笔记程序跑通！\n\n' +
          '要求：\n' +
          '1. for 循环里打印每条线索（格式见上面示例）\n' +
          '2. 用 if 检查 `"三号房间"` 是否在 clues 里\n' +
          '3. 最后 print `"破案成功！"`\n\n' +
          '全部 `# TODO` 补完后点运行，看看输出对不对！',
      },
    ],
    summary:
      '第一个 L6 挑战完成！你是合格的代码侦探了。🔍\n\n' +
      '你用了：\n' +
      '• 列表存线索\n' +
      '• for 循环遍历\n' +
      '• if + in 做判断\n' +
      '• print 输出结果\n\n' +
      '下一关：超市收银台，继续挑战！',
  },
  starterCode:
    'clues = ["红色钥匙", "三号房间", "午夜钟声"]\n\n' +
    'print("🔍 侦探笔记：")\n' +
    'for i in range(len(clues)):\n' +
    '    # TODO: 打印线索，格式 "线索1: xxx"\n' +
    '    pass\n\n' +
    'found = False\n' +
    '# TODO: 如果 clues 里有 "三号房间"，设置 found = True\n\n' +
    'if found:\n' +
    '    print("找到了关键线索！")\n' +
    'else:\n' +
    '    print("还没破案…")\n\n' +
    '# TODO: 打印 "破案成功！"',
  solution:
    'clues = ["红色钥匙", "三号房间", "午夜钟声"]\n\n' +
    'print("🔍 侦探笔记：")\n' +
    'for i in range(len(clues)):\n' +
    '    print(f"线索{i+1}: {clues[i]}")\n\n' +
    'found = False\n' +
    'if "三号房间" in clues:\n' +
    '    found = True\n\n' +
    'if found:\n' +
    '    print("找到了关键线索！")\n' +
    'else:\n' +
    '    print("还没破案…")\n\n' +
    'print("破案成功！")',
  hints: [
    'for 循环里用 `print(f"线索{i+1}: {clues[i]}")` 打印每条线索',
    '用 `if "三号房间" in clues:` 判断，里面写 `found = True`',
    '最后一行：`print("破案成功！")`',
  ],
  checks: [
    { description: '代码里有 for 循环', type: 'contains', value: 'for ' },
    { description: '代码里有 if 判断', type: 'contains', value: 'if ' },
    { description: '运行后输出包含「线索1:」', type: 'output_contains', value: '线索1:' },
    { description: '运行后输出「破案成功！」', type: 'output_contains', value: '破案成功！' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
