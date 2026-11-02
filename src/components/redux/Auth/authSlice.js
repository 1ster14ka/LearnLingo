import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, updateAccount } from "./operation";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      ((state.isLoading = false),
        (state.error = null),
        (state.isLoggedIn = false));
    },
  },
  extraReducers: (build) =>
    build
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.user = { ...state.user, displayName: action.payload };
        state.isLoading = false;
        state.error = false;
      }),
});

export const { logout } = slice.actions;

export default slice.reducer;
