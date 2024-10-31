import { HiHome, HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCart } from "../stores/cart";

const links = [
  { href: "/", icon: (props) => <HiHome {...props} /> },
  { href: "/favorites", icon: (props) => <HiHeart {...props} /> },
  {
    href: "/cart",
    icon: (props) => <FaShoppingCart {...props} />,
    className: "cart-icon",
  },
];

export default function Header() {
  const router = useRouterState();
  const pathname = router.location.pathname;
  const { pizzas } = useCart();

  return (
    <>
      <aside>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                {pathname === link.href && <RightSideBorder />}
                <Link to={link.href} className={link.className}>
                  {link.href === "/cart" && (
                    <>
                      {Object.keys(pizzas).length > 0 && (
                        <span className="cart-count">
                          {Object.keys(pizzas).length > 10
                            ? "10+"
                            : Object.keys(pizzas).length}
                        </span>
                      )}
                    </>
                  )}
                  {link.icon({
                    className: pathname === link.href ? "active-icon" : "",
                  })}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

const RightSideBorder = () => {
  return (
    <svg
      width="9"
      height="64"
      viewBox="0 0 9 64"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-svg"
    >
      <path d="M-2.64842e-05 61.982C-2.73021e-05 64.2205 -2.8595e-05 64.5383 -3.05176e-05 62C-3.05176e-05 61.994 -2.91773e-05 61.988 -2.64842e-05 61.982C-2.31245e-05 52.7865 -2.77805e-05 11.1798 -2.97298e-05 2.00794C-3.0255e-05 2.00529 -3.05176e-05 2.00264 -3.05176e-05 1.99999C-3.05176e-05 -0.534521 -3.02037e-05 -0.221455 -2.97298e-05 2.00794C0.00304393 17.5014 9 21.5018 9 32C9 42.4959 0.0069261 46.4969 -2.64842e-05 61.982Z"></path>
      <path d="M-2.97298e-05 2.00794C-3.02037e-05 -0.221455 -3.05176e-05 -0.534521 -3.05176e-05 1.99999C-3.05176e-05 2.00264 -3.0255e-05 2.00529 -2.97298e-05 2.00794Z"></path>
    </svg>
  );
};
