import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ergastApi = createApi({
    reducerPath: "ergast",
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.REACT_APP_ERGAST_API_URL,
    }),
    endpoints: (builder) => ({
      getDriverStandings: builder.query({
        query: () =>
          `f1/current/driverStandings.json`,
      }),
      getConstructorStandings: builder.query({
        query: () =>
        `f1/current/constructorStandings.json`,
      }),
    }),
  });

  export const {
    useGetDriverStandingsQuery,
    useGetConstructorStandingsQuery,
  } = ergastApi;