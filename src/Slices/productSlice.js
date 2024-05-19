import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const productSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
    user: {},
  },

  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, action) => {});
  },
});

export default productSlice.reducer;

export const addProduct = createAsyncThunk(
  "product/add",
  async (productData) => {
    const { data } = await axios.post(
      `${host}/api/v1/product/add-product`,
      productData,
      {
        headers: {
          Authorization: localStorage.getItem("auth").token,
        },
      }
    );
    if (data?.success) {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }

    return data;
  }
);
