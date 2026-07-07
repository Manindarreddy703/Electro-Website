"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * A typed localStorage-backed state hook. Reads happen only on the client
 * (after mount) to avoid hydration mismatches, and every write is guarded
 * with try/catch since localStorage can throw in private browsing modes.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch (error) {
      console.error(`useLocalStorage: failed to read key "${key}"`, error);
    } finally {
      setIsHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(nextValue));
        } catch (error) {
          console.error(`useLocalStorage: failed to write key "${key}"`, error);
        }
        return nextValue;
      });
    },
    [key],
  );

  return [storedValue, setValue, isHydrated];
}
