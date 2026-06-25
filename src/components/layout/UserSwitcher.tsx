// ============================================================
// HiPython — UserSwitcher (TopNav profile dropdown)
// ============================================================

import { useState, useRef, useEffect } from 'react';
import { useUserProfile } from '../../context/UserProfileContext';
import { ProfileModal } from './ProfileModal';
import styles from './UserSwitcher.module.css';

type ModalState =
  | { type: 'none' }
  | { type: 'create' }
  | { type: 'edit' }
  | { type: 'delete'; profileId: string; profileName: string };

export function UserSwitcher() {
  const {
    profiles,
    currentProfile,
    switchProfile,
    createProfile,
    updateProfile,
    deleteProfile,
    canAddProfile,
  } = useUserProfile();

  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<ModalState>({ type: 'none' });
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const handleSwitch = (id: string) => {
    switchProfile(id);
    setOpen(false);
  };

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        title="切换学习者"
      >
        <span className={styles.triggerEmoji}>{currentProfile.emoji}</span>
        <span className={styles.triggerName}>{currentProfile.name}</span>
        <span className={styles.chevron}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          <ul className={styles.list}>
            {profiles.map((p) => (
              <li key={p.id} className={styles.listItem}>
                <button
                  type="button"
                  className={`${styles.profileBtn} ${p.id === currentProfile.id ? styles.active : ''}`}
                  onClick={() => handleSwitch(p.id)}
                >
                  <span className={styles.profileEmoji}>{p.emoji}</span>
                  <span className={styles.profileName}>{p.name}</span>
                  {p.id === currentProfile.id && (
                    <span className={styles.check}>✓</span>
                  )}
                </button>
                {profiles.length > 1 && (
                  <button
                    type="button"
                    className={styles.deleteBtn}
                    title={`删除 ${p.name}`}
                    onClick={() =>
                      setModal({ type: 'delete', profileId: p.id, profileName: p.name })
                    }
                  >
                    🗑️
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.footer}>
            <button
              type="button"
              className={styles.footerBtn}
              onClick={() => {
                setOpen(false);
                setModal({ type: 'edit' });
              }}
            >
              ✏️ 编辑当前
            </button>
            {canAddProfile ? (
              <button
                type="button"
                className={styles.footerBtn}
                onClick={() => {
                  setOpen(false);
                  setModal({ type: 'create' });
                }}
              >
                ＋ 添加新用户
              </button>
            ) : (
              <span className={styles.limitHint}>最多 8 人</span>
            )}
          </div>
        </div>
      )}

      {modal.type === 'create' && (
        <ProfileModal
          mode="create"
          title="添加新学习者"
          submitLabel="开始学！"
          onSubmit={(name, emoji) => {
            createProfile(name, emoji);
            setModal({ type: 'none' });
          }}
          onClose={() => setModal({ type: 'none' })}
        />
      )}

      {modal.type === 'edit' && (
        <ProfileModal
          mode="edit"
          initialName={currentProfile.name}
          initialEmoji={currentProfile.emoji}
          title="编辑资料"
          submitLabel="保存"
          onSubmit={(name, emoji) => {
            updateProfile(currentProfile.id, { name, emoji });
            setModal({ type: 'none' });
          }}
          onClose={() => setModal({ type: 'none' })}
        />
      )}

      {modal.type === 'delete' && (
        <div className={styles.confirmOverlay} onClick={() => setModal({ type: 'none' })}>
          <div className={styles.confirmBox} onClick={(e) => e.stopPropagation()}>
            <p className={styles.confirmText}>
              ⚠️ 确定删除「{modal.profileName}」吗？
              <br />
              <strong>该用户的星星、徽章、代码都会被删除，无法恢复！</strong>
            </p>
            <div className={styles.confirmActions}>
              <button
                type="button"
                className={styles.confirmYes}
                onClick={() => {
                  deleteProfile(modal.profileId);
                  setModal({ type: 'none' });
                  setOpen(false);
                }}
              >
                确定删除
              </button>
              <button
                type="button"
                className={styles.confirmNo}
                onClick={() => setModal({ type: 'none' })}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
