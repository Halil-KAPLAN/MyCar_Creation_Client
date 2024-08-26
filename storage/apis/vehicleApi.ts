import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface VehicleModel {
  brand: string;
  model: string;
  modelYear: string;
  price: number;
  description: string;
  categoryId: string;
}

interface UpdateVehicleModel {
  vehicleId: number;
  vehicleModel: VehicleModel;
}

const vehicleApi = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://4fde-212-175-32-234.ngrok-free.app/api/",
  }),
  endpoints: (builder) => ({
    GetAllVehicle: builder.query({
      query: () => ({
        url: "Vehicle/GetAllVehicle",
        method: "GET",
      }),
    }),
    GetVehicleById: builder.query({
      query: (vehicleId: number) => ({
        url: `Vehicle/GetVehicleById/${vehicleId}`,
        method: "GET",
      }),
    }),
    CreateVehicle: builder.mutation({
      query: (model: VehicleModel) => ({
        url: "Vehicle/CreateVehicle",
        method: "POST",
        body: model,
      }),
    }),
    UpdateVehicle: builder.mutation({
      query: ({ vehicleId, vehicleModel }: UpdateVehicleModel) => ({
        url: `Vehicle/${vehicleId}`,
        method: "PUT",
        body: vehicleModel,
      }),
    }),
    DeleteVehicle: builder.mutation({
      query: (vehicleId: number) => ({
        url: `Vehicle/DeleteVehicle/${vehicleId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllVehicleQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
} = vehicleApi;
export default vehicleApi;
