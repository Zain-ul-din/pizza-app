import PizzaCard from "../components/PizzaCard";
import { useFavorites } from "../stores/favorites";

export default function Favorites() {
  const { pizzas } = useFavorites();

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

      <p>
        {Object.values(pizzas).length === 0 && (
          <>You don't have any favorites yet</>
        )}
      </p>
      <section className="pizzas-feed">
        <div>
          {Object.values(pizzas).map((pizza, i) => {
            return <PizzaCard key={i} pizza={pizza} />;
          })}
        </div>
      </section>
    </div>
  );
}
