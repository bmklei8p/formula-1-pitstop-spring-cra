// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export interface StandingsState {
  driversStandings: DriverStandingsPosition[],
  constructorsStandings: ConstructorStandingsPosition[]
}

export const initialState: StandingsState = {
  driversStandings: [],
  constructorsStandings: []
}
// addToDriversStandings: (state, action: PayloadAction<StandingsListsReturn>) => {
//  state.driversStandings.concat(action.payload.DriverStandings?)
// export const standingsSlice = createSlice({
//   name: 'standings',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//     .addCase()
//     }
//   }
// })

type DriverStandingsResponse = Standings;
type ConstructorStandingsResponse = Standings;

export const standingsApi = createApi({
    reducerPath: "standings",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://ergast.com/api/" as string,
    }),
    tagTypes: ["Driver Standings", "Constructor Standings"],
    endpoints: (builder) => ({
      getDriverStandings: builder.query<DriverStandingsResponse, void>({
        query: () =>
          "f1/current/driverStandings.json",
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