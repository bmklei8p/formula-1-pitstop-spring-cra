import { useGetDriverStandingsQuery } from "./StandingsAPI";
import { useState } from "react";
import { DriverStandings } from "./DriverStandings";
import { ConstructorStandings } from "./ConstructorStandings";

type Driver = {
    id: number,
    name: string,
}


function Standings() {
    const [displayDriver, setDisplayDriver] = useState<boolean>(true)
    return (
        <div>
            {displayDriver ? <DriverStandings /> : <ConstructorStandings />}
        </div>
    );
}

export default Standings;