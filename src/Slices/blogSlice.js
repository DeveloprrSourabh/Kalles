import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const blogSlice = createSlice({
  name: "blog",

  initialState: {
    allBlogs: [],
    singleBlog: {},
    singleBlogView: {},
  },

  extraReducers: (builder) => {
    builder.addCase(addBlog.fulfilled, (state, action) => {});
    builder.addCase(updateBlog.fulfilled, (state, action) => {});
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.allBlogs = action.payload;
    });
    builder.addCase(getSingleBlog.fulfilled, (state, action) => {
      state.singleBlog = action.payload;
    });
    builder.addCase(getSingleBlogView.fulfilled, (state, action) => {
      state.singleBlogView = action.payload;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.allBlogs = state.allBlogs.filter((e) => {
        return e._id !== action.payload._id;
      });
    });
  },
});

export default blogSlice.reducer;

// Add Product
export const addBlog = createAsyncThunk("blog/add", async (productData) => {
  const { data } = await axios.post(
    `${host}/api/v1/blog/add-blog`,
    productData,
    {
      headers: {
        Authorization: localStorage.getItem("auth").token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  if (data?.success) {
    toast.success(data?.message);
  } else {
    toast.error(data?.message);
  }
  return data;
});

// Update Blog
export const updateBlog = createAsyncThunk("blog/update", async (blogData) => {
  const { data } = await axios.put(
    `${host}/api/v1/blog/update-blog/${blogData.slug}`,
    blogData.blogData,
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
  console.log(data);

  return data;
});

// Getting All Blogs
export const getAllBlogs = createAsyncThunk("get/blogs", async () => {
  const res = await fetch(`${host}/api/v1/blog/all-blogs`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const blogs = await res.json();

  return blogs.blogs;
});

//  Delete Blogs
export const deleteBlog = createAsyncThunk("delete/blogs", async (id) => {
  const res = await fetch(`${host}/api/v1/blog/delete-blog/${id}`, {
    method: "DELETE",
  });
  const blogs = await res.json();
  if (blogs?.success) {
    toast.success(blogs?.message);
  } else {
    toast.error(blogs?.message);
  }
  return blogs.blog;
});
// Getting Single Blogs For Update
export const getSingleBlog = createAsyncThunk(
  "get/singleblog",
  async (slug) => {
    const res = await fetch(`${host}/api/v1/blog/get-blog/${slug}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const blog = await res.json();
    return blog.blog;
  }
);
// Getting Single Blog For View
export const getSingleBlogView = createAsyncThunk(
  "get/singleblogview",
  async (slug) => {
    const res = await fetch(`${host}/api/v1/blog/get-blogview/${slug}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const blog = await res.json();
    return blog.blog;
  }
);
