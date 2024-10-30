import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
});
