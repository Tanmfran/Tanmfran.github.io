import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { z } from "zod";

export interface Person {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DobOrRegistered;
  registered: DobOrRegistered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}
export interface Name {
  title: string;
  first: string;
  last: string;
}
export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}
export interface Street {
  number: number;
  name: string;
}
export interface Coordinates {
  latitude: string;
  longitude: string;
}
export interface Timezone {
  offset: string;
  description: string;
}
export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
export interface DobOrRegistered {
  date: string;
  age: number;
}
export interface Id {
  name: string;
  value: string;
}
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

type ToDO = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
};

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getUser: builder.query<{ results: Person[] }, void>({
      query: () => "https://randomuser.me/api/",
    }),
    getThingToDo: builder.query<ToDO, void>({
      query: () => "http://www.boredapi.com/api/activity/",
    }),
  }),
});

export const { useGetUserQuery, useGetThingToDoQuery, useLazyGetUserQuery } =
  userApi;
