import { Box, Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';
import AddIcon from '@mui/icons-material/Add';
const NavBarLinks = () => {

  return (


    <Box sx={{ display: 'flex', flexDirection: 'row' }} >
      <Button

        variant='contained'
        sx={{
          ml: 4,
          color: '#fff', textTransform: 'none', background: '#2dc799',
          '&:hover': {
            background: '#0a8460'
          }
        }}
      > Login</Button>
      <Link to='/register'>
        <Button
          variant='outlined'
          sx={{
            color: '#fff', textTransform: 'none', borderColor: '#2dc799',
            ml: 1,
            '&:hover': {
              borderColor: '#0a8460'
            }
          }}
        >

          Register

        </Button>
      </Link>
      {/* <Button
       variant='contained'
       startIcon={
          <AddIcon />
       }
      sx={{color:'#fff', textTransform:'none', ml:3,
       background:'#EFC21A',
       borderRadius:'20px',
       '&:hover':{
        background:'#fff',
        color:'#EFC21A'
       }
    }}
      > Sell Ticket</Button> */}

    </Box>
  );
};


export default NavBarLinks;
