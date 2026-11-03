import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  refreshToken,
  registerUser,
  updateAccount,
} from "./operation";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  tokenExpirationTime: 0,
};

const loginAccount = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
  state.tokenExpirationTime =
    Date.now() + Number(action.payload.expiresIn) * 1000;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = false;
      state.tokenExpirationTime = 0;
    },
  },

  extraReducers: (build) =>
    build
      .addCase(registerUser.fulfilled, loginAccount)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.fulfilled, loginAccount)
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        const { access_token, refresh_token, expires_in } = action.payload;
        if (!state.user) {
          return;
        }
        state.user.idToken = access_token;
        state.user.refreshToken = refresh_token;
        state.user.expiresIn = expires_in;

        state.tokenExpirationTime = Date.now() + Number(expires_in) * 1000;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.tokenExpirationTime = 0;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.user = { ...state.user, displayName: action.payload };
        state.isLoading = false;
        state.error = false;
      })
      .addCase(updateAccount.rejected, handleRejected)
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending),
});

export const { logout } = slice.actions;

export default slice.reducer;
