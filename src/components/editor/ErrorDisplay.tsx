// ============================================================
// HiPython — ErrorDisplay component
// ============================================================

import styles from './ErrorDisplay.module.css';

interface ErrorDisplayProps {
  error: string;
}

export function ErrorDisplay({ error }: ErrorDisplayProps) {
  return (
    <div className={styles.errorBox}>
      <div className={styles.errorHeader}>
        <span className={styles.errorIcon}>💡</span>
        <span className={styles.errorTitle}>我们来修复它！</span>
      </div>
      <p className={styles.errorMessage}>{error}</p>
    </div>
  );
}