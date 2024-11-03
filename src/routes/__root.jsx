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
      <div className="overlay">
        {["200ms", "250ms", "300ms", "350ms", "400ms", "450ms"].map((v, i) => {
          return <div key={i} style={{ "--delay": v }}></div>;
        })}
      </div>

      <main>
        {/* overlay */}
        <Header />
        <Outlet />
      </main>
      {/* <ReactQueryDevtools /> */}
      {/* <TanStackRouterDevtools /> */}
    </>
  );
};
