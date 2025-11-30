import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice"
import authSlice from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
  }
})