import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchMessages = createAsyncThunk(
  "messages/fetch",
  async ({ conversationId, page = 1, limit = 20 }, { rejectWithValue }) => {
    try {
      const res = await api.get(
        `/messages/${conversationId}?page=${page}&limit=${limit}`
      );
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Cannot get messages"
      );
    }
  }
);

export const sendMessage = createAsyncThunk(
  "messages/send",
  async ({ receiverId, content, conversationId }, { rejectWithValue }) => {
    try {
      const res = await api.post("/messages", {
        receiverId,
        content,
        conversationId,
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Cannot send message"
      );
    }
  }
);
