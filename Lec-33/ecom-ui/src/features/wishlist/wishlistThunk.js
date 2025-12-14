import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishlist = createAsyncThunk(
  "products/getWishlist",
  async (_, {rejectWithValue}) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/wishlist`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return res.data.data;
    } catch (err) {
      rejectWithValue(err.response.data.message)
    }
  }
)

export const addToWishlist = createAsyncThunk(
  "products/addToWishlist",
  async (productId, {rejectWithValue}) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASEURL}/wishlist`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      return res.data.data;
    } catch (err) {
      rejectWithValue(err.response.data.message)
    }
  }
)

export const removeFromWishlist = createAsyncThunk(
  "products/removeFromWishlist",
  async (productId, {rejectWithValue}) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASEURL}/wishlist`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      return res.data.data;
    } catch (err) {
      rejectWithValue(err.response.data.message)
    }
  }
)