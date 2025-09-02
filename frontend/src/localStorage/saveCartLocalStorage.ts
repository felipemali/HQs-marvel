import { MarvelComic } from "./type";

export const saveCartToLocalStorage = (cart: MarvelComic[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
