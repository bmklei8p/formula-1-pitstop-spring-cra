import React from 'react'
import { useGetDriverStandingsQuery } from "./StandingsAPI";


export const DriverStandings = () => {
    const  { data: driverStandingsData } = useGetDriverStandingsQuery()
    return (
        <div>DriverStandings</div>
  )
}
