import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  MarvelComic,
  MarvelComicRarity,
  MarvelComicsAPIResponse,
} from "../../models/comics";

type MarvelState = {
  comics: MarvelComicsAPIResponse | null;
  cart: MarvelComicRarity[];
  search: string | undefined;
  currentPage: number;
};
const initialState: MarvelState = {
  comics: null,
  cart: [],
  search: "",
  currentPage: 1,
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
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    addToCart(state, action: PayloadAction<MarvelComicRarity>) {
      const exists = state.cart.find((comic) => comic.id === action.payload.id);
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

export const {
  setComics,
  setSearch,
  setCurrentPage,
  addToCart,
  removeComicCart,
  clearCart,
} = marvelSliceComics.actions;
export default marvelSliceComics.reducer;
