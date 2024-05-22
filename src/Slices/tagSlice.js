import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const tagSlice = createSlice({
  name: "tag",

  initialState: {
    allTags: [],
    singleTag: {},
  },

  extraReducers: (builder) => {
    builder.addCase(addTag.fulfilled, (state, action) => {});
    builder.addCase(getAllTags.fulfilled, (state, action) => {
      state.allTags = action.payload;
    });
    builder.addCase(updateTag.fulfilled, (state, action) => {});
  },
});

export default tagSlice.reducer;

// Add Tag
export const addTag = createAsyncThunk("tag/add", async (name) => {
  const res = await fetch(`${host}/api/v1/tag/add-tag`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(name),
  });
  console.log(name);
  const data = await res.json();

  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }

  return data;
});

// Update Tag
export const updateTag = createAsyncThunk("tag/update", async (name) => {
  const res = await fetch(`${host}/api/v1/tag/update-tag/${name.tagId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(name),
  });
  const data = await res.json();
  console.log(name.tag.tag.name);
  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }

  return data;
});

// Getting All Tags
export const getAllTags = createAsyncThunk("get/tags", async () => {
  const res = await fetch(`${host}/api/v1/tag/all-tags`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const tags = await res.json();
  console.log(tags);
  return tags.tags;
});
