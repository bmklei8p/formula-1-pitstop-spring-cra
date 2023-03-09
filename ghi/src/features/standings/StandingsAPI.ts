import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface DriverStandings {
    id: number,
    name: string,
}

interface ConstructorStandings {
  id: number,
  name: string,
}

type DriverStandingsResponse = DriverStandings[];
type ConstructorStandingsResponse = ConstructorStandings[];

export const standingsApi = createApi({
    reducerPath: "Standings",
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.REACT_APP_ERGAST_API_URL as string,
    }),
    tagTypes: ["Driver Standings", "Constructor Standings"],
    endpoints: (builder) => ({
      getDriverStandings: builder.query<DriverStandingsResponse, void>({
        query: () =>
          `f1/current/driverStandings.json`,
          providesTags: ["Driver Standings"],
      }),
      getConstructorStandings: builder.query<ConstructorStandingsResponse, void>({
        query: () =>
        `f1/current/constructorStandings.json`,
        providesTags: ["Constructor Standings"],
      }),
    }),
  });

  export const {
    useGetDriverStandingsQuery,
    useGetConstructorStandingsQuery,
  } = standingsApi;