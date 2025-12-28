import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import conversationSlice from "../features/conversations/conversationSlice";
import messageSlice from "../features/messages/messageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    conversations: conversationSlice,
    messages: messageSlice,
  },
});
