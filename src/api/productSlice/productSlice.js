import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productSlice = createApi({
  reducerPath: "product",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    productPost: builder.mutation({
      query: (product) => ({
        url: "/product",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    imagePost: builder.mutation({
      query: (imageInfo) => ({
        url: "/product/add-image-to-product",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: imageInfo,
      }),
      invalidatesTags: ["product"],
    }),

    getAllProducts: builder.query({
      query: () => "/product",
      providesTags: ["product"],
    }),
    getSingleProducts: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["product"],
    }),
    postComment: builder.mutation({
      query: ({ feedback, id }) => ({
        url: `/product/${id}/comments`,
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: feedback,
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: ({ updatedProductData, productId }) => ({
        url: `/product/${productId}`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: updatedProductData,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: ({ productId }) => ({
        url: `/product/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    deleteComment: builder.mutation({
      query: ({ productId, commentId }) => ({
        url: `/product/${productId}/comments/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useProductPostMutation,
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  usePostCommentMutation,
  useDeleteCommentMutation,
  useDeleteProductMutation,
  useImagePostMutation,
  useUpdateProductMutation,
} = productSlice;
