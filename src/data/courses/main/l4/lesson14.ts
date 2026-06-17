// ============================================================
// HiPython — L4 Lesson 14: 英文单词本
// ============================================================

import type { Lesson } from '../../../../types';

export const l4Lesson14: Lesson = {
  id: 'l4_14',
  title: '第14课：英文单词本',
  series: 'main',
  difficulty: 4,
  prerequisites: ['l4_13'],
  estimatedTime: 25,
  objectives: [
    '认识字典——用"名字"来找东西的容器',
    '学会创建字典、添加和查找内容',
    '用 for 循环遍历字典的每一项',
  ],
  content: {
    intro:
      '上一课的列表用编号（0, 1, 2...）来找东西。\n' +
      '但有时候，用编号找东西不太方便——\n' +
      '"第 3 个单词是什么意思来着？"你得先数到第 3 个。\n\n' +
      '如果有一种容器，能**直接用名字来找**，那该多好！\n' +
      '比如：`wordbook["apple"]` 直接告诉你 → "苹果"。\n\n' +
      '这种容器就叫**字典（dict）**，就像一本真正的字典——\n' +
      '你查"apple"，它就告诉你意思。📖',
    sections: [
      {
        type: 'text',
        title: '字典——每个东西都有自己的名字',
        body:
          '字典用花括号 `{}`，里面是"名字: 内容"对：\n\n' +
          '`wordbook = {"apple": "苹果", "cat": "猫", "dog": "狗"}`\n\n' +
          '左边是**名字**（key），右边是**内容**（value）。\n' +
          '想知道 "apple" 是什么意思？\n' +
          '`wordbook["apple"]` → `"苹果"` ✅\n\n' +
          '就像查字典一样——按字母顺序找到单词，旁边写着意思！',
      },
      {
        type: 'code',
        title: '创建和查询字典',
        body:
          'wordbook = {\n' +
          '    "apple": "苹果",\n' +
          '    "cat": "猫",\n' +
          '    "dog": "狗",\n' +
          '    "hello": "你好",\n' +
          '    "thank you": "谢谢",\n' +
          '}\n\n' +
          'print("apple 的意思是：", wordbook["apple"])\n' +
          'print("hello 的意思是：", wordbook["hello"])',
      },
      {
        type: 'tip',
        title: '列表 vs 字典',
        body:
          '什么时候用列表？什么时候用字典？\n\n' +
          '📋 **列表** — 顺序重要，用编号找："第 3 个"是什么\n' +
          '📖 **字典** — 名字重要，用名字找："apple"是什么意思\n\n' +
          '简单说：\n' +
          '• 只关心"有哪些" → 用列表\n' +
          '• 关心"哪个是哪个" → 用字典',
      },
      {
        type: 'text',
        title: '往字典里加新词',
        body:
          '字典不用 append，直接"赋值"就行：\n\n' +
          '`wordbook["banana"] = "香蕉"`\n\n' +
          '如果 "banana" 已经存在 → 修改它的意思\n' +
          '如果 "banana" 不存在 → 添加这个新词\n\n' +
          '就这么简单！比列表还方便。',
      },
      {
        type: 'code',
        title: '添加和修改',
        body:
          'wordbook = {"apple": "苹果"}\n' +
          'print("一开始：", wordbook)\n\n' +
          '# 添加新词\n' +
          'wordbook["banana"] = "香蕉"\n' +
          'wordbook["cat"] = "猫"\n\n' +
          'print("添加后：", wordbook)\n\n' +
          '# 修改已有词\n' +
          'wordbook["apple"] = "🍎 苹果（好吃！）"\n' +
          'print("修改后：", wordbook)',
      },
      {
        type: 'text',
        title: '遍历字典',
        body:
          '用 `for` 循环也可以遍历字典。但和列表不太一样：\n\n' +
          '`for word in wordbook:` — `word` 会依次变成每个单词\n' +
          '然后用 `wordbook[word]` 拿到它的意思\n\n' +
          '或者更厉害的方法：\n' +
          '`for word, meaning in wordbook.items():`\n' +
          '一次性拿到单词 AND 意思！',
      },
      {
        type: 'challenge',
        body:
          '做一个你自己的英文单词本！\n\n' +
          '要求：\n' +
          '1. 创建一个字典，至少放 5 个英文单词和它们的中文意思\n' +
          '2. 用 `input()` 让用户输入一个英文单词\n' +
          '3. 如果字典里有这个单词 → 显示中文意思\n' +
          '4. 如果没有 → 提示"还没收录这个单词"\n' +
          '5. 用 `for` 循环打印出所有单词和意思\n\n' +
          '💡 提示：用 `if word in wordbook:` 检查单词是否存在！',
      },
    ],
    summary:
      '你有了一本会说话的英文单词本！可以随时查单词啦。📖\n\n' +
      '今天学到的新技能：\n' +
      '• `{"名字": "内容"}` — 创建字典\n' +
      '• `字典["名字"]` — 查找内容\n' +
      '• `字典["新名字"] = "新内容"` — 添加或修改\n' +
      '• `for 变量 in 字典:` — 遍历所有名字\n' +
      '• `if 名字 in 字典:` — 检查有没有这个名字\n\n' +
      '列表和字典是 Python 里最重要的两个"容器"，都学会啦！',
  },
  starterCode:
    'wordbook = {\n' +
    '    "apple": "苹果",\n' +
    '    "cat": "猫",\n' +
    '    "dog": "狗",\n' +
    '    "hello": "你好",\n' +
    '    "python": "蟒蛇（也是一种编程语言！）",\n' +
    '}\n\n' +
    'word = input("请输入英文单词：")\n\n' +
    'if word in wordbook:\n' +
    '    print(word, "的意思是：", wordbook[word])\n' +
    'else:\n' +
    '    print("抱歉，还没收录", word)\n\n' +
    'print("\\n我的单词本里有这些词：")\n' +
    'for w in wordbook:\n' +
    '    print(" ", w, "—", wordbook[w])',
  solution:
    'wordbook = {\n' +
    '    "apple": "苹果",\n' +
    '    "cat": "猫",\n' +
    '    "dog": "狗",\n' +
    '    "hello": "你好",\n' +
    '    "python": "蟒蛇（也是一种编程语言！）",\n' +
    '}\n\n' +
    'word = input("请输入英文单词：")\n\n' +
    'if word in wordbook:\n' +
    '    print(word, "的意思是：", wordbook[word])\n' +
    'else:\n' +
    '    print("抱歉，还没收录", word)\n' +
    '    add = input("要添加这个词吗？(是/否)")\n' +
    '    if add == "是":\n' +
    '        meaning = input("请输入中文意思：")\n' +
    '        wordbook[word] = meaning\n' +
    '        print("已添加！")\n\n' +
    'print("\\n=== 我的单词本 ===")\n' +
    'for w in wordbook:\n' +
    '    print(" ", w, "—", wordbook[w])',
  hints: [
    '用 `if word in wordbook:` 来判断字典里有没有这个单词',
    '查找用 `wordbook[word]`，添加用 `wordbook[word] = "意思"`',
    '遍历用 `for w in wordbook:`，然后用 `wordbook[w]` 取出意思',
  ],
  checks: [
    { description: '代码里有字典（花括号）', type: 'contains', value: '{' },
    { description: '代码里有输入 input', type: 'contains', value: 'input(' },
    { description: '代码里有 if 判断', type: 'contains', value: 'if ' },
    { description: '代码可以正常运行', type: 'no_error' },
  ],
};
