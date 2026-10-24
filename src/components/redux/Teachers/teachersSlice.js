import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const initialState = {
  teachers: [],
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
      .addCase(getTeachers.pending, handlePending)
      .addCase(getTeachers.rejected, handleRejected),
});

export default slice.reducer;
