import React from "react";
import { createRoot } from "react-dom/client";

const rootRef = document.querySelector("#root");
const root = createRoot(rootRef);

root.render(React.createElement("h1", {}, "hello world"));
