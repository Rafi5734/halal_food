import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const allUsersSlice = createApi({
  reducerPath: "all_users",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["all_users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/todos`,
      providesTags: ["all_users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = allUsersSlice;
