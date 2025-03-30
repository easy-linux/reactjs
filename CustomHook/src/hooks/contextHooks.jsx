import React, { useContext, useRef, useMemo, useSyncExternalStore, useEffect } from "react";

export const createContextForValue = (value) =>
  React.createContext({
    value,
    subscribe: (l) => {},
    notify: () => {},
  });

export const useContextSelector = (ComponentContext, selector) => {
  const store = useContext(ComponentContext);
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.value),
    () => selector(store.value)
  );
};

export const useContextValue = (value) => {
  const storeRef = useRef();

  storeRef.current = useMemo(() => {
    const listeners = new Set();
    return {
      value,
      subscribe: (l) => {
        listeners.add(l);
        return () => listeners.delete(l);
      },
      notify: () => listeners.forEach((l) => l()),
    };
  }, []);

  useEffect(() => {
    if (!Object.is(storeRef.current.value, value)) {
      storeRef.current.value = value;
      storeRef.current.notify();
    }
  }, [value]);
  return storeRef.current;
};
