// ============================================================
// HiPython — CodeTemplates component (kid-friendly code snippets)
// ============================================================

import styles from './CodeTemplates.module.css';

interface Template {
  id: string;
  label: string;
  emoji: string;
  code: string;
  description: string;
}

/** Kid-friendly code templates */
const BASIC_TEMPLATES: Template[] = [
  {
    id: 'print',
    label: '打印',
    emoji: '🖨️',
    code: 'print("你好，世界！")',
    description: '用 print() 输出文字',
  },
  {
    id: 'input',
    label: '输入',
    emoji: '⌨️',
    code: 'name = input("你叫什么名字？")\nprint("你好，", name)',
    description: '用 input() 获取用户输入',
  },
  {
    id: 'for',
    label: '循环',
    emoji: '🔁',
    code: 'for i in range(5):\n    print("第", i+1, "次")',
    description: '用 for 循环重复做事情',
  },
  {
    id: 'if',
    label: '判断',
    emoji: '🤔',
    code: 'score = 85\nif score >= 90:\n    print("优秀！")\nelif score >= 60:\n    print("及格")\nelse:\n    print("继续加油！")',
    description: '用 if/elif/else 做判断',
  },
  {
    id: 'list',
    label: '列表',
    emoji: '📋',
    code: 'items = ["苹果", "香蕉", "橙子"]\nfor item in items:\n    print("有：", item)',
    description: '用列表存储多个东西',
  },
  {
    id: 'def',
    label: '函数',
    emoji: '🪄',
    code: 'def say_hello(name):\n    print("你好，", name, "！")\n\nsay_hello("小明")',
    description: '用 def 定义自己的函数',
  },
  {
    id: 'variable',
    label: '变量',
    emoji: '📦',
    code: 'name = "小明"\nage = 10\nprint("我叫", name, "，今年", age, "岁")',
    description: '创建和使用变量',
  },
  {
    id: 'random',
    label: '随机',
    emoji: '🎲',
    code: 'import random\nnum = random.randint(1, 10)\nprint("随机数字：", num)',
    description: '用 random 生成随机数',
  },
  {
    id: 'turtle',
    label: '画图',
    emoji: '🐢',
    code: 'import turtle\n\nfor i in range(4):\n    turtle.forward(100)\n    turtle.left(90)\n\nturtle.done()',
    description: '用 turtle 画正方形',
  },
  {
    id: 'dict',
    label: '字典',
    emoji: '📖',
    code: 'words = {"apple": "苹果", "cat": "猫"}\nprint("apple 是", words["apple"])',
    description: '用字典存储配对信息',
  },
];

interface CodeTemplatesProps {
  onInsert: (code: string) => void;
}

export function CodeTemplates({ onInsert }: CodeTemplatesProps) {
  return (
    <div className={styles.templatesBar}>
      <span className={styles.label}>📎 模板：</span>
      <div className={styles.templateList}>
        {BASIC_TEMPLATES.map((t) => (
          <button
            key={t.id}
            className={styles.templateBtn}
            onClick={() => onInsert(t.code)}
            title={t.description}
          >
            <span className={styles.templateEmoji}>{t.emoji}</span>
            <span className={styles.templateLabel}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}