// src/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  campers: [],
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  currentPage: 1,
  modalCamper: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setCampers(state, action) {
      state.campers = action.payload;
    },
    loadMoreCampers(state, action) {
      state.campers = [...state.campers, ...action.payload];
      state.currentPage += 1;
    },
    toggleFavorite(state, action) {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index > -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setModalCamper(state, action) {
      state.modalCamper = action.payload;
    },
  },
});

export const { setCampers, loadMoreCampers, toggleFavorite, setModalCamper } =
  campersSlice.actions;

const store = configureStore({
  reducer: campersSlice.reducer,
});

export default store;
