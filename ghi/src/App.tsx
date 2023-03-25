import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Standings from './features/standings/Standings';
import TracksMap from './features/tracks/TracksMap';
import { Container, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { Navbar } from './features/navbar/Navbar';
import { useAppSelector } from './app/hooks'
import { useMemo } from 'react';
import  {themeOptions} from './styles/theme/theme'


function App() {
  const mode = useAppSelector((state) => state.mode.darkMode);
  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Navbar />
        <Container maxWidth={'xl'}>
            <Routes>
              <Route path="/tracks" element={<TracksMap />} />
              <Route path="/standings" element={<Standings />} />
            </Routes>
          </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
