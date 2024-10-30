import { HiHome, HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Details = () => {
  const [qt, setQt] = useState(1);
  const [pizzaSize, setPizzaSize] = useState("S");

  return (
    <main>
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
      <div>
        <section className="pizza-details">
          <h2>The Barbecue Chicken Pizza</h2>
          <div>
            <img
              src="/public/pizzas/bbq_ckn.webp"
              alt=""
              width={500}
              height={500}
            />
            <div>
              <p>
                Barbecued Chicken, Red Peppers, Green Peppers, Tomatoes, Red
                Onions, Barbecue Sauce
              </p>
              <form>
                <div
                  style={{ border: "none", display: "flex", paddingLeft: 0 }}
                >
                  <span>
                    <input
                      onChange={(e) => setPizzaSize(e.target.value)}
                      checked={pizzaSize === "S"}
                      type="radio"
                      name="pizza-size"
                      value="S"
                      id="pizza-s"
                    />
                    <label
                      htmlFor="pizza-s"
                      style={{ paddingLeft: 0, marginLeft: 0 }}
                    >
                      Small
                    </label>
                  </span>
                  <span>
                    <input
                      onChange={(e) => setPizzaSize(e.target.value)}
                      checked={pizzaSize === "M"}
                      type="radio"
                      name="pizza-size"
                      value="M"
                      id="pizza-m"
                    />
                    <label htmlFor="pizza-m">Medium</label>
                  </span>
                  <span>
                    <input
                      onChange={(e) => setPizzaSize(e.target.value)}
                      checked={pizzaSize === "L"}
                      type="radio"
                      name="pizza-size"
                      value="L"
                      id="pizza-l"
                    />
                    <label htmlFor="pizza-l">Large</label>
                  </span>
                </div>
                <label>Choose Quantity: </label>
                <span className="stepper">
                  <button
                    type="button"
                    onClick={() => {
                      setQt((v) => (v > 1 ? v - 1 : v));
                    }}
                    disabled={qt == 1}
                  >
                    -
                  </button>
                  <div>{qt.toString().padStart(2, " ")}</div>
                  <button
                    type="button"
                    onClick={() => {
                      setQt((v) => (v < 10 ? v + 1 : v));
                    }}
                    disabled={qt == 10}
                  >
                    +
                  </button>
                </span>
                <button
                  type="submit"
                  style={{ display: "flex", marginTop: "1rem" }}
                >
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
