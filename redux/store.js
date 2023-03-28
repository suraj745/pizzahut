import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import singleProduct from "./singleProduct";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    single: singleProduct,
    cart: cartSlice,
  },
});

export default store;
