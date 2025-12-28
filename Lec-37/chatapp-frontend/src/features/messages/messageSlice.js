import { createSlice } from "@reduxjs/toolkit";
import { fetchMessages, sendMessage } from "./messageThunk";

/*
const byConversationId = {
  c_id_1: {
    error: null,
    loading: false,
    list: [],
    hasMore: true | false,
  },
  c_id_2: {
    error: null,
    loading: false,
    list: [],
  },
};
*/

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    byConversationId: {},
  },
  reducers: {
    addMessage: (state, action) => {
      const { conversationId } = action.payload;
      const message = action.payload;

      if (!state.byConversationId[conversationId]) {
        state.byConversationId[conversationId] = {
          list: [],
          loading: false,
          error: null,
          hasMore: true,
        };
      }

      state.byConversationId[conversationId].list.push(message);
    },
  },
  extraReducers: (builder) => {
    // get Messages
    builder.addCase(fetchMessages.pending, (state, action) => {
      const { conversationId } = action.meta.arg;

      if (!state.byConversationId[conversationId]) {
        state.byConversationId[conversationId] = {
          list: [],
          loading: false,
          error: null,
          hasMore: true,
        };
      }

      state.byConversationId[conversationId].loading = true;
    });

    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      const { conversationId, page } = action.meta.arg;
      const convoState = state.byConversationId[conversationId];
      const { messages, hasMore } = action.payload;

      convoState.loading = false;
      convoState.hasMore = hasMore;

      console.log("payload", action.payload);

      if (page == 1) {
        convoState.list = messages.reverse();
        return;
      }

      const existingIds = new Set(convoState.list.map((m) => m._id));

      const olderMessages = messages
        .reverse()
        .filter((m) => !existingIds.has(m._id));

      convoState.list = [...olderMessages, ...convoState.list];
    });

    builder.addCase(fetchMessages.rejected, (state, action) => {
      const { conversationId } = action.meta.arg;
      const convoState = state.byConversationId[conversationId];

      convoState.loading = false;
      convoState.error = action.error;
    });

    // Send Message
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      const { conversation, message } = action.payload;
      const convoState = state.byConversationId[conversation._id];

      convoState.list.push(message);
    });
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
