// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DriverStanding } from "./standingsTypes";

// front-end api hit response
export interface StandingsListsReturn {
  DriverStandings: DriverStandingsPosition[] | null
  ConstructorStandings: ConstructorStandingsPosition[] | null
}
export interface DriverStandingsPosition {
  position: number,
  points: number,
  Driver: {
    givenName: string,
    familyName: string,
  }
  Constructors: {
    name: string,
  }
}
export interface ConstructorStandingsPosition {
  position: number,
  points: number,
  Constructor: {
    name: string,
  }
}
interface Standings {
    MRData: {
      StandingsTable: {
        StandingsLists: StandingsListsReturn[]
      }
    }
}

// type DriverStandingsResponse = Standings;
// type ConstructorStandingsResponse = Standings;

// trying with spring boot backend:

// export interface driverPositionResponse {
//   familyName: string,
//   givenName: string,
//   points: number,
//   position: number,
//   constructor: string,
// }
// export interface DriverStandingsApiResponse {
//   driverStandings: driverPositionResponse[];
// }

// type DriverStandingsResponse = DriverStandingsApiResponse;
interface DriverStandingsResponse {
  driverStandings: DriverStanding[];
}
export const standingsApi = createApi({
  reducerPath: "standingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081/api/",
  }),
  endpoints: (builder) => ({
    getDriverStandings: builder.query<DriverStandingsResponse, void>({
      query: () =>
        'driver_standings',
    }),
    // getConstructorStandings: builder.query<ConstructorStandingsResponse, void>({
    //   query: () =>
    //   `f1/current/constructorStandings.json`,
    //   providesTags: ["Constructor Standings"],
    // }),
    // getString: builder.query<String, void>({
    //   query: () =>
    //   `hello`,
    // }),
  }),
});

// type that worked to hit api on front end
// export const standingsApi = createApi({
//     reducerPath: "standings",
//     baseQuery: fetchBaseQuery({
//       baseUrl: "http://ergast.com/api/" as string,
//     }),
//     tagTypes: ["Driver Standings", "Constructor Standings"],
//     endpoints: (builder) => ({
//       getDriverStandings: builder.query<DriverStandingsResponse, void>({
//         query: () =>
//           `f1/current/driverStandings.json`,
//           providesTags: ["Driver Standings"],
//       }),
//       getConstructorStandings: builder.query<ConstructorStandingsResponse, void>({
//         query: () =>
//         `f1/current/constructorStandings.json`,
//         providesTags: ["Constructor Standings"],
//       }),
//     }),
//   });

  export const {
    useGetDriverStandingsQuery,
    // useGetConstructorStandingsQuery,
  } = standingsApi;