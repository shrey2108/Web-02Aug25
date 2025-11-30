import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data) => {
    const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/auth/register`, data);
    return res.data.data;
  }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data) => {
    const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/auth/login`, data);
    return res.data.data;
  }
)