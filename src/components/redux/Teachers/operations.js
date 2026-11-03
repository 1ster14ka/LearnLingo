import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const teachersApi = axios.create({
  baseURL:
    "https://learnlingo-8a25a-default-rtdb.europe-west1.firebasedatabase.app",
});

export const getTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await teachersApi.get("/teachers.json");
      if (!data) return [];
      return Object.entries(data).map(([id, teacher]) => {
        return { ...teacher, id };
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error?.message || error.message,
      );
    }
  },
);

export const addFavoriteTeacher = createAsyncThunk(
  "/teachers/addFavorite",

  async ({ user, teacherId }, thunkAPI) => {
    try {
      await teachersApi.put(
        `/favorites/${user.localId}/${teacherId}.json?auth=${user.idToken}`,
        true,
      );
      return teacherId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message,
      );
    }
  },
);

export const deleteFavoriteTeacher = createAsyncThunk(
  "/teachers/deleteFavorite",
  async ({ user, teacherId }, thunkAPI) => {
    try {
      await teachersApi.delete(
        `/favorites/${user.localId}/${teacherId}.json?auth=${user.idToken}`,
      );
      return teacherId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message,
      );
    }
  },
);

export const getFavoritesTeachers = createAsyncThunk(
  "/favoriteTeachers",
  async ({ localId, idToken }, thunkAPI) => {
    try {
      const { data } = await teachersApi.get(
        `/favorites/${localId}.json?auth=${idToken}`,
      );

      return data
        ? Object.entries(data)
            .filter(([, isFavorite]) => isFavorite)
            .map(([teacherId]) => teacherId)
        : [];
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message,
      );
    }
  },
);
