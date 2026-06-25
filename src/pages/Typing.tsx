// ============================================================
// HiPython — Typing practice page
// ============================================================

import { useState, useCallback, useRef, useEffect } from 'react';
import { useProgress } from '../hooks/useProgress';
import { useTypingEngine, mapKeyToChar } from '../hooks/useTypingEngine';
import { setMuted, getMuted } from '../engine/sound';
import { allTypingSessions } from '../data/typing';
import { getLevelByScore } from '../data/typing';
import { VirtualKeyboard } from '../components/typing/VirtualKeyboard';
import { TypingTarget } from '../components/typing/TypingTarget';
import { TypingProgress } from '../components/typing/TypingProgress';
import { TypingResults } from '../components/typing/TypingResults';
import { SessionSelector } from '../components/typing/SessionSelector';
import type { TypingSession } from '../types';
import styles from './Typing.module.css';

export function TypingPage() {
  const { progress, addTypingRecord } = useProgress();
  const typingStats = progress.typingStats;

  // View state
  const [selectedSession, setSelectedSession] = useState<TypingSession | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [localMuted, setLocalMuted] = useState(false);

  // The engine instance — recreated when session changes
  const defaultSession = allTypingSessions[0]; // always available
  const engine = useTypingEngine(selectedSession ?? defaultSession);

  // Track last key for virtual keyboard feedback
  const [lastKeyCode, setLastKeyCode] = useState<string | null>(null);
  const [lastKeyCorrect, setLastKeyCorrect] = useState<boolean | null>(null);
  const lastKeyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Global keyboard listener
  useEffect(() => {
    if (!selectedSession || engine.phase !== 'running') return;

    const handler = (e: KeyboardEvent) => {
      // Update virtual keyboard feedback
      setLastKeyCode(e.code);

      // Check if the key should be processed
      const modifierKeys = ['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab', 'Escape'];
      const fnKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
      const ignoredKeys = [...modifierKeys, ...fnKeys];

      if (!ignoredKeys.includes(e.key)) {
        e.preventDefault();
      }

      // Determine correctness for virtual keyboard feedback
      const currentTask = selectedSession.tasks[engine.currentTaskIndex];
      const mappedChar = mapKeyToChar(e.key, e.shiftKey);

      if (currentTask) {
        const expected = currentTask.text[engine.currentCharIndex];
        if (modifierKeys.includes(e.key)) {
          // Don't show any feedback for modifier-only presses
        } else if (mappedChar === expected) {
          setLastKeyCorrect(true);
        } else if (e.key === 'Backspace') {
          setLastKeyCorrect(true);
        } else {
          setLastKeyCorrect(false);
        }
      }

      // Forward mapped character to engine
      engine.handleKeyPress(mappedChar);
    };

    window.addEventListener('keydown', handler, { capture: true });
    return () => window.removeEventListener('keydown', handler, { capture: true });
  }, [selectedSession, engine]);

  // Show results when phase changes to complete
  useEffect(() => {
    if (engine.phase === 'complete') {
      const record = engine.getRecord();
      addTypingRecord(record);
      setShowResults(true);
    }
  }, [engine.phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Clean up timers
  useEffect(() => {
    return () => {
      if (lastKeyTimerRef.current) clearTimeout(lastKeyTimerRef.current);
    };
  }, []);

  // Handlers
  const handleSelectSession = useCallback((session: TypingSession) => {
    setSelectedSession(session);
    setShowResults(false);
  }, []);

  const handleStartPractice = useCallback(() => {
    engine.start();
  }, [engine]);

  const handleRetry = useCallback(() => {
    setShowResults(false);
    engine.start();
  }, [engine]);

  const handleBackToSelect = useCallback(() => {
    setSelectedSession(null);
    setShowResults(false);
  }, []);

  const toggleMute = useCallback(() => {
    const newMuted = !getMuted();
    setMuted(newMuted);
    setLocalMuted(newMuted);
  }, []);

  // ---- Render: Session Selection ----
  if (!selectedSession) {
    return (
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>⌨️ 打字练习</h1>
        <p className={styles.pageSubtitle}>
          每次 5 分钟，让手指熟悉键盘，顺便记 Python 关键字！
        </p>
        <SessionSelector
          sessions={allTypingSessions}
          typingStats={typingStats}
          onSelect={handleSelectSession}
        />
      </div>
    );
  }

  // ---- Render: Pre-start screen ----
  if (engine.phase === 'idle') {
    return (
      <div className={styles.page}>
        <div className={styles.preStartContainer}>
          <button className={styles.backBtn} onClick={handleBackToSelect}>
            ← 返回选择
          </button>

          <div className={styles.preStartCard}>
            <h2 className={styles.preStartTitle}>{selectedSession.title}</h2>
            <p className={styles.preStartDesc}>{selectedSession.description}</p>
            <div className={styles.preStartMeta}>
              <span>{selectedSession.tasks.length} 条练习</span>
              <span>难度: {'⭐'.repeat(selectedSession.difficulty)}</span>
            </div>
            <button className={styles.startBtn} onClick={handleStartPractice}>
              🚀 开始练习！
            </button>
            <p className={styles.preStartHint}>
              提示：输入时请使用英文输入法，按提示逐个输入字符
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ---- Render: Practice mode ----
  const currentTask = selectedSession.tasks[engine.currentTaskIndex];

  return (
    <div className={styles.page}>
      {/* Top bar: back + spacer */}
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={handleBackToSelect}>
          ← 退出
        </button>
        <div className={styles.topBarSpacer} />
      </div>

      <TypingProgress
        currentTaskIndex={engine.currentTaskIndex}
        totalTasks={selectedSession.tasks.length}
        combo={engine.combo}
        maxCombo={engine.maxCombo}
        totalScore={engine.totalScore}
        accuracy={engine.accuracy}
        elapsedSeconds={engine.elapsedSeconds}
      />

      {/* Virtual keyboard */}
      <VirtualKeyboard
        nextExpectedChar={engine.nextExpectedChar}
        taskIndex={engine.currentTaskIndex}
        lastKeyCode={lastKeyCode}
        lastKeyCorrect={lastKeyCorrect}
        muted={localMuted}
        onToggleMute={toggleMute}
      />

      {/* Current target */}
      <div className={styles.targetArea}>
        {currentTask && (
          <TypingTarget
            task={currentTask}
            currentCharIndex={engine.currentCharIndex}
            isError={engine.isError}
          />
        )}
      </div>

      {/* Task counter dots */}
      <div className={styles.taskDots}>
        {selectedSession.tasks.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i < engine.currentTaskIndex
                ? styles.dotDone
                : i === engine.currentTaskIndex
                ? styles.dotActive
                : ''
            }`}
          />
        ))}
      </div>

      {/* Results modal */}
      {showResults && (
        <TypingResults
          record={engine.getRecord()}
          session={selectedSession}
          currentLevel={getLevelByScore(typingStats.totalScore)}
          onContinue={handleBackToSelect}
          onRetry={handleRetry}
        />
      )}

      {/* Mute indicator */}
      {localMuted && (
        <div className={styles.muteIndicator}>🔇 音效已关闭</div>
      )}
    </div>
  );
}