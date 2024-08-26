import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
  vehicleId: "",
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getAllVehicles: (state, { payload }) => {
      state.vehicles = payload;
    },
  },
});

export const { getAllVehicles } = vehicleSlice.actions;
export const vehicleReducer = vehicleSlice.reducer;
