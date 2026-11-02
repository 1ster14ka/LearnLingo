import { createSelector } from "@reduxjs/toolkit";

export const isLoadingSelect = (state) => state.teachers.isLoading;
export const errorSelect = (state) => state.teachers.error;
export const teachersSelect = (state) => state.teachers.teachers;

export const favoriteTeachersSelect = createSelector(
  [
    (state) => state.teachers.teachers,
    (state) => state.teachers.favoriteTeachers,
  ],
  (teachers, favoriteTeachers) => {
    return teachers.filter((teacher) => favoriteTeachers.includes(teacher.id));
  },
);
