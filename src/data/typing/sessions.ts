// ============================================================
// HiPython — Typing session definitions
// ============================================================
import type { TypingSession } from '../../types';

export const allTypingSessions: TypingSession[] = [
  // ---- L1: Keyboard Basics ----
  {
    id: 'typing_l1_homerow',
    title: '键盘初体验 — 基准键位',
    description: '熟悉 F 和 J 定位键，练习基准键位的指法',
    difficulty: 1,
    tasks: [
      { id: 'hr_1', text: 'fff', category: 'letters', difficulty: 1, hint: '左手食指 - F键' },
      { id: 'hr_2', text: 'jjj', category: 'letters', difficulty: 1, hint: '右手食指 - J键' },
      { id: 'hr_3', text: 'ddd', category: 'letters', difficulty: 1, hint: '左手中指 - D键' },
      { id: 'hr_4', text: 'kkk', category: 'letters', difficulty: 1, hint: '右手中指 - K键' },
      { id: 'hr_5', text: 'sss', category: 'letters', difficulty: 1, hint: '左手无名指 - S键' },
      { id: 'hr_6', text: 'lll', category: 'letters', difficulty: 1, hint: '右手无名指 - L键' },
      { id: 'hr_7', text: 'aaa', category: 'letters', difficulty: 1, hint: '左手小指 - A键' },
      { id: 'hr_8', text: 'fjfj', category: 'letters', difficulty: 1, hint: '定位键交替练习' },
      { id: 'hr_9', text: 'asdf', category: 'letters', difficulty: 1, hint: '左手四个键位连打' },
      { id: 'hr_10', text: 'jkl', category: 'letters', difficulty: 1, hint: '右手三个键位连打' },
      { id: 'hr_11', text: 'fdsa', category: 'letters', difficulty: 1, hint: '左手反向练习' },
      { id: 'hr_12', text: 'asdfjkl', category: 'letters', difficulty: 1, hint: '完整基准键位' },
    ],
  },

  {
    id: 'typing_l1_letters',
    title: '字母总动员',
    description: '熟悉键盘上所有字母键的位置',
    difficulty: 1,
    tasks: [
      { id: 'al_1', text: 'hello', category: 'words', difficulty: 1, hint: '你好' },
      { id: 'al_2', text: 'world', category: 'words', difficulty: 1, hint: '世界' },
      { id: 'al_3', text: 'python', category: 'python', difficulty: 1, hint: 'Python编程语言' },
      { id: 'al_4', text: 'mouse', category: 'words', difficulty: 1, hint: '鼠标/老鼠' },
      { id: 'al_5', text: 'keyboard', category: 'words', difficulty: 1, hint: '键盘' },
      { id: 'al_6', text: 'snake', category: 'words', difficulty: 1, hint: '蛇' },
      { id: 'al_7', text: 'game', category: 'words', difficulty: 1, hint: '游戏' },
      { id: 'al_8', text: 'code', category: 'python', difficulty: 1, hint: '代码' },
      { id: 'al_9', text: 'fun', category: 'words', difficulty: 1, hint: '有趣' },
      { id: 'al_10', text: 'learn', category: 'words', difficulty: 1, hint: '学习' },
      { id: 'al_11', text: 'star', category: 'words', difficulty: 1, hint: '星星' },
      { id: 'al_12', text: 'run', category: 'python', difficulty: 1, hint: '运行' },
    ],
  },

  // ---- L2: Python Keywords ----
  {
    id: 'typing_l2_python_kw',
    title: 'Python 关键字',
    description: '练习 Python 中常用的关键字，为学编程做准备',
    difficulty: 2,
    tasks: [
      { id: 'pk_1', text: 'print', category: 'python', difficulty: 2, hint: '输出函数 - 打印信息' },
      { id: 'pk_2', text: 'for', category: 'python', difficulty: 2, hint: '循环关键字' },
      { id: 'pk_3', text: 'if', category: 'python', difficulty: 2, hint: '判断关键字' },
      { id: 'pk_4', text: 'else', category: 'python', difficulty: 2, hint: '否则分支' },
      { id: 'pk_5', text: 'def', category: 'python', difficulty: 2, hint: '定义函数' },
      { id: 'pk_6', text: 'import', category: 'python', difficulty: 2, hint: '导入模块' },
      { id: 'pk_7', text: 'range', category: 'python', difficulty: 2, hint: '范围函数' },
      { id: 'pk_8', text: 'input', category: 'python', difficulty: 2, hint: '输入函数' },
      { id: 'pk_9', text: 'return', category: 'python', difficulty: 2, hint: '返回值' },
      { id: 'pk_10', text: 'while', category: 'python', difficulty: 2, hint: 'while循环' },
      { id: 'pk_11', text: 'list', category: 'python', difficulty: 2, hint: '列表类型' },
      { id: 'pk_12', text: 'True', category: 'python', difficulty: 2, hint: '布尔值-真' },
    ],
  },

  {
    id: 'typing_l2_python_funcs',
    title: 'Python 函数名',
    description: '练习 Python 常用函数名的输入',
    difficulty: 2,
    tasks: [
      { id: 'pf_1', text: 'len', category: 'python', difficulty: 2, hint: '获取长度' },
      { id: 'pf_2', text: 'str', category: 'python', difficulty: 2, hint: '转为字符串' },
      { id: 'pf_3', text: 'int', category: 'python', difficulty: 2, hint: '转为整数' },
      { id: 'pf_4', text: 'append', category: 'python', difficulty: 2, hint: '列表追加' },
      { id: 'pf_5', text: 'random', category: 'python', difficulty: 2, hint: '随机数模块' },
      { id: 'pf_6', text: 'math', category: 'python', difficulty: 2, hint: '数学模块' },
      { id: 'pf_7', text: 'open', category: 'python', difficulty: 2, hint: '打开文件' },
      { id: 'pf_8', text: 'sort', category: 'python', difficulty: 2, hint: '排序' },
      { id: 'pf_9', text: 'split', category: 'python', difficulty: 2, hint: '分割字符串' },
      { id: 'pf_10', text: 'join', category: 'python', difficulty: 2, hint: '连接字符串' },
    ],
  },

  // ---- L3: Code Snippets ----
  {
    id: 'typing_l3_snippets',
    title: '代码片段练习',
    description: '输入完整的 Python 代码行，学打字的同时熟悉代码结构',
    difficulty: 3,
    tasks: [
      { id: 'cs_1', text: 'print("Hello")', category: 'python', difficulty: 3, hint: '打印Hello' },
      { id: 'cs_2', text: 'for i in range(10):', category: 'python', difficulty: 3, hint: '循环10次' },
      { id: 'cs_3', text: 'if x > 5:', category: 'python', difficulty: 3, hint: '判断x大于5' },
      { id: 'cs_4', text: 'name = "Python"', category: 'python', difficulty: 3, hint: '变量赋值' },
      { id: 'cs_5', text: 'import random', category: 'python', difficulty: 3, hint: '导入随机模块' },
      { id: 'cs_6', text: 'def greet(name):', category: 'python', difficulty: 3, hint: '定义问候函数' },
      { id: 'cs_7', text: 'numbers = [1, 2, 3]', category: 'python', difficulty: 3, hint: '创建列表' },
      { id: 'cs_8', text: 'print(f"Hi {name}")', category: 'python', difficulty: 3, hint: 'f-string格式化' },
    ],
  },

  {
    id: 'typing_l3_sentences',
    title: '英文句子工厂',
    description: '练习输入完整的英文句子',
    difficulty: 2,
    tasks: [
      { id: 'es_1', text: 'I love Python.', category: 'sentences', difficulty: 2, hint: '我爱Python' },
      { id: 'es_2', text: 'Coding is fun.', category: 'sentences', difficulty: 2, hint: '编程很有趣' },
      { id: 'es_3', text: 'Hello, world!', category: 'sentences', difficulty: 2, hint: '你好，世界！' },
      { id: 'es_4', text: 'Let us learn together.', category: 'sentences', difficulty: 2, hint: '让我们一起学习' },
      { id: 'es_5', text: 'Practice makes perfect.', category: 'sentences', difficulty: 2, hint: '熟能生巧' },
      { id: 'es_6', text: 'Keep going, you are great!', category: 'sentences', difficulty: 2, hint: '继续加油，你很棒！' },
      { id: 'es_7', text: 'I can write code.', category: 'sentences', difficulty: 2, hint: '我会写代码了' },
      { id: 'es_8', text: 'Today is a good day.', category: 'sentences', difficulty: 2, hint: '今天是美好的一天' },
    ],
  },

  // ---- L4: Mixed Challenge ----
  {
    id: 'typing_l4_mixed',
    title: '综合挑战',
    description: '混合字母、单词和代码的综合练习',
    difficulty: 4,
    tasks: [
      { id: 'mx_1', text: 'print("Hello, World!")', category: 'python', difficulty: 4, hint: '经典第一行代码' },
      { id: 'mx_2', text: 'for i in range(5):', category: 'python', difficulty: 4, hint: '循环5次' },
      { id: 'mx_3', text: 'Python is awesome!', category: 'sentences', difficulty: 3, hint: 'Python太棒了' },
      { id: 'mx_4', text: 'def add(a, b):', category: 'python', difficulty: 4, hint: '定义加法函数' },
      { id: 'mx_5', text: 'return a + b', category: 'python', difficulty: 3, hint: '返回两数之和' },
      { id: 'mx_6', text: 'if __name__ == "__main__":', category: 'python', difficulty: 5, hint: '主程序入口' },
      { id: 'mx_7', text: 'Learning never stops.', category: 'sentences', difficulty: 3, hint: '学无止境' },
      { id: 'mx_8', text: 'my_list.append(item)', category: 'python', difficulty: 4, hint: '往列表添加元素' },
      { id: 'mx_9', text: 'while count > 0:', category: 'python', difficulty: 4, hint: 'while循环条件' },
      { id: 'mx_10', text: 'The quick brown fox', category: 'sentences', difficulty: 3, hint: '经典的包含所有字母的句子' },
    ],
  },

  {
    id: 'typing_l4_code_blocks',
    title: '代码块挑战',
    description: '输入多行 Python 代码块，模拟真实编程体验',
    difficulty: 4,
    tasks: [
      { id: 'cb_1', text: 'for i in range(3):', category: 'python', difficulty: 4, hint: '循环开始' },
      { id: 'cb_2', text: '    print(i)', category: 'python', difficulty: 4, hint: '缩进4个空格' },
      { id: 'cb_3', text: 'if score >= 90:', category: 'python', difficulty: 4, hint: '成绩判断' },
      { id: 'cb_4', text: '    print("Excellent!")', category: 'python', difficulty: 4, hint: '打印Excellent' },
      { id: 'cb_5', text: 'total = sum(numbers)', category: 'python', difficulty: 4, hint: '求和' },
      { id: 'cb_6', text: 'result = a * b + c', category: 'python', difficulty: 3, hint: '算术表达式' },
      { id: 'cb_7', text: 'names = ["Alice", "Bob"]', category: 'python', difficulty: 4, hint: '字符串列表' },
      { id: 'cb_8', text: 'print(len(names))', category: 'python', difficulty: 4, hint: '输出列表长度' },
    ],
  },
];

export function getSessionById(id: string): TypingSession | undefined {
  return allTypingSessions.find((s) => s.id === id);
}

export function getSessionsByDifficulty(difficulty: number): TypingSession[] {
  return allTypingSessions.filter((s) => s.difficulty <= difficulty);
}