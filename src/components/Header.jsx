import { HiHome, HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
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
    </>
  );
}
