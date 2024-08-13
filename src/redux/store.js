import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./advertsSlice.js";
import favoritesReducer from "./favoritesSlice.js";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
});
