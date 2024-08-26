import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CategoryModel {
  categoryName: string;
  categoryDescription: string;
}

interface UpdateCategoryModel {
  categoryId: number;
  categoryModel: CategoryModel;
}

const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_API_URL}/api/`,
    prepareHeaders: (headers) => {
      headers.set("Ngrok-Skip-Browser-Warning", "true");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetAllCategory: builder.query({
      query: () => ({
        url: "Category",
        method: "GET",
      }),
    }),
    CreateCategory: builder.mutation({
      query: (model: CategoryModel) => ({
        url: "Category",
        method: "POST",
        body: model,
      }),
    }),
    UpdateCategory: builder.mutation({
      query: ({ categoryId, categoryModel }: UpdateCategoryModel) => ({
        url: `Category/${categoryId}`,
        method: "PUT",
        body: categoryModel,
      }),
    }),
    RemoveCategory: builder.mutation({
      query: (categoryId: number) => ({
        url: `Category/${categoryId}`,
        method: "DELETE",
      }),
    }),
    GetVehiclesByCategoryId: builder.query({
      query: (categoryId: number) => ({
        url: `Category/GetVehiclesByCategoryId/${categoryId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useRemoveCategoryMutation,
  useGetVehiclesByCategoryIdQuery,
} = categoryApi;
export default categoryApi;
