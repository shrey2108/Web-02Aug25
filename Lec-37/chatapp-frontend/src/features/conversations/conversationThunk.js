import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getAllConversations = createAsyncThunk(
  "conversations/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/conversations");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error in fetching convesations");
    }
  }
)

export const getOrStartConversations = createAsyncThunk(
  "conversations/getOrStart",
  async (receiverId, { rejectWithValue }) => {
    try {
      const res = await api.post("/conversations", {
        receiverId
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error in get or create convesation");
    }
  }
)