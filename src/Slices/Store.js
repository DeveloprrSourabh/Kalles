import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import tagSlice from "./tagSlice";
import colorSlice from "./colorSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    category: categorySlice,
    tag: tagSlice,
    color: colorSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
