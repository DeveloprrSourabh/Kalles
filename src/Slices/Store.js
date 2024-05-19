import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});
export default store;
