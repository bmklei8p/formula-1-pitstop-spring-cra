import { useGetDriverStandingsQuery } from "./StandingsAPI";
import { DriverStandingsPosition } from './StandingsAPI'


export const DriverStandings = () => {
    // console.log('Performing useGetDriverStandingsQuery')
    // const  { data: driverStandingsData, isLoading} = useGetDriverStandingsQuery()
    // if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Position</td>
                        <td>Drivers Name</td>
                        <td>Points</td>
                    </tr>
                </thead>
                {/* <tbody>
                    {driverStandingsData?.MRData.StandingsTable
                    .StandingsLists[0].DriverStandings?.map(
                        (position: DriverStandingsPosition) => {
                            return (
                                <tr key={position.position}>
                                    <td>{position.position}</td>
                                    <td>{position.Driver.givenName} {position.Driver.familyName}</td>
                                    <td>{position.points > 0 ? position.points : '-'}</td>
                                </tr>
                            );
                        })}
                </tbody> */}
            </table>
        </div>
  )
}
