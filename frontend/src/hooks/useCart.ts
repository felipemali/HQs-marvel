import { useEffect, useState } from "react";
import { MarvelComic } from "../models/comicsLocalStorage";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<MarvelComic[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    const totalPriceHQ = localStorage.getItem("totalPrice");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
    if (totalPriceHQ) {
      setTotalPrice(JSON.parse(totalPriceHQ));
    }
  }, []);

  //calculando o valor total do carrinho
  useEffect(() => {
    const total = cartItems.reduce((acc, comic) => {
      const sumPrices = comic.prices.reduce(
        (sum, priceObj) => sum + priceObj.price,
        0
      );
      return acc + sumPrices;
    }, 0);
    setTotalPrice(total);
    localStorage.setItem("totalPrice", JSON.stringify(total));
  }, [cartItems]);

  const add = (comic: MarvelComic) => {
    const updated = [...cartItems, comic];
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const remove = (id: number) => {
    const updated = cartItems.filter((c) => c.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return { cartItems, totalPrice, setCartItems, add, remove };
};
