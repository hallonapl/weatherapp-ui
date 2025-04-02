import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';


function SideBar({ setLocation }: { setLocation: (location: string) => void }) {

    return (
        <Grid direction="column">
            <h2 className='text-center align-top'>Cities</h2>
            <ul className='list-group'>
                <li className='list-group-item'><Button variant="outlined" onClick={() => setLocation('Rome')}>Rome</Button></li>
                <li className='list-group-item'><Button variant="outlined" onClick={() => setLocation('London')}>London</Button></li>
                <li className='list-group-item'><Button variant="outlined" onClick={() => setLocation('Paris')}>Paris</Button></li>
                <li className='list-group-item'><Button variant="outlined" onClick={() => setLocation('Berlin')}>Berlin</Button></li>
                <li className='list-group-item'><Button variant="outlined" onClick={() => setLocation('Madrid')}>Madrid</Button></li>
            </ul>
        </Grid>
    );
};

export default SideBar;