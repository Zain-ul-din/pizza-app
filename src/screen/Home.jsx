import { HiHome, HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
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
                <img
                  src="public/pizzas/pizza-png.png"
                  width={120}
                  height={120}
                />
              </div>
            );
          })}
        </div>

        {/* signature */}
        <section className="pizzas-feed">
          <h2>Our Signatures</h2>
          <div>
            {new Array(10).fill("").map((_, i) => {
              return (
                <div className="pizza-card" key={i}>
                  <img
                    src="/public/pizzas/napolitana.webp"
                    width={200}
                    height={200}
                  />

                  <div>
                    <h5>The Barbecue Chicken Pizza</h5>
                    <p className="text-sm">
                      Barbecued Chicken, Red Peppers, Green Peppers, Tomatoes,
                      Red Onions, Barbecue Sauce
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
