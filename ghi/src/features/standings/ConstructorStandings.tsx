import { useGetConstructorStandingsQuery } from "./StandingsAPI";
import { ConstructorStandingsPosition } from './StandingsAPI'


export const ConstructorStandings = () => {
    const  { data: constructorStandingsData, isLoading} = useGetConstructorStandingsQuery()
    console.log(constructorStandingsData)
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Position</td>
                        <td>Team Name</td>
                        <td>Team Points</td>
                    </tr>
                </thead>
                <tbody>
                    {constructorStandingsData?.MRData.StandingsTable
                    .StandingsLists[0].ConstructorStandings?.map(
                        (position: ConstructorStandingsPosition) => {
                            return (
                                <tr key={position.position}>
                                    <td>{position.position}</td>
                                    <td>{position.Constructor.name}</td>
                                    <td>{position.points > 0 ? position.points : '-'}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
  )
}