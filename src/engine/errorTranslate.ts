// ============================================================
// HiPython — Kid-friendly error message translator
// ============================================================

interface ErrorPattern {
  pattern: RegExp;
  getMessage: (match: RegExpMatchArray) => string;
}

const errorPatterns: ErrorPattern[] = [
  // NameError
  {
    pattern: /NameError: name '(\w+)' is not defined/,
    getMessage: (m) =>
      `🤔 咦？\`${m[1]}\` 还没有被定义过哦！\n先给它一个值吧，比如：\`${m[1]} = "你好"\``,
  },
  // SyntaxError — missing parentheses
  {
    pattern: /SyntaxError: unexpected EOF while parsing/,
    getMessage: () =>
      '📝 好像少了点什么…检查一下你的括号、引号是不是都配对了？',
  },
  {
    pattern: /SyntaxError: invalid syntax/,
    getMessage: () =>
      '📝 语法有点小问题！常见的可能是：\n• 少了冒号 `:`\n• 括号没配对\n• 引号忘了写',
  },
  {
    pattern: /SyntaxError: .*([Ee]OL|[Uu]nexpected.*['"]\))/,
    getMessage: () =>
      '📝 这一行的结尾好像不太对，检查一下是不是少了括号或者引号？',
  },
  // TypeError
  {
    pattern: /TypeError: .*'(\w+)'.*'(\w+)'/,
    getMessage: (m) =>
      `🔀 类型不匹配！你把 \`${m[1]}\` 和 \`${m[2]}\` 混在一起用了。\n它们不能直接放在一起，试试用 \`str()\` 或 \`int()\` 转换一下？`,
  },
  {
    pattern: /TypeError: (.+)/,
    getMessage: (m) =>
      `🔀 类型错误：\`${m[1]}\`\n检查一下你是不是把不同类型的东西混在一起用了？`,
  },
  // IndentationError
  {
    pattern: /IndentationError: (.+)/,
    getMessage: () =>
      '↔️ 缩进不对！Python 里，同一个代码块的每一行要对齐。\n试试用 4 个空格（或按一次 Tab 键）来缩进？',
  },
  // ZeroDivisionError
  {
    pattern: /ZeroDivisionError: (.+)/,
    getMessage: () =>
      '➗ 哎呀，除以 0 是不行的！\n在数学里不能除以0，在 Python 里也一样哦。',
  },
  // IndexError
  {
    pattern: /IndexError: (.+)/,
    getMessage: () =>
      '📋 列表位置超出范围了！\n记住：列表的第1个元素的位置是 0，最后一个是 `len(列表)-1`。',
  },
  // ImportError / ModuleNotFoundError
  {
    pattern: /(ImportError|ModuleNotFoundError): .*'(\w+)'/,
    getMessage: (m) =>
      `📦 找不到 \`${m[2]}\` 这个模块。\n是不是名字拼错了？或者这个模块还没安装？`,
  },
  // AttributeError
  {
    pattern: /AttributeError: .*'(\w+)'.*'(\w+)'/,
    getMessage: (m) =>
      `🔍 \`${m[1]}\` 没有 \`${m[2]}\` 这个功能。\n你的变量类型可能和你想的不太一样。`,
  },
  // ValueError — int/float conversion
  {
    pattern: /ValueError: invalid literal for int\(\)/,
    getMessage: () =>
      '🔢 这里需要一个数字，但你给的不是数字。\n比如 `int("abc")` 就不行，`int("123")` 才行。',
  },
  {
    pattern: /ValueError: (.+)/,
    getMessage: (m) =>
      `⚠️ 数值错误：${m[1]}\n检查一下你给的数值类型对不对？`,
  },
];

/**
 * Translate a raw Python error into a kid-friendly message.
 * Falls back to the original message if no pattern matches.
 */
export function translateError(error: Error | string): string {
  const message = typeof error === 'string' ? error : error.message;

  for (const { pattern, getMessage } of errorPatterns) {
    const match = message.match(pattern);
    if (match) {
      return getMessage(match);
    }
  }

  // Fallback: simplify the raw error slightly
  const trimmed = message.split('\n')[0]; // first line only
  return `😅 出错了：${trimmed}\n\n别着急，仔细看看你的代码，或者问问爸爸帮忙！`;
}

/**
 * Check if a code string has a potential infinite loop pattern.
 * (Simple heuristic — not foolproof)
 */
export function hasInfiniteLoopRisk(code: string): boolean {
  const stripped = code.replace(/#.*$/gm, ''); // remove comments
  const patterns = [
    /while\s+True\s*:/,
    /while\s+1\s*:/,
    /while\s+.+\s*:\s*\n\s*pass/,
    /for\s+.*\s+in\s+iter\(int\(/,
  ];
  return patterns.some((p) => p.test(stripped));
}