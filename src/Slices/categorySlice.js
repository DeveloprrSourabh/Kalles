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
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.allCategories = action.payload;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.allCategories = state.allCategories.filter((e) => {
        return e._id !== action.payload._id;
      });
    });
    builder
      .addCase(updateCategory.fulfilled, (state, action) => {})
      .addCase(updateCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;

// Add Category
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

// Update Category
export const updateCategory = createAsyncThunk(
  "category/update",
  async (categoryData, { rejectWithValue }) => {
    try {
      console.log("Received categoryData:", categoryData); // Debugging statement
      const { data } = await axios.put(
        `${host}/api/v1/category/update-category/${categoryData.catId}`,
        categoryData.categoryData,
        {
          headers: {
            Authorization: localStorage.getItem("auth").token,
          },
        }
      );
      console.log(data);
      if (data?.success) {
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
      return data;
    } catch (error) {
      console.error("Error updating category:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Getting All Categories
export const getAllCategories = createAsyncThunk("get/categories", async () => {
  const res = await fetch(`${host}/api/v1/category/all-categories`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const categories = await res.json();
  return categories.categories;
});
//  Delete Category
export const deleteCategory = createAsyncThunk(
  "delete/category",
  async (id) => {
    const res = await fetch(`${host}/api/v1/category/delete-category/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    return data.category;
    if (data?.success) {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  }
);
