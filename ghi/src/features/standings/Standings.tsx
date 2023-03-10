import { useState } from "react";
import { DriverStandings } from "./DriverStandings";
import { ConstructorStandings } from "./ConstructorStandings";


function Standings() {
    const [displayDriver, setDisplayDriver] = useState<boolean>(false)
    return (
        <>
            {displayDriver ? <DriverStandings /> : <ConstructorStandings />}
        </>
    );
}

export default Standings;