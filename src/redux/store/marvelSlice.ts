import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarvelAPIResponse, MarvelHq } from "../../models/Hqs";

type MarvelState = {
  hqs: MarvelAPIResponse | null;
  cart: MarvelHq[];
};

const initialState: MarvelState = {
  hqs: null,
  cart: [],
};
const marvelSlice = createSlice({
  name: "marvel",
  initialState,
  reducers: {
    setHqs(state, action: PayloadAction<MarvelAPIResponse>) {
      state.hqs = action.payload;
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

export const { setHqs, addToCart, removeHqCart, clearCart } =
  marvelSlice.actions;
export default marvelSlice.reducer;
