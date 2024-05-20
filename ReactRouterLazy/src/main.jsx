import CoreWrapper from "@/containers/Root/CoreWrapper";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

const MOUNT_NODE = document.getElementById("app");
if (!MOUNT_NODE) {
  throw new Error("Application container not found");
}

const render = () => {
    const root  = createRoot(MOUNT_NODE)
    root.render(<CoreWrapper/>)
};

render();
