import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/reducers';
import { useDispatch } from 'react-redux';
import store from '../../Redux/store';

export default function NavBar({title}: {title: string}) {
    const navigate = useNavigate();
    const auth = store.getState().session.auth

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          { auth? <>
            <Button color="inherit" onClick={() => {navigate('/employees')}}>Employees</Button>
            <Button color="inherit" onClick={() => {navigate('/upload')}}>Upload</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
          : null }
        </Toolbar>
      </AppBar>
    </Box>
  );
}