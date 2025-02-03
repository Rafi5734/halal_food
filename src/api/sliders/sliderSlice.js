import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const sliderSlice = createApi({
  reducerPath: "slider",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
  }),
  tagTypes: ["slider"],
  endpoints: (builder) => ({
    sliderPost: builder.mutation({
      query: (sliderData) => ({
        url: "/slider",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: sliderData,
      }),
      invalidatesTags: ["slider"],
    }),
    sliderUpdate: builder.mutation({
      query: ({ sliderData, sliderId }) => ({
        url: `/slider/${sliderId}`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: sliderData,
      }),
      invalidatesTags: ["slider"],
    }),
    getAllSlider: builder.query({
      query: () => "/slider",
      providesTags: ["slider"],
    }),
    getASingleSlider: builder.query({
      query: (sliderId) => `/slider/${sliderId}`,
      providesTags: ["slider"],
    }),
    deleteSlider: builder.mutation({
      query: (sliderId) => ({
        url: `/slider/${sliderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["slider"],
    }),
  }),
});

export const {
  useSliderPostMutation,
  useGetAllSliderQuery,
  useDeleteSliderMutation,
  useGetASingleSliderQuery,
  useSliderUpdateMutation,
} = sliderSlice;
