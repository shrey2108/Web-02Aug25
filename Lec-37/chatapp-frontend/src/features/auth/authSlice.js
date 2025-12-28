import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunk";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
        isAuthenticated: !!localStorage.getItem("token"),
        error: null
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false

            // localStorage.removeItem("user");
            // localStorage.removeItem("token");
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        // REGISTER
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            // state.user = action.payload.user;
            // state.token = action.payload.token;
            // state.isAuthenticated = true;

            // localStorage.setItem("user", JSON.stringify(action.payload.user));
            // localStorage.setItem("token", action.payload.accessToken);
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // LOGIN
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = true;

            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.accessToken);
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer