import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const categorySlice = createSlice({
  name: "category",

  initialState: {
    allCategories: [],
    singleCategories: {},
  },

  extraReducers: (builder) => {
    builder.addCase(addCategory.fulfilled, (state, action) => {});
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
    });
  },
});

export default categorySlice.reducer;

export const addCategory = createAsyncThunk(
  "category/add",
  async (categoryData) => {
    const { data } = await axios.post(
      `${host}/api/v1/category/add-category`,
      categoryData,
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

// Getting All Categories
export const getAllCategories = createAsyncThunk("get/categories", async () => {
  const res = await fetch(`${host}/api/v1/category/all-category`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const categories = await res.json();
  console.log(categories);
  return categories.category;
});
