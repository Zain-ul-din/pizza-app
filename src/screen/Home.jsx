import usePizzas from "../hooks/usePizzas";
import PizzaCard from "../components/PizzaCard";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

const Home = () => {
  const { pizzas } = usePizzas();

  const [query, setQuery] = useState("");

  const filterPizzas = useMemo(
    () =>
      pizzas.filter(
        (pizza) =>
          pizza.name.toLowerCase().includes(query.toLowerCase()) ||
          pizza.description.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, pizzas],
  );

  return (
    <div>
      <h1>Crimes with the Pizza</h1>

      <input
        placeholder="Search Pizzas"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search"
      />

      {/* offer cards */}
      <div className="offer-card-wrapper">
        {new Array(4).fill("").map((_, i) => {
          return (
            // TODO: make it real
            <Link to={`/pizza/${"ckn_alfredo"}`} key={i}>
              <div className="offer-card">
                <div>
                  <h3>
                    Free Pizza{" "}
                    <span style={{ color: "var(--primary)" }}>1+1</span>
                  </h3>
                  <button>Order Now</button>
                </div>
                <img
                  src="public/pizzas/pizza-png.png"
                  width={120}
                  height={120}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* signature */}
      <section className="pizzas-feed">
        <h2>Our Signatures</h2>

        <p>{filterPizzas.length === 0 && "No results found"}</p>
        <div>
          {filterPizzas.map((pizza, i) => {
            return <PizzaCard key={i} pizza={pizza} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
