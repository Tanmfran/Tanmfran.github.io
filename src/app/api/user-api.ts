import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserResponse } from "../types/user";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query<UserResponse, void>({
      query: () => "",
    }),
  }),
});

export const { useGetUserQuery } = userApi;
