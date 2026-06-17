// ============================================================
// HiPython — OutputPanel component
// ============================================================

import { useState } from 'react';
import type { ExecutionResult, VariableInfo } from '../../types';
import { ErrorDisplay } from '../editor/ErrorDisplay';
import { TurtleCanvas } from './TurtleCanvas';
import styles from './OutputPanel.module.css';

type Tab = 'console' | 'canvas' | 'variables';

interface OutputPanelProps {
  result: ExecutionResult | null;
  isRunning: boolean;
}

export function OutputPanel({ result, isRunning }: OutputPanelProps) {
  const [activeTab, setActiveTab] = useState<Tab>('console');

  return (
    <div className={styles.panel}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'console' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('console')}
        >
          🖥️ 控制台
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'canvas' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('canvas')}
        >
          🎨 画布
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'variables' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('variables')}
        >
          📊 变量
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'console' && (
          <ConsoleOutput result={result} isRunning={isRunning} />
        )}
        {activeTab === 'canvas' && (
          <TurtleCanvas
            commands={result?.turtleCommands ?? []}
            isRunning={isRunning}
          />
        )}
        {activeTab === 'variables' && (
          <VariablesView variables={result?.variables ?? {}} />
        )}
      </div>
    </div>
  );
}

function ConsoleOutput({
  result,
  isRunning,
}: {
  result: ExecutionResult | null;
  isRunning: boolean;
}) {
  if (isRunning) {
    return (
      <div className={styles.consoleOutput}>
        <span className={styles.runningIndicator}>⚡ 代码运行中…</span>
      </div>
    );
  }

  if (!result) {
    return (
      <div className={styles.emptyState}>
        <span className={styles.emptyIcon}>🚀</span>
        <p>点击 <strong>▶ 运行</strong> 按钮看看效果吧！</p>
        <p className={styles.hint}>试试输入 <code>print("Hello!")</code></p>
      </div>
    );
  }

  return (
    <div className={styles.consoleOutput}>
      {result.stdout && (
        <pre className={styles.output}>{result.stdout}</pre>
      )}
      {result.error && (
        <ErrorDisplay error={result.error} />
      )}
      {!result.stdout && !result.error && (
        <div className={styles.successHint}>
          ✅ 代码运行成功！（没有输出内容）
        </div>
      )}
    </div>
  );
}

interface VariablesViewProps {
  variables: Record<string, VariableInfo>;
}

function VariablesView({ variables }: VariablesViewProps) {
  const entries = Object.values(variables);

  if (entries.length === 0) {
    return (
      <div className={styles.emptyState}>
        <span className={styles.emptyIcon}>📊</span>
        <p>运行代码后可以在这里查看变量值</p>
        <p className={styles.hint}>
          试试 <code>name = "小明"</code> 然后运行
        </p>
      </div>
    );
  }

  return (
    <div className={styles.variablesTable}>
      <table>
        <thead>
          <tr>
            <th>变量名</th>
            <th>类型</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((v) => (
            <tr key={v.name}>
              <td className={styles.varName}>{v.name}</td>
              <td className={styles.varType}>{v.type}</td>
              <td className={styles.varValue}>{v.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}