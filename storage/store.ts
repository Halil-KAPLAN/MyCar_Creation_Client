import { configureStore } from "@reduxjs/toolkit";
import categoryApi from "./apis/categoryApi";
import vehicleApi from "./apis/vehicleApi";
import { categoryReducer } from "./redux/category/categorySlice";
import { vehicleReducer } from "./redux/vehicle/vehicleSlice";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    categoryStore: categoryReducer,

    [vehicleApi.reducerPath]: vehicleApi.reducer,
    vehicleStore: vehicleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      vehicleApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
