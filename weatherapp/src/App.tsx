import './App.css';
import SideBar from './components/SideBar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';

function App() {
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
        <SideBar />
        <Grid size="grow">
          <div>
            <h1 className="top-0 w-100 text-center">The weather!</h1>
          </div>
        </Grid>
      </Grid>

    </>
  );
}

export default App;
