import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
    isAuthenticated: !!JSON.parse(localStorage.getItem("token"))
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    })

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    })
    
    builder.addCase(loginUser.rejected, (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer