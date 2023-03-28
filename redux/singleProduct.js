import { createSlice } from "@reduxjs/toolkit";
import { getSingleProduct } from "./pizzApi";
import * as _ from "lodash";

export const initialState = {
  single: [],
  loading: false,
};

const singleSlice = createSlice({
  name: "singlePizzaDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSingleProduct.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(getSingleProduct.fulfilled, (state, action) => {
        state.single = action.payload;
        state.loading = false;
      });
  },
});

export default singleSlice.reducer;
