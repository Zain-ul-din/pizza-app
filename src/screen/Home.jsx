import usePizzas from "../hooks/usePizzas";
import PizzaCard from "../components/PizzaCard";
const Home = () => {
  const { pizzas } = usePizzas();

  return (
    <div>
      <h1>Crimes with the Pizza</h1>

      <input placeholder="Search Pizzas" className="search" />

      {/* offer cards */}
      <div className="offer-card-wrapper">
        {new Array(3).fill("").map((_, i) => {
          return (
            <div className="offer-card" key={i}>
              <div>
                <h3>
                  Free Pizza <span>1+1</span>
                </h3>
                <button>Order Now</button>
              </div>
              <img src="public/pizzas/pizza-png.png" width={120} height={120} />
            </div>
          );
        })}
      </div>

      {/* signature */}
      <section className="pizzas-feed">
        <h2>Our Signatures</h2>
        <div>
          {pizzas.map((pizza, i) => {
            return <PizzaCard key={i} pizza={pizza} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
