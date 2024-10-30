import server from "./mock/pizzas";

export async function getPizzas() {
  return server.getPizzas();
}
