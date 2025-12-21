import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import conversationSlice from "../features/conversations/conversationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    conversations: conversationSlice,
  },
});
