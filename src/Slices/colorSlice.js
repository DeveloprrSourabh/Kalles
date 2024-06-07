import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const colorSlice = createSlice({
  name: "color",

  initialState: {
    allColors: [],
    singleColor: {},
  },

  extraReducers: (builder) => {
    builder.addCase(addColor.fulfilled, (state, action) => {});
    builder.addCase(getAllColors.fulfilled, (state, action) => {
      state.allColors = action.payload;
    });
    builder.addCase(deleteColor.fulfilled, (state, action) => {
      state.allColors = state.allColors.filter((e) => {
        return e._id !== action.payload._id;
      });
    });
    builder.addCase(updateColor.fulfilled, (state, action) => {});
  },
});

export default colorSlice.reducer;

// Add Tag
export const addColor = createAsyncThunk("color/add", async (name) => {
  const res = await fetch(`${host}/api/v1/color/add-color`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(name),
  });
  const data = await res.json();

  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }

  return data;
});

// Update Tag
export const updateColor = createAsyncThunk("color/update", async (name) => {
  const res = await fetch(`${host}/api/v1/color/update-color/${name.colorId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(name),
  });
  const data = await res.json();
  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }

  return data;
});

// Getting All Tags
export const getAllColors = createAsyncThunk("get/colors", async () => {
  const res = await fetch(`${host}/api/v1/color/all-colors`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const colors = await res.json();
  return colors.colors;
});

//  Delete Category
export const deleteColor = createAsyncThunk("delete/color", async (id) => {
  const res = await fetch(`${host}/api/v1/color/delete-color/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data.color;
  if (data?.success) {
    toast.success(data?.message);
  } else {
    toast.error(data?.message);
  }
});
