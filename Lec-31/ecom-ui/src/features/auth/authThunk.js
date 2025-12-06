import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/auth/register`, data);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(err.response.data.message);
    }
  }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/auth/login`, data);
      console.log("res in thunk", res)
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
)