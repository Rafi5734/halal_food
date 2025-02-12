import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderSlice = createApi({
  reducerPath: "order",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
    // baseUrl: "http://localhost:8800",
  }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    // order api
    postCart: builder.mutation({
      query: ({ userId, singleProductId }) => ({
        url: `/order/${userId}/cart`,
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: singleProductId,
      }),
      invalidatesTags: ["order"],
    }),
    deleteCartProduct: builder.mutation({
      query: ({ userId, productId }) => ({
        url: `/order/${userId}/cart/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
    updateProductStatus: builder.mutation({
      query: ({ updatedProductStatusData, productId }) => ({
        url: `/checkout/${productId}`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: updatedProductStatusData,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  usePostCartMutation,
  useDeleteCartProductMutation,
  useUpdateProductStatusMutation,
} = orderSlice;
