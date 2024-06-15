import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const host = "http://localhost:8000";
const productSlice = createSlice({
  name: "product",

  initialState: {
    allProducts: [],
    singleProduct: {},
  },

  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, action) => {});
    builder.addCase(updateProduct.fulfilled, (state, action) => {});
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.allProducts = state.allProducts.filter((e) => {
        return e._id !== action.payload._id;
      });
    });
  },
});

export default productSlice.reducer;

// Add Product
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

// Update Product
export const updateProduct = createAsyncThunk(
  "product/update",
  async (productData) => {
    const { data } = await axios.put(
      `${host}/api/v1/product/update-product/${productData.slug}`,
      productData.productData,
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
  }
);

// Getting All Products
export const getAllProducts = createAsyncThunk("get/products", async () => {
  const res = await fetch(`${host}/api/v1/product/all-products`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const products = await res.json();

  //   console.log(products.products);
  return products.products;
});

//  Delete Products
export const deleteProduct = createAsyncThunk("delete/products", async (id) => {
  const res = await fetch(`${host}/api/v1/product/delete-product/${id}`, {
    method: "DELETE",
  });
  const products = await res.json();

  return products.product;
});
// Getting Single Products
export const getSingleProduct = createAsyncThunk(
  "get/singleproduct",
  async (slug) => {
    const res = await fetch(`${host}/api/v1/product/get-product/${slug}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const product = await res.json();
    console.log(product);
    return product.product;
  }
);
