import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { firebaseConfig } from "../../../services/firebase";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await authApi.post(
        `:signUp?key=${firebaseConfig.apiKey}`,
        body,
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await authApi.post(
        `:signInWithPassword?key=${firebaseConfig.apiKey}`,
        body,
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateAccount = createAsyncThunk(
  "auth/update",
  async (body, thunkAPI) => {
    try {
      const { data } = await authApi.post(
        `:update?key=${firebaseConfig.apiKey}`,
        body,
      );
      return data.displayName;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
