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
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
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
        state.error = null;
        state.teachers = actions.payload;
      })

      .addCase(getFavoritesTeachers.fulfilled, (state, action) => {
        state.favoriteTeachers = action.payload;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addFavoriteTeacher.fulfilled, (state, action) => {
        if (!state.favoriteTeachers.includes(action.payload)) {
          state.favoriteTeachers.push(action.payload);
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFavoriteTeacher.fulfilled, (state, action) => {
        state.favoriteTeachers = state.favoriteTeachers.filter(
          (teacherId) => teacherId !== action.payload,
        );
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        (action) =>
          [
            getTeachers.pending.type,
            getFavoritesTeachers.pending.type,
          ].includes(action.type),
        handlePending,
      )
      .addMatcher(
        (action) =>
          [
            getTeachers.rejected.type,
            getFavoritesTeachers.rejected.type,
          ].includes(action.type),
        handleRejected,
      ),
});

export default slice.reducer;
