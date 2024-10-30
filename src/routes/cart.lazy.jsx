import { createLazyFileRoute } from "@tanstack/react-router";
import Cart from "../screen/Cart";

export const Route = createLazyFileRoute("/cart")({
  component: () => <Cart />,
});
