import { Avatar, Box, Divider, Stack, Typography, styled, Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const StyledFooter = styled(Box)(({theme})=> ({
    minHeight:'30vh',
    background: theme.palette.primary.main,
    padding: theme.spacing(5),
    paddingLeft:theme.spacing(15),
    paddingRight:theme.spacing(15), 
}))
const StyledAvatar = styled(Avatar)(({theme})=> ({
  background:'#272727',
  height:'50px',
  width:'50px',
  transition: 'transform 0.8s ease',
  '&:hover': {
    transform: 'rotate(360deg)',
    background:theme.palette.secondary.main,
    color:'#000'

  },

}))
const Footer = () => {
  
  return (
    <StyledFooter>
        <Box
        sx={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center'
        }}
        >

        <Box color="#fff">
          <Stack>
            <Box sx={{display:'flex', justifyContent:'center', mb:2}}>
            <Avatar sx={{height:'70px', width:'70px', background:'#fff'}} />
            </Box>
            <Typography>
              Company Name
            </Typography>
          </Stack>
        </Box>
        <Box color="#fff">
          <Stack>
            <Typography variant='h4' fontWeight="bold" sx={{mb:2}}>
              Useful Links
            </Typography>
            <Typography sx={{mb:1}}>
              Marketplace
            </Typography>
            <Typography sx={{mb:1}}>
              Buy a product
            </Typography>
            <Typography sx={{mb:1}}>
              Sell a product
            </Typography>
            <Typography sx={{mb:1}}>
              Buyer's FAQ
            </Typography>
            <Typography sx={{mb:1}}>
              Seller's FAQ
            </Typography>
          </Stack>
        </Box>
        <Box color="#fff">
        <Stack>
            <Typography variant='h4' fontWeight="bold" sx={{mb:2}}>
              Site Links
            </Typography>
            <Typography sx={{mb:1}}>
              Marketplace
            </Typography>
            <Typography sx={{mb:1}}>
              Buy a product
            </Typography>
            <Typography sx={{mb:1}}>
              Sell a product
            </Typography>
            <Typography sx={{mb:1}}>
              Buyer's FAQ
            </Typography>
            <Typography sx={{mb:1}}>
              Seller's FAQ
            </Typography>
          </Stack>
        </Box>
        <Box color="#fff">
        <Stack>
            <Typography variant='h4' fontWeight="bold" sx={{mb:2}}>
              Subscribe
            </Typography>
            <Typography sx={{mb:1}}>
              Subscribe to newsletter
            </Typography>
            <Typography variant='h4' fontWeight="bold" sx={{mb:2}}>
              Chat
            </Typography>
            <Typography sx={{mb:1}}>
              Live Chat
            </Typography>
          </Stack>
        </Box>
        </Box>
        <Divider sx={{background:'#fff', mt:2, mb:2}}/>
        <Box color="#fff" sx={{display:'flex', justifyContent:'center'}}>
         <Typography>Company Name Inc. 2023 &copy; All rights reserved  </Typography>
         <Typography sx={{ml:1}}>
          |
         </Typography>
         <Typography sx={{ml:1, color:'#2dc799'}}> Privacy Policy </Typography>
         <Typography sx={{ml:1}}>
          |
         </Typography>
         <Typography sx={{ml:1, color:'#2dc799'}}> Terms and Conditions </Typography>

        </Box>
        <Box sx={{color:"#fff", display:'flex', justifyContent:'center', mt:4}}>
          <Stack spacing={3} direction="row">
                  <Tooltip title="Instagram" sx={{cursor:'pointer'}}>
          <StyledAvatar>
            <InstagramIcon sx={{ fontSize: '2rem' }} />
          </StyledAvatar>
        </Tooltip>

        <Tooltip title="Facebook" sx={{cursor:'pointer'}}>
          <StyledAvatar>
            <FacebookIcon sx={{ fontSize: '2rem' }} />
          </StyledAvatar>
        </Tooltip>

        <Tooltip title="Twitter" sx={{cursor:'pointer'}}>
          <StyledAvatar>
            <TwitterIcon sx={{ fontSize: '2rem' }} />
          </StyledAvatar>
        </Tooltip>

        <Tooltip title="LinkedIn" sx={{cursor:'pointer'}}>
          <StyledAvatar>
            <LinkedInIcon sx={{ fontSize: '2rem' }} />
          </StyledAvatar>
        </Tooltip>

          </Stack>
        </Box>
    </StyledFooter>
  )
}

export default Footer
