import { MarvelComicRarity } from "../models/comics";

export const useTotalCart = (comics: MarvelComicRarity[]) => {
  return comics.reduce((acc, comic) => {
    const comicTotal = comic.prices.reduce(
      (sum, priceObj) => sum + priceObj.price,
      0
    );
    return acc + comicTotal;
  }, 0);
};
