import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle, VehicleState } from "./type";

const initialState: VehicleState = {
  vehicles: [],
  vehicleId: "",
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getAllVehicles: (state, { payload }: PayloadAction<Vehicle[]>) => {
      state.vehicles = payload;
    },
  },
});

export const { getAllVehicles } = vehicleSlice.actions;
export const vehicleReducer = vehicleSlice.reducer;
