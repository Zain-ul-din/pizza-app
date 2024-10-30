import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./screen/Home";
import Details from "./screen/Details";

const rootRef = document.querySelector("#root");
const root = createRoot(rootRef);

const App = () => <Details />;

{
  /* <Home />; */
}

root.render(<App />);
