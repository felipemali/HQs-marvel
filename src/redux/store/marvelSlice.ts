import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarvelAPIResponse, MarvelCharacter } from "../../models/Characters";

type MarvelState = {
  characters: MarvelAPIResponse | null;
  cart: MarvelCharacter[];
};

const initialState: MarvelState = {
  characters: null,
  cart: [],
};
const marvelSlice = createSlice({
  name: "marvel",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<MarvelAPIResponse>) {
      state.characters = action.payload;
    },
    addToCart(state, action: PayloadAction<MarvelCharacter>) {
      const exists = state.cart.find(
        (character) => character.id === action.payload.id
      );
      if (!exists) state.cart.push(action.payload);
    },
    removeCharacterCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (character) => character.id !== action.payload
      );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { setCharacters, addToCart, removeCharacterCart, clearCart } =
  marvelSlice.actions;
export default marvelSlice.reducer;
