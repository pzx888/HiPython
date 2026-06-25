// ============================================================
// HiPython — UserProfileContext (local multi-user profiles)
// ============================================================

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { UserProfile, UserProgress } from '../types';

const MAX_PROFILES = 8;
const PROFILES_KEY = 'hipython:profiles';
const CURRENT_KEY = 'hipython:currentProfileId';
const LEGACY_PROGRESS_KEY = 'hipython:progress';

export const EMOJI_POOL = ['🐍', '🐱', '🦊', '🐼', '🐸', '🦁', '🐰', '🐯'];

export function randomEmoji(): string {
  return EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)]!;
}

function newProfileId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `p_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function loadProfiles(): UserProfile[] {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as UserProfile[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveProfiles(profiles: UserProfile[]) {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

function loadCurrentId(): string | null {
  return localStorage.getItem(CURRENT_KEY);
}

function saveCurrentId(id: string) {
  localStorage.setItem(CURRENT_KEY, id);
}

function loadLegacyProgress(): UserProgress | null {
  try {
    const raw = localStorage.getItem(LEGACY_PROGRESS_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserProgress;
  } catch {
    return null;
  }
}

function saveProfileProgress(profileId: string, progress: UserProgress) {
  localStorage.setItem(`hipython:progress:${profileId}`, JSON.stringify(progress));
}

function deleteProfileProgress(profileId: string) {
  localStorage.removeItem(`hipython:progress:${profileId}`);
}

function removeLegacyProgress() {
  localStorage.removeItem(LEGACY_PROGRESS_KEY);
}

interface UserProfileContextValue {
  profiles: UserProfile[];
  currentProfile: UserProfile;
  switchProfile: (id: string) => void;
  createProfile: (name: string, emoji?: string) => UserProfile | null;
  updateProfile: (id: string, patch: Partial<Pick<UserProfile, 'name' | 'emoji'>>) => void;
  deleteProfile: (id: string) => void;
  canAddProfile: boolean;
}

const UserProfileContext = createContext<UserProfileContextValue | null>(null);

export function useUserProfile(): UserProfileContextValue {
  const ctx = useContext(UserProfileContext);
  if (!ctx) throw new Error('useUserProfile must be used within UserProfileProvider');
  return ctx;
}

export type ProfileModalMode = 'migrate' | 'onboarding' | 'create' | 'edit';

interface UserProfileProviderProps {
  children: ReactNode;
}

export function UserProfileProvider({ children }: UserProfileProviderProps) {
  const [profiles, setProfiles] = useState<UserProfile[]>(() => loadProfiles());
  const [currentId, setCurrentId] = useState<string | null>(() => loadCurrentId());
  const [blockingModal, setBlockingModal] = useState<{
    mode: 'migrate' | 'onboarding';
    legacyProgress?: UserProgress;
  } | null>(() => {
    const existing = loadProfiles();
    if (existing.length > 0) return null;
    const legacy = loadLegacyProgress();
    if (legacy) return { mode: 'migrate', legacyProgress: legacy };
    return { mode: 'onboarding' };
  });

  const currentProfile = useMemo(
    () => profiles.find((p) => p.id === currentId) ?? profiles[0],
    [profiles, currentId],
  );

  const commitProfile = useCallback(
    (profile: UserProfile, initialProgress?: UserProgress) => {
      const next = [...profiles, profile];
      setProfiles(next);
      saveProfiles(next);
      saveCurrentId(profile.id);
      setCurrentId(profile.id);
      if (initialProgress) {
        saveProfileProgress(profile.id, initialProgress);
        removeLegacyProgress();
      }
      setBlockingModal(null);
    },
    [profiles],
  );

  const switchProfile = useCallback(
    (id: string) => {
      if (!profiles.some((p) => p.id === id)) return;
      saveCurrentId(id);
      setCurrentId(id);
    },
    [profiles],
  );

  const createProfile = useCallback(
    (name: string, emoji?: string): UserProfile | null => {
      const trimmed = name.trim();
      if (!trimmed || profiles.length >= MAX_PROFILES) return null;
      const profile: UserProfile = {
        id: newProfileId(),
        name: trimmed.slice(0, 12),
        emoji: emoji ?? randomEmoji(),
        createdAt: new Date().toISOString(),
      };
      const next = [...profiles, profile];
      setProfiles(next);
      saveProfiles(next);
      saveCurrentId(profile.id);
      setCurrentId(profile.id);
      return profile;
    },
    [profiles],
  );

  const updateProfile = useCallback(
    (id: string, patch: Partial<Pick<UserProfile, 'name' | 'emoji'>>) => {
      const next = profiles.map((p) => {
        if (p.id !== id) return p;
        const name = patch.name !== undefined ? patch.name.trim().slice(0, 12) : p.name;
        if (!name) return p;
        return { ...p, ...patch, name };
      });
      setProfiles(next);
      saveProfiles(next);
    },
    [profiles],
  );

  const deleteProfile = useCallback(
    (id: string) => {
      if (profiles.length <= 1) return;
      const next = profiles.filter((p) => p.id !== id);
      deleteProfileProgress(id);
      setProfiles(next);
      saveProfiles(next);
      if (currentId === id) {
        const fallback = next[0]!;
        saveCurrentId(fallback.id);
        setCurrentId(fallback.id);
      }
    },
    [profiles, currentId],
  );

  const handleBlockingSubmit = useCallback(
    (name: string, emoji: string) => {
      const profile: UserProfile = {
        id: newProfileId(),
        name: name.trim().slice(0, 12),
        emoji,
        createdAt: new Date().toISOString(),
      };
      const legacy =
        blockingModal?.mode === 'migrate' ? blockingModal.legacyProgress : undefined;
      commitProfile(profile, legacy);
    },
    [blockingModal, commitProfile],
  );

  useEffect(() => {
    if (blockingModal || profiles.length === 0) return;
    const valid = profiles.some((p) => p.id === currentId);
    if (!valid) {
      const id = profiles[0]!.id;
      saveCurrentId(id);
      setCurrentId(id);
    }
  }, [profiles, currentId, blockingModal]);

  const value = useMemo<UserProfileContextValue | null>(() => {
    if (!currentProfile) return null;
    return {
      profiles,
      currentProfile,
      switchProfile,
      createProfile,
      updateProfile,
      deleteProfile,
      canAddProfile: profiles.length < MAX_PROFILES,
    };
  }, [
    profiles,
    currentProfile,
    switchProfile,
    createProfile,
    updateProfile,
    deleteProfile,
  ]);

  if (blockingModal) {
    return (
      <BlockingProfileSetup
        mode={blockingModal.mode}
        onSubmit={handleBlockingSubmit}
      />
    );
  }

  if (!value) return null;

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
}

// ---- Blocking first-time / migration UI (inline, no extra file) ----

function BlockingProfileSetup({
  mode,
  onSubmit,
}: {
  mode: 'migrate' | 'onboarding';
  onSubmit: (name: string, emoji: string) => void;
}) {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState(randomEmoji);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit(name, emoji);
  };

  return (
    <div style={blockingStyles.overlay}>
      <form style={blockingStyles.card} onSubmit={handleSubmit}>
        <h2 style={blockingStyles.title}>
          {mode === 'migrate' ? '👋 欢迎回来！' : '🐍 欢迎来到 HiPython！'}
        </h2>
        <p style={blockingStyles.desc}>
          {mode === 'migrate'
            ? '检测到你之前的学习记录。给这位小学习者起个名字吧！'
            : '先给学习者起个名字，进度会单独保存哦。'}
        </p>
        <label style={blockingStyles.label}>
          名字
          <input
            style={blockingStyles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="比如：小明"
            maxLength={12}
            autoFocus
          />
        </label>
        <div style={blockingStyles.emojiRow}>
          {EMOJI_POOL.map((e) => (
            <button
              key={e}
              type="button"
              style={{
                ...blockingStyles.emojiBtn,
                ...(emoji === e ? blockingStyles.emojiSelected : {}),
              }}
              onClick={() => setEmoji(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <button type="submit" style={blockingStyles.submit} disabled={!name.trim()}>
          开始学！🚀
        </button>
      </form>
    </div>
  );
}

const blockingStyles: Record<string, React.CSSProperties> = {
  overlay: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-bg, #FAFAFA)',
    padding: 24,
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    padding: '32px 28px',
    maxWidth: 400,
    width: '100%',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  title: { margin: 0, fontSize: 22, textAlign: 'center' as const },
  desc: { margin: 0, color: '#666', fontSize: 15, lineHeight: 1.5, textAlign: 'center' as const },
  label: { display: 'flex', flexDirection: 'column' as const, gap: 6, fontWeight: 600 },
  input: {
    padding: '10px 12px',
    fontSize: 16,
    borderRadius: 8,
    border: '2px solid #E0E0E0',
  },
  emojiRow: { display: 'flex', flexWrap: 'wrap' as const, gap: 8, justifyContent: 'center' },
  emojiBtn: {
    fontSize: 28,
    padding: '6px 10px',
    borderRadius: 8,
    border: '2px solid transparent',
    background: '#f5f5f5',
    cursor: 'pointer',
  },
  emojiSelected: { borderColor: '#4CAF50', background: '#C8E6C9' },
  submit: {
    padding: '12px 20px',
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 8,
    border: 'none',
    background: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
  },
};
