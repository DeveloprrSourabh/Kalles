import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const colorSlice = createSlice({
  name: "cart",

  initialState: {
    allCarts: [],
  },

  extraReducers: (builder) => {
    builder.addCase(addCart.fulfilled, (state, action) => {});
    builder.addCase(getAllCarts.fulfilled, (state, action) => {
      state.allCarts = action.payload;
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      state.allCarts = state.allCarts.filter((e) => {
        return e._id !== action.payload._id;
      });
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {});
  },
});

export default colorSlice.reducer;

// Add to Cart
export const addCart = createAsyncThunk("cart/add", async (credentials) => {
  const res = await fetch(
    `${host}/api/v1/product/add-to-cart/${credentials.id}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );
  const data = await res.json();

  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
  console.log(data);
  return data;
});

// Update Cart
export const updateCart = createAsyncThunk("cart/update", async (product) => {
  const res = await fetch(
    `${host}/api/v1/product/update-to-cart/${product.id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    }
  );
  const data = await res.json();
  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }

  return data;
});

// Getting All Carts
export const getAllCarts = createAsyncThunk("get/carts", async () => {
  const res = await fetch(`${host}/api/v1/product/get-cart-products`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const carts = await res.json();
  console.log(carts);
  return carts.carts;
});

//  Delete Cart
export const deleteCart = createAsyncThunk("delete/cart", async (id) => {
  const res = await fetch(`${host}/api/v1/product/delete-to-cart/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data?.success) {
    toast.success(data?.message);
  } else {
    toast.error(data?.message);
  }
  console.log(data);
  return data.cart;
});
