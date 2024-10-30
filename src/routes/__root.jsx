import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/Header";
import { useCart } from "../stores/cart";
import { useEffect } from "react";
import { useFavorites } from "../stores/favorites";

export const Route = createRootRoute({
  component: () => <Component />,
});

const Component = () => {
  const { fetchCart } = useCart();
  const { fetchFav } = useFavorites();

  useEffect(() => {
    fetchCart();
    fetchFav();
  }, []);

  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      {/* <ReactQueryDevtools /> */}
      {/* <TanStackRouterDevtools /> */}
    </>
  );
};
