import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "@/routes/router.jsx";

const router = createBrowserRouter(Routes)

const CoreWrapper = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default CoreWrapper;
