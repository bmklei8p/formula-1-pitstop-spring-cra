import { useGetDriverStandingsQuery } from "../../app/ergastApi";

function DriverStandings() {
    const body = useGetDriverStandingsQuery();
    return (
        <div>
            <table>
                <thead>
                    <td>Driver</td>
                </thead>
                <tbody>
                    {body.MRData.StandingsTable.StandingsLists.DriverStandings.map((driver) => {
                        return (
                            <tr>{driver.Driver.driverId}</tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DriverStandings;