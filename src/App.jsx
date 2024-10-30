import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./screen/Home";

const rootRef = document.querySelector("#root");
const root = createRoot(rootRef);

const App = () => <Home />;

root.render(<App />);
