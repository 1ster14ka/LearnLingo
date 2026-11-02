import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteTeacher,
  deleteFavoriteTeacher,
  getFavoritesTeachers,
  getTeachers,
} from "./operations";

const initialState = {
  teachers: [],
  favoriteTeachers: [],
  isLoading: true,
  error: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const slice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getTeachers.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.teachers = actions.payload;
      })
      .addCase(getFavoritesTeachers.fulfilled, (state, action) => {
        state.favoriteTeachers = action.payload;
      })

      .addCase(addFavoriteTeacher.fulfilled, (state, action) => {
        if (!state.favoriteTeachers.includes(action.payload)) {
          state.favoriteTeachers.push(action.payload);
        }
      })
      .addCase(deleteFavoriteTeacher.fulfilled, (state, action) => {
        state.favoriteTeachers = state.favoriteTeachers.filter(
          (teacherId) => teacherId !== action.payload,
        );
      })
      .addCase(getTeachers.pending, handlePending)
      .addCase(getTeachers.rejected, handleRejected),
});

export default slice.reducer;
