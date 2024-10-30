import { useState, useEffect } from "react";
import { getPizzas } from "../api/get-pizzas";

const usePizzas = () => {
  const [loading, setLoading] = useState(false);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      setLoading(true);
      const pizzas = await getPizzas();
      setPizzas(pizzas);
    };

    fetchPizzas();
  }, []);

  return {
    loading,
    pizzas,
  };
};

export default usePizzas;
