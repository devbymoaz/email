import { AppBar, Toolbar  ,Typography, Box, styled, Stack, Button } from '@mui/material'
import { makeStyles, } from '@mui/styles'
import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import Body from './Body'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import Footer from './Footer'
import ListAltIcon from '@mui/icons-material/ListAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TimelineIcon from '@mui/icons-material/Timeline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductListing from './ProductListing'
const useStyles = makeStyles((theme) => ({
    root:{
      minHeight:'90vh',
      background:'#e2e2e2',
    }
}))
const StyledBox = styled(Box)(({theme})=> ({
  height:'25vh',
  padding:theme.spacing(5),
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  background:theme.palette.secondary.main,
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between'
}))
const StyledBox2 = styled(Box)(({theme})=> ({
  minHeight:'70vh',
  padding:theme.spacing(5),
  background:'#ffff',
  // display:'flex',
  // alignItems:'center',
  // justifyContent:'space-between',
  background:'#e2e2e2'
}))
const Landing = () => {
    const classes = useStyles()
    const data = [
      {id:1, icon: <ListAltIcon sx={{color:'#fff', fontSize:'3.5rem'}}/>, title:'Current Listings', value:'52'},
      {id:2, icon: <MonetizationOnIcon sx={{color:'#fff', fontSize:'3.5rem'}}/>, title:'Average Site Multiple', value:'x35'},
      {id:3, icon: <TimelineIcon sx={{color:'#fff', fontSize:'3.5rem'}} />, title:'Product Selling Success Rate', value:'97%'},
      {id:3, icon: <ShoppingCartIcon sx={{color:'#fff', fontSize:'3.5rem'}} />, title:'Total Products Sold', value:'1152'},


    ]
  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
        <Box className={classes.root}>
          <Box sx={{pt:10}}>
            <Box sx={{p:4, mt:3}}>
              <Typography variant='h2' sx={{width:'40%', fontSize:'4.5rem'}} fontWeight="bold">
                Buy & Sell your Products here
              </Typography>
              <Typography variant='h6' sx={{width:'40%',ml:2}}>
                We help you to buy and sell products quickly
              </Typography>
              
              <Button
              endIcon={
                  <ArrowForwardIcon />
              }
              variant='contained'
              sx={{mt:5,
              width:"250px",
              height:'60px',
              borderRadius:'25px'
              }}
              >
                All Products
              </Button>
            </Box>
          </Box>
        </Box>
        <StyledBox>
          {
            data.map((val, ind)=> {
              return(
                <Box >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    {val.icon}
                </Box>
                    <Typography sx={{mt:3, color:'#fff'}} variant='h6' fontWeight="bold"> {val.title}</Typography>
                    <Typography textAlign="center" sx={{color:'#fff', fontSize:'1.25rem'}}> {val.value} </Typography>
              </Box>
              )
            })
          }
        </StyledBox>
        <StyledBox2>
          <ProductListing />
        </StyledBox2>
        <Footer /> 
    </Page>
  )
}

export default Landing
