import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
const host = "http://localhost:8000";

const userSlice = createSlice({
  name: "user",

  initialState: {
    data: [],
    user: {},
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      if (action.payload !== undefined) {
        localStorage.setItem("auth", JSON.stringify(action.payload));
      }
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {});
  },
});

export default userSlice.reducer;

export const updateUser = createAsyncThunk("user/update", async (userData) => {
  const { data } = await axios.put(
    `${host}/api/v1/auth/update-user`,
    userData,
    {
      headers: {
        Authorization: JSON.parse(localStorage?.getItem("auth")).token,
      },
    }
  );
  if (data?.success) {
    toast.success(data?.message);
    return data;
  } else {
    toast.error(data?.message);
  }
});

export const register = createAsyncThunk(
  "user/register",
  async ({ name, email, address, answer, password, photo }) => {
    const res = await fetch(`${host}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, address, answer, password, photo }),
    });
    const json = await res.json();
    if (json.success) {
      toast.success(json.message);
      setTimeout(() => {
        useNavigate("../login");
      }, [2000]);
    } else {
      toast.error(json.message);
    }
    return json;
  }
);
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const res = await fetch(`${host}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    if (json.success) {
      toast.success(json.message);
      setTimeout(() => {}, 2000);
      console.log(json);
    } else {
      toast.error(json.message);
    }
    console.log(json);
    return json;
  }
);
export const getUser = createAsyncThunk("user/get", async () => {
  const res = await fetch(`${host}/api/v1/auth/getuser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: JSON.parse(localStorage.getItem("auth")).token,
    },
  });
  const json = await res.json();
  // console.log(json);
  return json;
});
