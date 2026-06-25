// ============================================================
// HiPython — TopNav component
// ============================================================

import { Link, useLocation } from 'react-router-dom';
import { UserSwitcher } from './UserSwitcher';
import styles from './TopNav.module.css';

export function TopNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 首页' },
    { path: '/course-map', label: '🗺️ 课程地图' },
    { path: '/story', label: '📖 故事' },
    { path: '/arena', label: '🏟️ 竞技场' },
    { path: '/typing', label: '⌨️ 打字' },
    { path: '/achievements', label: '🏆 成就' },
  ];

  return (
    <nav className={styles.topNav}>
      <Link to="/" className={styles.brand}>
        <span className={styles.logo}>🐍</span>
        <span className={styles.brandName}>HiPython</span>
      </Link>

      <div className={styles.navItems}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navLink} ${
              location.pathname === item.path ? styles.active : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <UserSwitcher />
    </nav>
  );
}