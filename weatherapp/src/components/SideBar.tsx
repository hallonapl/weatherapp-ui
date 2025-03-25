import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

function SideBar() {
    return (
        <Grid direction="column">
            <h2 className='text-center align-top'>Stuff</h2>
            <Button variant="contained" className='mt-auto'>Refresh</Button>
        </Grid>
    );
};

export default SideBar;