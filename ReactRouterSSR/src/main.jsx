import CoreWrapper from "@/containers/Root/CoreWrapper";
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter, matchRoutes } from "react-router-dom";
import routes from "@/routes/router.jsx";

const MOUNT_NODE = document.getElementById("app");
if (!MOUNT_NODE) {
  throw new Error("Application container not found");
}

const render = async () => {
  if (MOUNT_NODE.hasChildNodes()) {
    const lazyMatches = matchRoutes(
      routes,
      window.location
    )?.filter((m) => m.route.lazy)

    if(lazyMatches && lazyMatches?.length){
      await Promise.all(
        lazyMatches.map(async (m) => {
          const routeModule = await m.route.lazy()
          Object.assign(m.route, {
            ...routeModule,
            lazy: undefined,
          })
        })
      )
    }
    

    const router = createBrowserRouter(routes)
    console.log('hydration...')
    hydrateRoot(MOUNT_NODE, <RouterProvider router={router} fallbackElement={null} />)
  } else {
    const root = createRoot(MOUNT_NODE);
    console.log("creating...");
    root.render(<CoreWrapper />);
  }
};

render();
