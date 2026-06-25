// ============================================================
// HiPython — ProfileModal (create / edit profile)
// ============================================================

import { useState, useEffect } from 'react';
import { EMOJI_POOL, randomEmoji } from '../../context/UserProfileContext';
import styles from './ProfileModal.module.css';

export interface ProfileModalProps {
  mode: 'create' | 'edit';
  initialName?: string;
  initialEmoji?: string;
  title: string;
  submitLabel: string;
  onSubmit: (name: string, emoji: string) => void;
  onClose: () => void;
}

export function ProfileModal({
  mode,
  initialName = '',
  initialEmoji = EMOJI_POOL[0]!,
  title,
  submitLabel,
  onSubmit,
  onClose,
}: ProfileModalProps) {
  const [name, setName] = useState(initialName);
  const [emoji, setEmoji] = useState(() =>
    mode === 'create' ? randomEmoji() : initialEmoji,
  );

  useEffect(() => {
    setName(initialName);
    setEmoji(mode === 'create' ? randomEmoji() : initialEmoji);
  }, [initialName, initialEmoji, mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit(name.trim(), emoji);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <form
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2 className={styles.title}>{title}</h2>
        <label className={styles.label}>
          名字
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="比如：小明"
            maxLength={12}
            autoFocus
          />
        </label>
        <p className={styles.emojiLabel}>选一个头像</p>
        <div className={styles.emojiRow}>
          {EMOJI_POOL.map((e) => (
            <button
              key={e}
              type="button"
              className={`${styles.emojiBtn} ${emoji === e ? styles.emojiSelected : ''}`}
              onClick={() => setEmoji(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={onClose}>
            取消
          </button>
          <button type="submit" className={styles.submitBtn} disabled={!name.trim()}>
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
