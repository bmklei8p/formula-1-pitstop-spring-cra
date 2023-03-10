import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Standings from './features/standings/Standings';
import TracksMap from './features/tracks/TracksMap';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/tracks" element={<TracksMap />} />
            <Route path="/standings" element={<Standings />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
