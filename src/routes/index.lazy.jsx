import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "../screen/Home";

export const Route = createLazyFileRoute("/")({
  component: Home,
});
