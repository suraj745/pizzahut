import { createSlice } from "@reduxjs/toolkit";
import { getAllMenu, fetchByCategory, fetchBySort } from "./pizzApi";
import * as _ from "lodash";

export const initialState = {
  menu: [],

  loading: false,
};

const menuSlice = createSlice({
  name: "pizza_menu",
  initialState,
  extraReducers: (builder) => {
    // menu
    builder.addCase(getAllMenu.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getAllMenu.fulfilled, (state, action) => {
        state.menu = [...action.payload];
        state.loading = false;
      });

    // category

    builder.addCase(fetchByCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByCategory.fulfilled, (state, action) => {
      state.menu = action.payload;
      state.loading = false;
    });

    // sort;

    builder.addCase(fetchBySort.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBySort.fulfilled, (state, action) => {
      state.menu = action.payload;
      state.loading = false;
    });
  },
});

export default menuSlice.reducer;
