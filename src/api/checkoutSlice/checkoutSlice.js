import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const checkoutSlice = createApi({
  reducerPath: "checkout",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
  }),
  tagTypes: ["checkout"],
  endpoints: (builder) => ({
    checkoutPost: builder.mutation({
      query: (product) => ({
        url: "/checkout",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["checkout"],
    }),
    getAllCheckout: builder.query({
      query: () => "/checkout",
      providesTags: ["checkout"],
    }),
    deleteCheckout: builder.mutation({
      query: ({ productId }) => ({
        url: `/checkout/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["checkout"],
    }),
  }),
});

export const {
  useCheckoutPostMutation,
  useGetAllCheckoutQuery,
  useDeleteCheckoutMutation,
} = checkoutSlice;
