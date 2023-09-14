import { Box, Button } from '@mui/material';
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';
import { useTheme } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
const NavBarLinks = () => {
  const theme = useTheme();
  return (


    <Box  >
      <Button

        variant='contained'
        sx={{
          ml: 4,
          color: '#fff', textTransform: 'none', background: '#2dc799',
          '&:hover': {
            background: '#0a8460',

          },
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },

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
            },
            [theme.breakpoints.down('md')]: {
              display: 'none',
            },
          }}
        >

          Register

        </Button>
      </Link>

    </Box >
  );
};


export default NavBarLinks;
