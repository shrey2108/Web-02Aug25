import { createSlice } from "@reduxjs/toolkit";
import { getAllConversations, getOrStartConversations } from "./conversationThunk";

const conversationSlice = createSlice({
  name: "conversations",
  initialState: {
    loading: false,
    error: null,
    conversationList: [],
    activeConversationId: null
  },
  reducers: {
    changeConversation: (state, action) => {
      state.activeConversationId = action.payload;
    },
    updateConversation: (state, action) => {
      const conversation = action.payload;
      const conversationId = conversation._id;

      const index = state.conversationList.findIndex(
        c => c._id === conversationId
      )
      if(index !== -1) {
        state.conversationList.splice(index, 1);
      }
      state.conversationList.unshift(conversation);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllConversations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllConversations.fulfilled, (state, action) => {
        state.loading = false,
        state.conversationList = action.payload;
      })
      .addCase(getAllConversations.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload;
      })


      // GetOrStart convo
      .addCase(getOrStartConversations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrStartConversations.fulfilled, (state, action) => {
        state.loading = false;

        const exists = state.conversationList.find(c => c._id === action.payload._id);
        if(!exists){
          state.conversationList.unshift(action.payload);
        }

        state.activeConversationId = action.payload._id;
      })
      .addCase(getOrStartConversations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export const { changeConversation, updateConversation } = conversationSlice.actions;
export default conversationSlice.reducer;