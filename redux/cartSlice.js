import { createSlice } from "@reduxjs/toolkit";
import { get, values } from "lodash";
import { toast } from "react-hot-toast";
import * as _ from "lodash";
// import { getCartProduct } from "./pizzApi";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  length: 0,
  total: 0,
  loading: false,
};
const cartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const getCart = JSON.parse(localStorage.getItem("cart"));
      const exist = _.find(getCart, { id: action.payload.id });

      state.cart.push({
        ...action.payload,
      });

      localStorage.setItem("cart", JSON.stringify(state.cart));

      toast.success(`${action.payload.name} is added `);
    },

    clearCart: (state, action) => {
      if (state.cart.length > 1) {
        toast.success("cart is cleared");
      } else {
        toast.error("cart is already empty");
      }
      localStorage.setItem("cart", (state.cart.length = 0));
    },
  },
});

export const { addToCart, clearCart, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
