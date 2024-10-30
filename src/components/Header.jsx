import { HiHome, HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useRouterState } from "@tanstack/react-router";

export default function Header() {
  const router = useRouterState();
  const pathname = router.location.pathname;

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
            <Link to={"/cart"}>
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
