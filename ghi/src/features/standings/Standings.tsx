import { useState } from "react";
import { DriverStandings } from "./DriverStandings";
import { ConstructorStandings } from "./ConstructorStandings";
import { Podium } from "./Podium";

function Standings() {
    const [displayDriver, setDisplayDriver] = useState<boolean>(true)
    return (
        <div className="webpage-center">
            <div>
                <button onClick={() => setDisplayDriver(true)}>Drivers</button>
                <button onClick={() => setDisplayDriver(false)}>Constructors</button>
            </div>
            <div className="standings-boxes">
            {displayDriver ? <DriverStandings /> : <Podium />}
            {!displayDriver ? <ConstructorStandings /> : <Podium />}
            </div>
        </div>
    );
}

export default Standings;