import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoryId: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export const { getAllCategories } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
