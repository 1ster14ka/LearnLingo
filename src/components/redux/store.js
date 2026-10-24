import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from "./Teachers/teachersSlice.js";

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});
