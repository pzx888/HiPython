// ============================================================
// HiPython — Home page
// ============================================================

import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import styles from './Home.module.css';

export function Home() {
  const { progress } = useProgress();

  return (
    <div className={styles.home}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroEmoji}>🐍</span>
            欢迎来到 HiPython！
          </h1>
          <p className={styles.heroSubtitle}>
            和 Python 小蛇一起，开启编程冒险之旅 🚀
          </p>
          <p className={styles.heroDesc}>
            用真正的 Python 代码，做出有趣的小项目。
            <br />
            一步一步来，你会发现编程超好玩！
          </p>
          <div className={styles.heroActions}>
            <Link to="/course-map" className={styles.btnPrimary}>
              🗺️ 开始学习
            </Link>
            {progress.totalStars > 0 && (
              <div className={styles.progressSummary}>
                ⭐ {progress.totalStars} 颗星星已获得
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>📝</span>
          <h3>真实 Python 代码</h3>
          <p>不是拖积木块，而是打真正的 Python 代码。就像真正的程序员那样！</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>▶️</span>
          <h3>即时运行</h3>
          <p>写完代码，点一下运行按钮，马上就能看到结果。</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🏆</span>
          <h3>闯关收集星星</h3>
          <p>每完成一课都能获得星星，集齐所有星星成为 Python 大师！</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🎨</span>
          <h3>作品展览</h3>
          <p>每一课都能做出一个有趣的小作品：计算器、猜数字、画图形…</p>
        </div>
      </section>

      {/* Quick start */}
      <section className={styles.quickStart}>
        <h2>🚀 快速开始</h2>
        <p>第一课只要 20 分钟，试试看？</p>
        <Link to="/lesson/l1_1" className={styles.btnPrimary}>
          📖 第1课：你好，世界！
        </Link>
      </section>
    </div>
  );
}