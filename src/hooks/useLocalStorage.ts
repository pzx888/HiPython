// ============================================================
// HiPython — useLocalStorage hook
// ============================================================

import { useState, useCallback } from 'react';

/**
 * Persistent state backed by localStorage.
 * Key is namespaced under `hipython:`.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const storageKey = `hipython:${key}`;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(storageKey);
      if (item) {
        const parsed = JSON.parse(item) as T;
        // Merge with initialValue to fill in any missing fields from schema updates
        if (typeof parsed === 'object' && parsed !== null && typeof initialValue === 'object' && initialValue !== null) {
          return { ...initialValue, ...parsed };
        }
        return parsed;
      }
      return initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue =
          typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
        try {
          window.localStorage.setItem(storageKey, JSON.stringify(nextValue));
        } catch {
          // Storage full or unavailable — silently fail
        }
        return nextValue;
      });
    },
    [storageKey],
  );

  return [storedValue, setValue];
}