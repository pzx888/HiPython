// ============================================================
// HiPython — CodeEditor component (CodeMirror 6 wrapper)
// ============================================================

import { useCallback, useRef, forwardRef, useImperativeHandle, useMemo } from 'react';
import CodeMirror, { type ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { EditorView } from '@codemirror/view';
import { autocompletion, type Completion } from '@codemirror/autocomplete';
import { RunButton } from './RunButton';
import styles from './CodeEditor.module.css';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  disabled?: boolean;
  loading?: boolean;
  /** Enable kid-friendly autocompletion (default: false) */
  autocompleteEnabled?: boolean;
  /** Optional toolbar slot — rendered above the editor, inside the flex container */
  children?: React.ReactNode;
}

/** Public methods exposed via ref */
export interface CodeEditorHandle {
  /** Insert code snippet at the current cursor position */
  insertTemplate: (code: string) => void;
}

/** Kid-friendly CodeMirror 6 setup */
const kidFriendlyTheme = EditorView.theme({
  '&': {
    fontSize: '18px',
    fontFamily:
      '"Cascadia Code", "Fira Code", "Consolas", "Courier New", monospace',
    lineHeight: '1.8',
  },
  '.cm-content': {
    padding: '16px',
  },
  '.cm-gutters': {
    fontSize: '14px',
    borderRight: '1px solid #e0e0e0',
    backgroundColor: '#fafafa',
    color: '#999',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#e8f5e9',
  },
  '.cm-activeLine': {
    backgroundColor: '#f1f8e9 !important',
  },
  '.cm-cursor': {
    borderLeftWidth: '2px',
  },
});

/** Kid-friendly Python completions (~25 keywords/functions) */
const KID_COMPLETIONS: Completion[] = [
  // Output
  { label: 'print(', detail: '输出文字', type: 'function', apply: 'print(${})' },
  { label: 'input(', detail: '让用户输入', type: 'function', apply: 'input("${}")' },

  // Variables & types
  { label: 'int(', detail: '转成整数', type: 'function', apply: 'int(${})' },
  { label: 'str(', detail: '转成字符串', type: 'function', apply: 'str(${})' },
  { label: 'len(', detail: '数一数有多少', type: 'function', apply: 'len(${})' },

  // Control flow
  { label: 'if', detail: '如果…就…', type: 'keyword' },
  { label: 'elif', detail: '否则如果…', type: 'keyword' },
  { label: 'else:', detail: '否则', type: 'keyword', apply: 'else:\n    ${}' },

  // Loops
  { label: 'for i in range():', detail: '重复做N次', type: 'keyword', apply: 'for i in range(${1}):\n    ${2}' },
  { label: 'for item in :', detail: '遍历列表每一项', type: 'keyword', apply: 'for ${1:item} in ${2:list}:\n    ${3}' },
  { label: 'range(', detail: '生成数字序列', type: 'function', apply: 'range(${})' },

  // Loop keywords
  { label: 'break', detail: '跳出循环', type: 'keyword' },
  { label: 'continue', detail: '跳到下一次循环', type: 'keyword' },

  // Boolean / comparison
  { label: 'True', detail: '真', type: 'constant' },
  { label: 'False', detail: '假', type: 'constant' },
  { label: 'and', detail: '并且', type: 'keyword' },
  { label: 'or', detail: '或者', type: 'keyword' },
  { label: 'not', detail: '不 / 非', type: 'keyword' },

  // List
  { label: 'list', detail: '列表（容器）', type: 'keyword' },
  { label: 'append(', detail: '往列表里加一个', type: 'function', apply: '.append(${})' },

  // Dict
  { label: 'dict', detail: '字典（配对）', type: 'keyword' },

  // Function
  { label: 'def', detail: '定义函数', type: 'keyword', apply: 'def ${1:name}(${2}):\n    ${3}' },
  { label: 'return', detail: '返回结果', type: 'keyword', apply: 'return ${}' },

  // Imports
  { label: 'import turtle', detail: '召唤小海龟画图', type: 'keyword' },
  { label: 'import random', detail: '随机数模块', type: 'keyword' },
  { label: 'import string', detail: '字符串工具', type: 'keyword' },

  // Comments
  { label: '# ', detail: '注释（笔记）', type: 'keyword' },
];

/** Auto-completion extension with kid-friendly completions */
const kidCompletion = autocompletion({
  override: [
    (context) => {
      const word = context.matchBefore(/\w*/);
      if (!word || word.from === word.to && !context.explicit) return null;
      return {
        from: word.from,
        options: KID_COMPLETIONS,
      };
    },
  ],
});

export const CodeEditor = forwardRef<CodeEditorHandle, CodeEditorProps>(
  function CodeEditor(
    { value, onChange, onRun, disabled, loading, autocompleteEnabled = false, children },
    ref,
  ) {
    const editorRef = useRef<ReactCodeMirrorRef>(null);

    const handleChange = useCallback(
      (val: string) => onChange(val),
      [onChange],
    );

    // Allow Ctrl+Enter to run
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          onRun();
        }
      },
      [onRun],
    );

    // Expose insertTemplate to parent via ref
    useImperativeHandle(ref, () => ({
      insertTemplate(code: string) {
        const view = editorRef.current?.view;
        if (!view) return;

        // Get current cursor position
        const cursor = view.state.selection.main.head;
        const currentDoc = view.state.doc.toString();

        // Insert the template code at cursor position
        const newCode =
          currentDoc.slice(0, cursor) + code + currentDoc.slice(cursor);

        // Update via onChange so the parent state stays in sync
        onChange(newCode);

        // Focus the editor after insertion
        view.focus();
      },
    }));

    const hasCode = value.trim().length > 0;

    const extensions = useMemo(
      () =>
        autocompleteEnabled
          ? [python(), kidFriendlyTheme, kidCompletion]
          : [python(), kidFriendlyTheme],
      [autocompleteEnabled],
    );

    return (
      <div className={styles.editorWrapper} onKeyDown={handleKeyDown}>
        {/* Optional children slot (e.g. CodeTemplates) */}
        {children}
        {/* Code area — fills available space, scrolls when content overflows */}
        <div className={styles.codeArea}>
          <CodeMirror
            ref={editorRef}
            value={value}
            onChange={handleChange}
            extensions={extensions}
            height="100%"
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightActiveLine: true,
              foldGutter: false,
              dropCursor: true,
              allowMultipleSelections: false,
              indentOnInput: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: false,
              rectangularSelection: false,
              crosshairCursor: false,
              highlightSelectionMatches: true,
              searchKeymap: false,
            }}
            theme="light"
            readOnly={disabled}
            placeholder="在这里写 Python 代码…"
          />
        </div>

        {/* Bottom bar: run button + shortcut hint */}
        <div className={styles.bottomBar}>
          <RunButton
            onClick={onRun}
            disabled={!hasCode || disabled}
            loading={loading}
          />
          <span className={styles.shortcutHint}>Ctrl+Enter 运行</span>
        </div>
      </div>
    );
  },
);