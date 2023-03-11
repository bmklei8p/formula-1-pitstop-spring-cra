import { useState } from "react";
import { DriverStandings } from "./DriverStandings";
import { ConstructorStandings } from "./ConstructorStandings";
import { Podium } from "./Podium";


function Standings() {
    const [displayDriver, setDisplayDriver] = useState<boolean>(true)
    return (
        <div className="webpage-center">
            <h1 className="standings-h1">Standings</h1>
            {/* <div className="standings-boxes">
                <div className="standings-table-box">
                    <button onClick={() => setDisplayDriver(!displayDriver)}>Drivers</button>
                </div>
                <div className="standings-table-box">
                    <button onClick={() => setDisplayDriver(!displayDriver)}>Constructors</button>
                </div>
            </div> */}
            <div className="standings-boxes">
            {displayDriver ? <DriverStandings /> : <Podium />}
            {!displayDriver ? <ConstructorStandings /> : <Podium />}
            </div>
        </div>
    );
}

export default Standings;