import { pizzas } from "./db";

const server = {
  getPizzas: async () => {
    return pizzas;
  },
  getPizzaById: async (id) => {
    return pizzas.filter((pizza) => pizza.id === id)[0];
  },
};

export default server;
