import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Standings from './features/standings/Standings';
import TracksMap from './features/tracks/TracksMap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<TracksMap />} />
            <Route path="/driverstandings" element={<Standings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
