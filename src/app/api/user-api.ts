import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { z } from "zod";

const User = z.object({
  results: z.array(
    z.object({
      username: z.string(),
      name: z.object({
        first: z.string(),
        last: z.string(),
      }),
    })
  ),
});

type User = z.infer<typeof User>;

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => "",
    }),
  }),
});

export const { useGetUserQuery } = userApi;
