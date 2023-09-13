import { AppBar, Toolbar, Box, Typography, TextField, styled, InputAdornment, Button, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import NavBarLinks from '../../layouts/Landing/NavBarLinks';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { KeyboardArrowDown } from '@mui/icons-material';
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
    borderWidth: '1px'
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff"
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff"
  },
  "& .MuiOutlinedInput-input": {
    color: "#fff",
    // fontSize:'1.25rem',
  },
  "&:hover .MuiOutlinedInput-input": {
    color: "#fff",
    // fontSize:'1.25rem',

  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    color: "#fff"
  },
  "& .MuiInputLabel-outlined": {
    color: "#fff"
  },
  "&:hover .MuiInputLabel-outlined": {
    color: "#fffff"
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "#fff"
  }
}));

const Header = () => {
  const [isAppBarFixed, setIsAppBarFixed] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileopen] = useState(false);
  const theme = useTheme();
  const handleMobileMenuOpen = () => {
    setIsMobileopen(true);
  };
  const handleMobileMenuClose = () => {
    setIsMobileopen(false);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsAppBarFixed(true);
      } else {
        setIsAppBarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  return (
    <div className="header-container">
      <AppBar
        sx={{
          pl: 10,
          // pr: 10,
          position: 'static',
          top: 0,
          zIndex: 1000,


        }}
      >
        <Toolbar>
          <Typography >
            Company Logo
          </Typography>
          <Box sx={{ ml: 4 }}>
            <StyledTextField size='small'
              autoComplete='off'
              placeholder='Search by name'
              label="Search Product"
              sx={{ ml: 2, width: '250px' }}
              InputProps={{
                style: {
                  borderRadius: '20px',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: '#fff' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            ml: 10, width: '350px', [theme.breakpoints.down('lg')]: {
              display: 'none'
            }
          }}>
            <Button
              sx={{ color: '#fff', textTransform: 'none', fontSize: '1.05rem' }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDown sx={{ ml: -1 }} />}
            >
              Services
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}
                sx={{
                  mt: -1,
                  '&:hover': {
                    backgroundColor: '#2dc799',
                    color: '#fff'
                  },
                }}
              >Buy Product</MenuItem>
              <MenuItem onClick={handleClose}
                sx={{
                  '&:hover': {
                    backgroundColor: '#2dc799',
                    color: '#fff'
                  },
                }}
              >Sell Product</MenuItem>
              <MenuItem onClick={handleClose}
                sx={{
                  mb: -1,
                  '&:hover': {
                    backgroundColor: '#2dc799',
                    color: '#fff',

                  },
                }}
              >Products Available</MenuItem>
            </Menu>
            |
            <Button sx={{
              color: '#fff',
              textTransform: 'none',
              fontSize: '1.05rem'
            }}>
              Blog
            </Button>
            |
            <Button
              sx={{ color: '#fff', textTransform: 'none', fontSize: '1.05rem' }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick2}
              endIcon={<KeyboardArrowDown sx={{ ml: -1 }} />}
            >
              About
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}
                sx={{
                  mt: -1,
                  '&:hover': {
                    backgroundColor: '#2dc799',
                    color: '#fff'
                  },
                }}
              >About Us</MenuItem>
              <MenuItem onClick={handleClose}
                sx={{
                  '&:hover': {
                    backgroundColor: '#2dc799',
                    color: '#fff'
                  },
                }}
              >Contact Us</MenuItem>
              <MenuItem onClick={handleClose}
                sx={{
                  mb: -1,
                  '&:hover': {
                    backgroundColor: '#2dc799',
                    color: '#fff',

                  },
                }}
              >Help</MenuItem>
            </Menu>
            |
            <Button sx={{
              color: '#fff',
              textTransform: 'none',
              fontSize: '1.05rem'
            }}>
              FAQ
            </Button>
          </Box>
          <IconButton
            color='inherit'
            aria-label="Open mobile menu"
            onClick={handleMobileMenuOpen}
            sx={{
              display: { lg: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='right'
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            <List>

              <ListItem button onClick={handleMobileMenuClose}>

                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button onClick={handleMobileMenuClose}>
                {/* <ListItemText primary="Sell Product" /> */}
              </ListItem>
              <ListItem button onClick={handleMobileMenuClose}>
                {/* <ListItemText primary="Products Available" /> */}
              </ListItem>
              {/* ...additional mobile items */}
            </List>

          </Drawer>
          <Box sx={{ ml: 12 }}>
            <NavBarLinks />
          </Box>
        </Toolbar>
      </AppBar>

    </div >
  );
};

export default Header;
