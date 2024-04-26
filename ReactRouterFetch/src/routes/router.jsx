import { getPosts, getTodos } from "@/api";
import React, { lazy, Suspense } from "react";

const loadable = (factory) => () => {
  const Component = lazy(factory);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component />
    </Suspense>
  );
};

const TopApp = loadable(() => import("@/containers/App"));
const App = loadable(() => import("@/pages/App"));
const Posts = loadable(() => import("@/pages/Posts"));
const Todos = loadable(() => import("@/pages/Todos"));

const Routes = [
  {
    Component: TopApp,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/posts/:id?',
        element: <Posts />,
        loader: ({params}) => {
          const { id } = params
          return getPosts(id);
        },
      },
      {
        path: '/todos/:id?',
        element: <Todos />,
        loader: ({params}) => {
          const { id } = params
          return getTodos(id);
        },
      }
    ]
  }
]

export default Routes;
