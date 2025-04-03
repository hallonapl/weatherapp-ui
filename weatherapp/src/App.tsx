import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Grid from '@mui/material/Grid2';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  const [location, setLocation] = useState<string | null>(null);
  return (
    <>
      {/* <header className="position-absolute top-0 w-100 text-center">
        <h1>The weather!</h1>
      </header> */}
      <Grid container spacing={3}
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <SideBar setLocation={ setLocation } />
        <Grid size="grow">
          <WeatherDisplay location={ location } />
        </Grid>
      </Grid>

    </>
  );
}

export default App;
