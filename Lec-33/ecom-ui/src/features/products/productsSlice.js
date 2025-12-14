import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchSingleProduct } from "./productsThunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    selectedProduct: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.products = [];
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error;
    })

    builder.addCase(fetchSingleProduct.pending, (state, action) => {
      state.loading = true;
      state.selectedProduct = {};
    })
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    })
  }
});

export default productsSlice.reducer
