import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    token: null,
    isAuthenticated: false
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(state, action)
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    })

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer