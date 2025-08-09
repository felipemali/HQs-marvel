import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarvelAPIResponse, MarvelHq } from "../../models/Hqs";
import { MarvelComicsAPIResponse } from "../../models/comicks";

type MarvelState = {
  hqs: MarvelAPIResponse | null;
  cart: MarvelHq[];
  search: string | undefined;
};

const initialState: MarvelState = {
  hqs: null,
  cart: [],
  search: "",
};

const marvelSlice = createSlice({
  name: "marvel",
  initialState,
  reducers: {
    setHqs(state, action: PayloadAction<MarvelAPIResponse | null>) {
      state.hqs = action.payload;
    },
    setSearch(state, action: PayloadAction<string | undefined>) {
      state.search = action.payload;
    },
    addToCart(state, action: PayloadAction<MarvelHq>) {
      const exists = state.cart.find(
        (character) => character.id === action.payload.id
      );
      if (!exists) state.cart.push(action.payload);
    },
    removeHqCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (character) => character.id !== action.payload
      );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { setHqs, setSearch, addToCart, removeHqCart, clearCart } =
  marvelSlice.actions;
export default marvelSlice.reducer;
