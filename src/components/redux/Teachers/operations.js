import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://learnlingo-8a25a-default-rtdb.europe-west1.firebasedatabase.app";

export const getTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/teachers.json");
      if (!data) return [];
      return Object.entries(data).map(([id, teacher]) => {
        return { ...teacher, id };
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
