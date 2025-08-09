import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarvelComic, MarvelComicsAPIResponse } from "../../models/comicks";

type MarvelState = {
  comics: MarvelComicsAPIResponse | null;
  cart: MarvelComic[];
  search: string | undefined;
};

const initialState: MarvelState = {
  comics: null,
  cart: [],
  search: "",
};
const marvelSliceComics = createSlice({
  name: "marvel",
  initialState,
  reducers: {
    setComics(state, action: PayloadAction<MarvelComicsAPIResponse | null>) {
      state.comics = action.payload;
    },
    setSearch(state, action: PayloadAction<string | undefined>) {
      state.search = action.payload;
    },
    addToCart(state, action: PayloadAction<MarvelComic>) {
      const exists = state.cart.find(
        (character) => character.id === action.payload.id
      );
      if (!exists) state.cart.push(action.payload);
    },
    removeComicCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (character) => character.id !== action.payload
      );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { setComics, setSearch, addToCart, removeComicCart, clearCart } =
  marvelSliceComics.actions;
export default marvelSliceComics.reducer;
