import { useState, useEffect } from "react";

const usePizzas = () => {
  const [loading, setLoading] = useState(false);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      setLoading(true);
      const res = await fetch("/api/pizzas");
      const pizzas = await res.json();
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
