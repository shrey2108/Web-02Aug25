import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice"
import authSlice from "../features/auth/authSlice"
import wishlistSlice from "../features/wishlist/wishlistSlice"

export const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
    wishlist: wishlistSlice
  }
})