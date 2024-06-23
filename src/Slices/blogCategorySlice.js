import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const blogCategorySlice = createSlice({
  name: "blogcategory",

  initialState: {
    allBlogCategories: [],
    singleBlogCategories: {},
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(addBlogCategory.fulfilled, (state, action) => {
      state.allCategories = action.payload;
    });
    builder.addCase(getAllBlogCategories.fulfilled, (state, action) => {
      state.allBlogCategories = action.payload;
    });
    builder.addCase(deleteBlogCategory.fulfilled, (state, action) => {
      state.allBlogCategories = state.allBlogCategories.filter((e) => {
        return e._id !== action.payload._id;
      });
    });
    builder
      .addCase(updateBlogCategory.fulfilled, (state, action) => {})
      .addCase(updateBlogCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBlogCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogCategorySlice.reducer;

// Add Category
export const addBlogCategory = createAsyncThunk(
  "blogcategory/add",
  async (categoryData) => {
    const { data } = await axios.post(
      `${host}/api/v1/category/add-blog-category`,
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
export const updateBlogCategory = createAsyncThunk(
  "blogcategory/update",
  async (categoryData, { rejectWithValue }) => {
    try {
      console.log("Received categoryData:", categoryData); // Debugging statement
      const { data } = await axios.put(
        `${host}/api/v1/category/update-blog-category/${categoryData.catId}`,
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
export const getAllBlogCategories = createAsyncThunk(
  "get/blogcategories",
  async () => {
    const res = await fetch(`${host}/api/v1/category/all-blog-categories`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const categories = await res.json();
    return categories.categories;
  }
);
//  Delete Category
export const deleteBlogCategory = createAsyncThunk(
  "delete/blogcategory",
  async (id) => {
    const res = await fetch(
      `${host}/api/v1/category/delete-blog-category/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data.category;
    if (data?.success) {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  }
);
