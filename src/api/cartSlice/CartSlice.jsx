import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const cartSlice = createApi({
  reducerPath: "cart",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    cartAdd: builder.mutation({
      query: (productId) => ({
        url: "/cart/add",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: productId,
      }),
      invalidatesTags: ["cart"],
    }),

    getAllCartProducts: builder.query({
      query: () => "/cart",
      providesTags: ["cart"],
    }),
    // getSingleProducts: builder.query({
    //   query: (id) => `/product/${id}`,
    //   providesTags: ["product"],
    // }),

    incrementCartProductQuantity: builder.mutation({
      query: ({ productId }) => ({
        url: `/cart/increment`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: productId,
      }),
      invalidatesTags: ["cart"],
    }),

    decrementCartProductQuantity: builder.mutation({
      query: ({ productId }) => ({
        url: `/cart/decrement`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: productId,
      }),
      invalidatesTags: ["cart"],
    }),

    deleteCartProduct: builder.mutation({
      query: ({ productId }) => ({
        url: `/cart/remove`,
        method: "DELETE",
        body: productId,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useCartAddMutation,
  useGetAllCartProductsQuery,
  useIncrementCartProductQuantityMutation,
  useDecrementCartProductQuantityMutation,
  useDeleteCartProductMutation,
} = cartSlice;
