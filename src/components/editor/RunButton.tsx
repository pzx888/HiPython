// ============================================================
// HiPython — RunButton component
// ============================================================

import styles from './RunButton.module.css';

interface RunButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function RunButton({ onClick, disabled, loading }: RunButtonProps) {
  if (loading) {
    return (
      <button className={styles.runButton} disabled>
        <span className={styles.spinner}>⏳</span>
        <span className={styles.label}>加载中…</span>
      </button>
    );
  }

  return (
    <button
      className={styles.runButton}
      onClick={onClick}
      disabled={disabled}
      title="运行代码 (Ctrl+Enter)"
    >
      <span className={styles.icon}>▶</span>
      <span className={styles.label}>运行</span>
    </button>
  );
}
