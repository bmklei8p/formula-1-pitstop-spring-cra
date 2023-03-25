import { useState } from "react";
import { DriverStandings } from "./DriverStandings";
import { ConstructorStandings } from "./ConstructorStandings";
import { Podium } from "./Podium";

import { Grid, Box, Button } from '@mui/material'


function Standings() {
    const [displayDriver, setDisplayDriver] = useState<boolean>(true)
    return (
        // <Box sx={}>
        //     <Grid container spacing={2}>
        //     {/* <div className="standings-boxes">
        //         <div className="standings-table-box">
        //             <button onClick={() => setDisplayDriver(!displayDriver)}>Drivers</button>
        //         </div>
        //         <div className="standings-table-box">
        //             <button onClick={() => setDisplayDriver(!displayDriver)}>Constructors</button>
        //         </div>
        //     </div> */}
        //         <div>
        //         {displayDriver ? <DriverStandings /> : <Podium />}
        //         {/* {!displayDriver ? <ConstructorStandings /> : <Podium />} */}
        //         </div>
        //     </Grid>
        // </Box>
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={6} sm={6}>
                <Button variant="outlined" onClick={() => setDisplayDriver(!displayDriver)}>Drivers</Button>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Button onClick={() => setDisplayDriver(!displayDriver)}>Constructors</Button>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Box>
                    {displayDriver ? <DriverStandings /> : <Podium />}
                </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Box>
                    {!displayDriver ? <ConstructorStandings /> : <Podium />}
                </Box>
            </Grid>
        </Grid>
    );
}

export default Standings;