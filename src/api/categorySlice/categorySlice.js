import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categorySlice = createApi({
  reducerPath: "category",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
  }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    categoryPost: builder.mutation({
      query: (category) => ({
        url: "/category",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),
    getAllCategories: builder.query({
      query: () => "/category",
      providesTags: ["category"],
    }),
  }),
});

export const { useCategoryPostMutation, useGetAllCategoriesQuery } =
  categorySlice;
