import { Link } from "@tanstack/react-router";
import PizzaCard from "../components/PizzaCard";
import usePizzas from "../hooks/usePizzas";

export default function Favorites() {
  const { pizzas } = usePizzas();
  return (
    <div>
      <h1
        style={{
          color: "var(--primary)",
          marginBottom: "1.5rem",
        }}
      >
        Favorites
      </h1>

      <section className="pizzas-feed">
        <div>
          {pizzas.map((pizza, i) => {
            return <PizzaCard key={i} pizza={pizza} />;
          })}
        </div>
      </section>
    </div>
  );
}
