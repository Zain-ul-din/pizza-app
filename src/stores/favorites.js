import { create } from "zustand";

const LOCAL_STORAGE_ID = "favorites";

export const useFavorites = create((set) => ({
  pizzas: {},
  fetchFav: () => {
    const localStorageCartState = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_ID) || `{ "pizzas": {} }`,
    );
    set(() => ({ pizzas: localStorageCartState.pizzas }));
  },
  toggleFav: (pizza) => {
    set((state) => {
      const updatedState = { pizzas: { ...state.pizzas, [pizza.id]: pizza } };
      if (state.pizzas[pizza.id] != undefined)
        delete updatedState.pizzas[pizza.id];
      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(updatedState));
      return updatedState;
    });
  },
}));
