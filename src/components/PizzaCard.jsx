import { Link } from "@tanstack/react-router";

export default function PizzaCard({ pizza, loadLazy }) {
  return (
    <Link to={`/pizza/${pizza.id}`} className="pizza-card">
      <img
        src={pizza.image}
        width={200}
        height={200}
        alt={pizza.name}
        loading={loadLazy ? "lazy" : "eager"}
      />
      <div>
        <h5>{pizza.name}</h5>
        <p className="text-sm">{pizza.description}</p>
        <h4
          style={{
            marginTop: "auto",
            color: "var(--primary)",
          }}
        >
          $ {pizza.sizes["S"]}
        </h4>
      </div>
    </Link>
  );
}
