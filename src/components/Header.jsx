import { HiHome, HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCart } from "../stores/cart";

export default function Header() {
  const router = useRouterState();
  const pathname = router.location.pathname;
  const { pizzas } = useCart();

  return (
    <>
      <aside>
        <ul>
          <li>
            <Link to={"/"}>
              <HiHome className={pathname === "/" ? "active-icon" : ""} />
            </Link>
          </li>
          <li>
            <Link to={"/favorites"}>
              <HiHeart
                className={pathname === "/favorites" ? "active-icon" : ""}
              />
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="cart-icon">
              {Object.keys(pizzas).length > 0 && (
                <span className="cart-count">
                  {Object.keys(pizzas).length > 10
                    ? "10+"
                    : Object.keys(pizzas).length}
                </span>
              )}
              <FaShoppingCart
                className={pathname === "/cart" ? "active-icon" : ""}
              />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
