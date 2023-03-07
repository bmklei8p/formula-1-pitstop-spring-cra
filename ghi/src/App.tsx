import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverStandings from './features/standings/DriverStandings';
import TracksMap from './features/tracks/TracksMap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<TracksMap />} />
            <Route path="/driverstandings" element={<DriverStandings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
