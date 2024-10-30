import { create } from "zustand";

const LOCAL_STORAGE_ID = "cart";

export const useCart = create((set) => ({
  pizzas: {},
  fetchCart: () => {
    const localStorageCartState = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_ID) || `{ "pizzas": {} }`,
    );
    set(() => ({ pizzas: localStorageCartState.pizzas }));
  },
  addToCart: (pizza) => {
    set((state) => {
      const updatedState = { pizzas: { ...state.pizzas, [pizza.uid]: pizza } };
      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(updatedState));
      return updatedState;
    });
  },
  removeFromCart: (uid) => {
    set((state) => {
      const updatedState = { pizzas: state.pizzas };
      delete updatedState.pizzas[uid];
      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(updatedState));
      return updatedState;
    });
  },
}));
