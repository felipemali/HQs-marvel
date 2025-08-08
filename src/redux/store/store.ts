import { configureStore } from "@reduxjs/toolkit";
import marvelReducer from "./marvelSlice";

export const store = configureStore({
  reducer: {
    marvel: marvelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
