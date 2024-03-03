import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authSlice = createApi({
  reducerPath: "auth",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hala-food-server-zg6m.vercel.app",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (user) => ({
        url: "/user/registration",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    userLogin: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    getUsers: builder.query({
      query: () => "/user",
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useUserRegistrationMutation,
  useUserLoginMutation,
  useGetUsersQuery,
} = authSlice;
