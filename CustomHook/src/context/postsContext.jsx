import React, { useContext, useMemo, useRef, useEffect, useSyncExternalStore } from "react";
import { createContextForValue, useContextSelector, useContextValue } from "../hooks/contextHooks";

const PostsContext = createContextForValue([]);

export const PostsContextComponent = ({ children, value }) => {
  const contextValue = useContextValue(value)
  return <PostsContext.Provider value={contextValue}>{children}</PostsContext.Provider>;
};

export const usePostsContext = () => {
  return useContextSelector(PostsContext, (state) => (state))
};

export const usePostsData = () => {
  const context = usePostsContext();
  return useMemo(() => {
    return context?.items;
  }, [context]);
};

export const usePostsLabel = () => {
  const context = usePostsContext();
  return useMemo(() => {
    return context?.label;
  }, [context]);
};
