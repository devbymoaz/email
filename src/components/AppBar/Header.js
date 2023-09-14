import { AppBar, Toolbar, Box, Typography, TextField, styled, InputAdornment, Button, useTheme, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
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

  const dividerStyle = {
    borderRight: '1px solid #FFFFFF',
    height: '30px',
    margin: '0 10px',
  };
  // const isSmallScreen = theme.breakpoints.down('sm');
  const [isAppBarFixed, setIsAppBarFixed] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileopen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = theme.breakpoints.down('sm');
  const handleMobileMenuOpen = (event) => {
    event.stopPropagation();
    setIsMobileopen(!isMobileMenuOpen);
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
          ml: 'auto',
          // pr: 10,
          position: 'static',
          top: 0,
          zIndex: 1000,


        }}
      >
        <Toolbar>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',

            [theme.breakpoints.down('md')]: {
              justifyContent: 'flex-start',
              marginLeft: '-50px',
            },
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              justifyContent: 'flex-start',


            }
          }}>
            <Typography sx={{ fontSize: '0.7rem' }} >
              Company Logo
            </Typography>
          </Box>
          <Box sx={{
            ml: 4,
            [theme.breakpoints.down('lg')]: {
              ml: 'auto',

            },

          }}>
            <StyledTextField size='small'
              autoComplete='off'
              placeholder='Search by name'
              label="Search"
              sx={{
                ml: 2, width: '250px',
                [theme.breakpoints.down('lg')]: {
                  ml: 'auto',
                  width: '300px'
                },
                [theme.breakpoints.down('md')]: {
                  ml: 'auto',
                  width: '200px'
                },
                [theme.breakpoints.down('sm')]: {
                  // overflow: 'hidden',
                  width: '150px',
                  mr: '50px'
                },


              }}
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
            flexShrink: true,
            ml: 3, width: '350px', [theme.breakpoints.down('lg')]: {
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
            <div style={dividerStyle}></div>
            <Button sx={{
              color: '#fff',
              textTransform: 'none',
              fontSize: '1.05rem'
            }}>
              Blog
            </Button>
            <div style={dividerStyle}></div>
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
            <div style={dividerStyle}></div>
            <Button sx={{
              color: '#fff',
              textTransform: 'none',
              fontSize: '1.05rem'
            }}>
              FAQ
            </Button>
          </Box>
          {isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="Open mobile menu"
              onClick={handleMobileMenuOpen}
              sx={{
                position: 'absolute',
                right: '20px',
                top: '50%',

                transform: 'translateY(-50%)',
                display: { lg: 'none' },



              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box
            sx={{
              [theme.breakpoints.down('sm')]: {
                textAlign: 'left',
              },
              [theme.breakpoints.up('sm')]: {
                textAlign: 'right',
              },
            }}
          >
            <Drawer
              anchor='right'
              open={isMobileMenuOpen}
              onClose={handleMobileMenuClose}

            >
              <List
                sx={{
                  maxHeight: 'calc(100vh - 64px)', // Adjust the height as needed
                  overflowY: 'auto',
                }}>
                <ListItem button onClick={handleMobileMenuClose}>
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem button onClick={handleMobileMenuClose}>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button onClick={handleMobileMenuClose}>
                  <ListItemText primary="About" />
                </ListItem>
                {/* Submenu items for Services */}
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  sx={{ pl: 2 }} // Add left padding to indent subheadings
                >
                  <ListItemText primary="Buy Product" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  sx={{ pl: 2 }} // Add left padding to indent subheadings
                >
                  <ListItemText primary="Sell Product" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  sx={{ pl: 2 }} // Add left padding to indent subheadings
                >
                  <ListItemText primary="Products Available" />
                </ListItem>
                {/* Divider to separate Services and About subheadings */}
                <Divider />
                {/* Submenu items for About */}
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  sx={{ pl: 2 }} // Add left padding to indent subheadings
                >
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  sx={{ pl: 2 }} // Add left padding to indent subheadings
                >
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  sx={{ pl: 2 }} // Add left padding to indent subheadings
                >
                  <ListItemText primary="Help" />
                </ListItem>
                {/* ...additional mobile items */}
              </List>
            </Drawer>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'row' },
            justifyContent: 'flex-end',
            alignItems: 'center',
            [theme.breakpoints.up('sm')]: {

              ml: 'auto',
              mr: 5
            },
          }}>
            <NavBarLinks />
          </Box>
        </Toolbar>
      </AppBar>

    </div >
  );
};

export default Header;
