// ============================================================
// HiPython — AppShell layout wrapper
// ============================================================

import { Outlet } from 'react-router-dom';
import { TopNav } from './TopNav';
import styles from './AppShell.module.css';

export function AppShell() {
  return (
    <div className={styles.appShell}>
      <TopNav />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
