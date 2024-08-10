// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { advertsSlice } from "./advertsSlice.js";
import { favoritesSlice } from "./favoritesSlice.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  adverts: advertsSlice.reducer,
  favorites: favoritesSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
