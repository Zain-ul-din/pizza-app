import { FaExternalLinkAlt, FaPizzaSlice } from "react-icons/fa";
import { useCart } from "../stores/cart";
import { Link } from "@tanstack/react-router";
import { TbTrash } from "react-icons/tb";
import { useMemo } from "react";

export default function Cart() {
  const { pizzas, removeFromCart } = useCart();

  const total = Object.values(pizzas).reduce(
    (acc, curr) => acc + curr.sizes[curr.size] * curr.qt,
    0,
  );

  return (
    <div>
      <h1 style={{ color: "var(--primary)", marginBottom: "2rem" }}>
        Your Cart
      </h1>
      {Object.values(pizzas).length === 0 && <p> Cart is empty!</p>}
      <section className="cart-wrapper">
        <ul className="cart">
          {Object.values(pizzas).map((pizza, i) => {
            return (
              <li key={i}>
                <img src={pizza.image} width={100} height={100} />
                <div>
                  <Link to={`/pizza/${pizza.id}`}>
                    <h4>
                      {pizza.name} ({pizza.size})
                      <FaExternalLinkAlt
                        style={{
                          width: "1rem",
                          height: "1rem",
                          marginLeft: "0.4rem",
                        }}
                      />
                    </h4>
                  </Link>
                  <p className="text-sm">{pizza.description}</p>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "auto",
                      marginBottom: "0.3rem",
                      gap: "1rem",
                    }}
                  >
                    <h3 style={{ color: "var(--primary)" }}>
                      <FaPizzaSlice
                        style={{
                          width: "1rem",
                          height: "1rem",
                          marginRight: "0.3rem",
                        }}
                      />
                      {pizza.qt}
                    </h3>
                    <h3 style={{ color: "var(--secondary)" }}>
                      ${pizza.sizes[pizza.size] * pizza.qt}
                    </h3>
                    <button
                      style={{
                        padding: ".1rem 0.2rem",
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                      onClick={() => {
                        removeFromCart(pizza.uid);
                      }}
                    >
                      <TbTrash />
                      Remove
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div>
          <h3
            style={{
              color: "var(--secondary)",
            }}
          >
            Total - ${total}
          </h3>

          <Link to={"https://www.stripe.com"}>
            <button style={{ marginTop: "1rem" }}>Pay on stripe</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
