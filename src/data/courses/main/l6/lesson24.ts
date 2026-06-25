// ============================================================
// HiPython — L6 Lesson 24: 终极闯关
// ============================================================

import type { Lesson } from '../../../../types';

export const l6Lesson24: Lesson = {
  id: 'l6_24',
  title: '第24课：终极闯关',
  series: 'main',
  difficulty: 6,
  prerequisites: ['l6_23'],
  estimatedTime: 35,
  objectives: [
    '综合运用 dict、random、def、if、input',
    '完成 L6 最后一关综合挑战',
    '体验「全栈小项目」的完整流程',
  ],
  content: {
    intro:
      'L6 终极挑战来了！🏆\n\n' +
      '这是主课程的最后一关——\n' +
      '你要做一个「Python 小测验」程序：\n\n' +
      '• 题库存在字典里\n' +
      '• 随机抽题考你\n' +
      '• 用函数出每一道题\n' +
      '• 最后统计得分\n\n' +
      '用上你学过的**所有技能**，\n' +
      '通关这一课，你就是真正的 Python 小高手！',
    sections: [
      {
        type: 'text',
        title: '题库设计',
        body:
          '题目存在字典里，每道题是一个键：\n\n' +
          '`questions = {"题目文字": (选项列表, 正确答案)}`\n\n' +
          '比如：\n' +
          '`"判断相等用几个等号？": (["1个", "2个", "3个"], "2个")`\n\n' +
          '选项列表 + 正确答案，方便程序自动判对错。',
      },
      {
        type: 'code',
        title: '出题函数',
        body:
          'def ask_question(q, options, answer):\n' +
          '    print(q)\n' +
          '    for i, opt in enumerate(options):\n' +
          '        print(f"  {i+1}. {opt}")\n' +
          '    choice = int(input("你的答案（输入序号）："))\n' +
          '    if options[choice - 1] == answer:\n' +
          '        print("✅ 答对了！")\n' +
          '        return 1\n' +
          '    else:\n' +
          '        print("❌ 答错了～")\n' +
          '        return 0',
      },
      {
        type: 'tip',
        title: '随机抽题',
        body:
          '用 `import random` 和 `random.shuffle(keys)`\n' +
          '可以把题目顺序打乱，每次运行都不一样！\n\n' +
          '抽前 3 题考就够了，别一次出太多～',
      },
      {
        type: 'challenge',
        body:
          '补全 Python 小测验程序！\n\n' +
          '要求：\n' +
          '1. 定义 `ask_question` 函数（见上面示例）\n' +
          '2. 用字典存至少 3 道题\n' +
          '3. 用 random 打乱题目顺序，考 3 题\n' +
          '4. 累计 score，最后 print 包含「得分」的结果\n' +
          '5. 根据分数 print 不同评语\n\n' +
          '🏆 完成这一课，L6 综合挑战全部通关！',
      },
    ],
    summary:
      '🎉🎉🎉 恭喜你完成 L6 综合挑战！🎉🎉🎉\n\n' +
      '从 L1 的 print 到 L6 的全综合项目——\n' +
      '你已经证明了自己真正掌握了 Python 基础！\n\n' +
      '继续探索故事模式、竞技场和打字练习，\n' +
      '代码世界还有无限可能等着你！🐍',
  },
  starterCode:
    'import random\n\n' +
    '# TODO: 定义 ask_question(q, options, answer) 函数\n\n' +
    'questions = {\n' +
    '    "Python 的吉祥物是什么？": (["🐍", "🐱", "🐶"], "🐍"),\n' +
    '    "print 是用来做什么的？": (["输出", "输入", "计算"], "输出"),\n' +
    '    "列表从第几个开始编号？": (["0", "1", "2"], "0"),\n' +
    '    "判断相等用几个等号？": (["1个", "2个", "3个"], "2个"),\n' +
    '    "def 是用来做什么的？": (["定义函数", "画图形", "随机数"], "定义函数"),\n' +
    '}\n\n' +
    'score = 0\n' +
    'keys = list(questions.keys())\n' +
    'random.shuffle(keys)\n\n' +
    'print("=== Python 小测验 ===")\n' +
    '# TODO: 循环考 3 题，累加 score\n\n' +
    '# TODO: 打印 "你的得分：X / 3"\n' +
    '# TODO: 根据分数 print 评语',
  solution:
    'import random\n\n' +
    'def ask_question(q, options, answer):\n' +
    '    print(q)\n' +
    '    for i, opt in enumerate(options):\n' +
    '        print(f"  {i+1}. {opt}")\n' +
    '    choice = int(input("你的答案（输入序号）："))\n' +
    '    if options[choice - 1] == answer:\n' +
    '        print("✅ 答对了！")\n' +
    '        return 1\n' +
    '    else:\n' +
    '        print("❌ 答错了～")\n' +
    '        return 0\n\n' +
    'questions = {\n' +
    '    "Python 的吉祥物是什么？": (["🐍", "🐱", "🐶"], "🐍"),\n' +
    '    "print 是用来做什么的？": (["输出", "输入", "计算"], "输出"),\n' +
    '    "列表从第几个开始编号？": (["0", "1", "2"], "0"),\n' +
    '    "判断相等用几个等号？": (["1个", "2个", "3个"], "2个"),\n' +
    '    "def 是用来做什么的？": (["定义函数", "画图形", "随机数"], "定义函数"),\n' +
    '}\n\n' +
    'score = 0\n' +
    'keys = list(questions.keys())\n' +
    'random.shuffle(keys)\n\n' +
    'print("=== Python 小测验 ===")\n' +
    'for q in keys[:3]:\n' +
    '    opts, ans = questions[q]\n' +
    '    score += ask_question(q, opts, ans)\n' +
    '    print()\n\n' +
    'print(f"你的得分：{score} / 3")\n' +
    'if score == 3:\n' +
    '    print("🏆 满分！你是 Python 大师！")\n' +
    'elif score >= 2:\n' +
    '    print("👍 不错！继续加油！")\n' +
    'else:\n' +
    '    print("💪 再复习一下基础知识吧！")',
  hints: [
    '函数照抄上面的 ask_question 示例就行',
    '循环：`for q in keys[:3]:` 然后 `opts, ans = questions[q]` 和 `score += ask_question(...)`',
    '最后：`print(f"你的得分：{score} / 3")` 加 if/elif 评语',
  ],
  checks: [
    { description: '代码里有 import random', type: 'contains', value: 'import random' },
    { description: '代码里有 def 函数', type: 'contains', value: 'def ' },
    { description: '代码里有字典', type: 'contains', value: '{' },
    { description: '代码里有 if 判断', type: 'contains', value: 'if ' },
    { description: '代码里有 input()', type: 'contains', value: 'input(' },
    { description: '运行后输出包含「得分」', type: 'output_contains', value: '得分' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
