import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import tagSlice from "./tagSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    category: categorySlice,
    tag: tagSlice,
  },
});
export default store;
