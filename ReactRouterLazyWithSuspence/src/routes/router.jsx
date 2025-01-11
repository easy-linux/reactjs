import { getPosts, getTodos } from "@/api";
import React, { Suspense, lazy } from "react";
import { appRoutes } from "./allRoutes";
import Loader from "@/components/Loader";
import { Await, useLoaderData } from "react-router";

const LazyLoader = () => {
    const { component } = useLoaderData()
    return (<Suspense fallback={<Loader>Loading component</Loader>}>
      <Await resolve={component}>
        {(ResolvedComponent) => (<ResolvedComponent />)}
      </Await>
    </Suspense>)
}

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
        path: appRoutes.Posts.index,
        lazy: async () => {
          // const { Posts } = await import("@/pages/Posts")
          return {
            element: <LazyLoader />,
            loader: ({params}) => {
              return {
                component: lazy(() => import('@/pages/Posts')),
                data: getPosts(),
              }
              // return getPosts();
            },
          }
        },
        children: [{
          path: appRoutes.Posts.postId,
          lazy: async () => {
            //const { PostPage } = await import("@/pages/Post")
            return {
              element: <LazyLoader />,
              loader: ({params}) => {
                const { id } = params
                 return {
                  component: lazy(() => import('@/pages/Post')),
                  data: getPosts(id),
                 }

                // return getPosts(id);
              },
            }
          },
        }],
      },
      {
        path: appRoutes.Todos,
        lazy: async () => {
          // const { Todos } = await import("@/pages/Todos")
          return {
            element: <LazyLoader />,
            loader: ({params}) => {
              const { id } = params
              return {
                component: lazy(() => import('@/pages/Todos')),
                data: getTodos(id),
              }
              // return getPosts();
            },
          }
        },
      }
    ]
  }
]

export default Routes;
