// ============================================================
// HiPython — AppShell layout wrapper
// ============================================================

import { Outlet } from 'react-router-dom';
import { useUserProfile } from '../../context/UserProfileContext';
import { TopNav } from './TopNav';
import styles from './AppShell.module.css';

export function AppShell() {
  const { currentProfile } = useUserProfile();

  return (
    <div className={styles.appShell}>
      <TopNav />
      <main className={styles.main}>
        <Outlet key={currentProfile.id} />
      </main>
    </div>
  );
}
