import React from "react";
import { createRoot } from "react-dom/client";

import { HiHome, HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const rootRef = document.querySelector("#root");
const root = createRoot(rootRef);

const App = () => (
  <main>
    <aside>
      <ul>
        <li>
          <HiHome />
        </li>
        <li>
          <HiHeart />
        </li>
        <li>
          <FaShoppingCart />
        </li>
      </ul>
    </aside>

    <div>hello world</div>
  </main>
);

root.render(<App />);
