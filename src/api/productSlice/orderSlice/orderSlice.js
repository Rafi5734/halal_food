import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderSlice = createApi({
  reducerPath: "order",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
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
  }),
});

export const { usePostCartMutation, useDeleteCartProductMutation } = orderSlice;
