import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async (page) => {
    const response = await axios.get(
      `
https://66b79fbf7f7b1c6d8f1c5db1.mockapi.io/adverts?page=${page}&limit=4`
    );
    return response.data;
  }
);

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    currentPage: 1,
  },
  reducers: {
    loadMore: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.status = "loading";
      })
      // .addCase(fetchAdverts.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   const newItems = action.payload.filter(
      //     (advert) => !state.items.some((item) => item.id === advert.id)
      //   );
      //   state.items = [...state.items, ...newItems];
      // })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadMore } = advertsSlice.actions;

export default advertsSlice.reducer;
