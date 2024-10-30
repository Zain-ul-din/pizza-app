import { createLazyFileRoute } from "@tanstack/react-router";
import Favorites from "../screen/Favorites";

export const Route = createLazyFileRoute("/favorites")({
  component: () => <Favorites />,
});
