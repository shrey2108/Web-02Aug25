import { createSlice } from "@reduxjs/toolkit";

// immer package

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy:(state, action) => {
      console.log(action);
      state.value += action.payload
    }
  }
});

// action creater
export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;

// async thunk => async api
