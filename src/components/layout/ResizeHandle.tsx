// ============================================================
// HiPython — ResizeHandle (draggable column divider)
// ============================================================

import { useCallback, useRef, useEffect } from 'react';
import styles from './ResizeHandle.module.css';

interface ResizeHandleProps {
  onResize: (delta: number) => void;
  disabled?: boolean;
}

export function ResizeHandle({ onResize, disabled }: ResizeHandleProps) {
  const draggingRef = useRef(false);
  const startXRef = useRef(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;
      e.preventDefault();
      draggingRef.current = true;
      startXRef.current = e.clientX;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    },
    [disabled],
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      const delta = e.clientX - startXRef.current;
      startXRef.current = e.clientX;
      onResize(delta);
    };

    const handleMouseUp = () => {
      if (draggingRef.current) {
        draggingRef.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onResize]);

  return (
    <div
      className={`${styles.handle} ${disabled ? styles.disabled : ''}`}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.grip} />
    </div>
  );
}
