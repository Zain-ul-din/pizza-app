import { HiHome, HiHeart } from "react-icons/hi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPizza } from "../api/get-pizza";
import { useCart } from "../stores/cart";
import { useFavorites } from "../stores/favorites";

const Details = ({ id }) => {
  const [qt, setQt] = useState(1);
  const [pizzaSize, setPizzaSize] = useState("S");

  const { isLoading, data } = useQuery({
    queryKey: ["pizza", id],
    queryFn: () => getPizza(id),
    staleTime: 1000 * 60 * 60,
  });

  const { pizzas, addToCart } = useCart();

  const { pizzas: favPizzas, toggleFav } = useFavorites();

  const pizzaUid = useMemo(
    () => (!data ? "" : `${data.id} (${pizzaSize})`),
    [data, pizzaSize],
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <div>
      <section className="pizza-details">
        <h2>{data.name}</h2>
        <div>
          <img src={data.image} alt={data.name} width={500} height={500} />
          <div>
            <p>{data.description}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addToCart({
                  ...data,
                  uid: pizzaUid,
                  size: pizzaSize,
                  qt,
                });
              }}
            >
              <div style={{ border: "none", display: "flex", paddingLeft: 0 }}>
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
              <span
                style={{ display: "flex", gap: ".5rem", marginTop: "1rem" }}
              >
                <button
                  class="love-red-btn"
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    alignItems: "center",
                    ...(!favPizzas[data.id]
                      ? { backgroundColor: "inherit" }
                      : {}),
                  }}
                  type="button"
                  onClick={() => toggleFav(data)}
                >
                  <FaHeart />
                </button>
                <button
                  type="submit"
                  style={{ display: "flex", marginTop: "1rem" }}
                >
                  {pizzas[pizzaUid] && (
                    <span
                      style={{
                        color: "var(--secondary)",
                        marginRight: "0.5rem",
                        fontWeight: "bolder",
                      }}
                    >
                      ✔{" "}
                    </span>
                  )}
                  Add to cart - ${parseInt(data.sizes[pizzaSize]) * qt}
                </button>
              </span>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
