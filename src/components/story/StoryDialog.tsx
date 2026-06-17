// ============================================================
// HiPython — StoryDialog component (story narrative bubbles)
// ============================================================

import { useState, useEffect } from 'react';
import styles from './StoryDialog.module.css';

interface StoryDialogProps {
  /** Character emoji */
  character: string;
  /** Character name */
  characterName: string;
  /** Dialogue text (supports newlines) */
  text: string;
  /** Auto-play typing speed in ms per character (0 = show all at once) */
  speed?: number;
  /** Called when user clicks "continue" or text finishes */
  onContinue?: () => void;
}

/** Typing-effect dialogue bubble */
export function StoryDialog({
  character,
  characterName,
  text,
  speed = 0,
  onContinue,
}: StoryDialogProps) {
  const [displayed, setDisplayed] = useState(speed === 0 ? text : '');
  const [done, setDone] = useState(speed === 0);

  useEffect(() => {
    if (speed === 0) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  const handleClick = () => {
    if (!done) {
      // Skip typing effect — show all at once
      setDisplayed(text);
      setDone(true);
    } else {
      onContinue?.();
    }
  };

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogBubble} onClick={handleClick}>
        <div className={styles.characterAvatar}>
          <span className={styles.avatarEmoji}>{character}</span>
          <span className={styles.characterName}>{characterName}</span>
        </div>
        <div className={styles.dialogText}>
          {displayed.split('\n').map((line, i) => (
            <p key={i}>{line || ' '}</p>
          ))}
          {!done && <span className={styles.cursor}>|</span>}
        </div>
        {done && (
          <div className={styles.continueHint}>
            点击继续 ▶
          </div>
        )}
      </div>
    </div>
  );
}