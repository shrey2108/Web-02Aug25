import { configureStore } from "@reduxjs/toolkit"
import conterReducer from "../features/counterSlice"

export const store = configureStore({
  reducer: {
    counter: conterReducer,
  }
})