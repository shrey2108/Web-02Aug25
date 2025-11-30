import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/products`)
    return res.data.data;
  }
)

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000)
    })
    const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/products/${id}`)
    return res.data.data;
  }
)