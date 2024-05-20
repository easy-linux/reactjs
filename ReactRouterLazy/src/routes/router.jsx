import { getPosts, getTodos } from "@/api";
import React from "react";
import { appRoutes } from "./allRoutes";

const Routes = [
  {
    lazy: async () => {
      const { TopApp} = await import("@/containers/App")
      return {
        Component: TopApp
      }
    },
    children: [
      {
        path: appRoutes.App,
        lazy: async () => {
          const { App } = await import("@/pages/App")
          return {
            element: <App />
          }
        },
      },
      {
        path: appRoutes.Posts,
        lazy: async () => {
          const { Posts } = await import("@/pages/Posts")
          return {
            element: <Posts />,
            loader: ({params}) => {
              const { id } = params
              return getPosts(id);
            },
          }
        },
        
      },
      {
        path: appRoutes.Todos,
        lazy: async () => {
          const { Todos } = await import("@/pages/Todos")
          return {
            element: <Todos />,
            loader: ({params}) => {
              const { id } = params
              return getTodos(id);
            },
          }
        },
      }
    ]
  }
]

export default Routes;
