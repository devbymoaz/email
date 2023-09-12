import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom/dist'
import AddIcon from '@mui/icons-material/Add';
const NavBarLinks = () => {
  return (
    <div>
       <Button

       variant='contained'
      sx={{color:'#fff', textTransform:'none',background:'#2dc799', 
      '&:hover': {
        background:'#0a8460'
      }
    }}
      > Login</Button>
      
       <Button
       variant='outlined'
      sx={{color:'#fff', textTransform:'none', borderColor:'#2dc799',
      ml:2,
      '&:hover': {
        borderColor:'#0a8460'
      }
    }}
      > Register</Button>
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
    </div>
  )
}

export default NavBarLinks
