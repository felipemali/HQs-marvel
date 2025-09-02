import { MarvelComic } from "./type";

export const getCartFromLocalStorage = (): MarvelComic[] => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};
