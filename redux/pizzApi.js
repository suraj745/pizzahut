import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "../env";
import { toast } from "react-hot-toast";

const getAllMenu = createAsyncThunk("menu/getAllMenu", async () => {
  const res = await axios.get(`${env.URL}home`);
  return res.data;
});

const getSingleProduct = createAsyncThunk(
  "menu/getSinlgeProduct",
  async (id, thunkApi) => {
    const res = await axios.get(`${env.URL}home/${id}`);

    return res.data;
  }
);

const fetchByCategory = createAsyncThunk(
  "menu/getByCategory",
  async (type, thunkApi) => {
    toast.success(type);
    const res = await axios.get(
      `${type !== "All" ? `${env.URL}home?category=${type}` : `${env.URL}home`}`
    );
    console.log(res, `${env.URL}home?category=${type}`);
    return res.data;
  }
);

const fetchBySort = createAsyncThunk(
  "menu/getBySort",
  async (type, thunkApi) => {
    toast.success(type === "asc" ? "Lowest To Highest" : "Highest To Lowest  ");
    const res = await axios.get(`${env.URL}home?_sort=price&_order=${type}`);

    return res.data;
  }
);

// cart

// const getCartProduct = createAsyncThunk("cart/getProduct", async () => {
//   const res = await axios.get(`${env.URL}cart`);
//   console.log(res);
//   return res.data;
// });

// const postCartProduct = createAsyncThunk("cart/postProduct", async (type) => {
//   const res = await axios.post(`${env.URL}cart`, type);

//   res.status === 201 && toast.success("added to cart");

//   console.log(res);
// });

export {
  getAllMenu,
  getSingleProduct,
  fetchByCategory,
  fetchBySort,
  // getCartProduct,
  // postCartProduct,
};
