import React, { useContext, useMemo, useRef, useEffect, useSyncExternalStore } from "react";
import { createContextForValue, useContextValue, useContextSelector } from "../hooks/contextHooks";

const PostContext = createContextForValue([]);

export const PostContextComponent = ({ children, value }) => {
  const contextValue = useContextValue(value)
  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
  return useContextSelector(PostContext, (state) => (state))
};

export const usePostTitle = () => {
  const context = usePostContext();
  return useMemo(() => {
    return context?.title;
  }, [context]);
};

export const usePostText = () => {
  const context = usePostContext();
  return useMemo(() => {
    return context?.body;
  }, [context]);
};
