import { createSlice } from "@reduxjs/toolkit";
import { addToWishlist, removeFromWishlist, getWishlist } from "./wishlistThunk";

const wishlistSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    items: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    // getWishlist

    builder.addCase(getWishlist.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    builder.addCase(getWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    })

    // add
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })

    // remove
    builder.addCase(removeFromWishlist.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
    })
  }
})

export default wishlistSlice.reducer