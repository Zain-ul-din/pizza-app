import server from "./mock/pizzas";

export async function getPizza(id) {
  return server.getPizzaById(id);
}
