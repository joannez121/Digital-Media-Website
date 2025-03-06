import React, { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    navigate("/");
  }

  const handleAllClick = () => {
    navigate("/all");
  }

  const handleMoviesClick = () => {
    navigate("/movies");
  }

  const handleTVShowsClick = () => {
    navigate("/tvshows");
  }

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  }

  const handleSignupClose = () => {
    setShowSignupForm(false);
  }

  const handleLoginClick = () => {
    setShowLoginForm(true);
  }

  const handleLoginClose = () => {
    setShowLoginForm(false);
  }

  const pages = [['All', handleAllClick], ['Movies', handleMoviesClick], ['Shows', handleTVShowsClick]];
  const userPages = [['Sign up', handleSignupClick], ['Login', handleLoginClick]];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#7fdaf2", color: "white" }}>
      <Toolbar>
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant='h6'
            onClick={handleHomeClick}
          >
            JMedia
          </Typography>
          {pages.map((page) => <Typography variant="h6" onClick={page[1]}>{page[0]}</Typography>)}
        </Stack>
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", width: "100%" }}>
          {userPages.map((page) => <Typography variant="h6" onClick={page[1]}>{page[0]}</Typography>)}
        </Stack>

        <Stack direction="row" sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {(pages.concat(userPages)).map((page) => (
              <MenuItem onClick={page[1]}>
                <Typography sx={{ textAlign: 'center' }}>{page[0]}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant='h6'
            onClick={handleHomeClick}
          >
            JMedia
          </Typography>
        </Stack>
      </Toolbar>

      <Signup show={showSignupForm} handleSignupClose={handleSignupClose} />
      <Login show={showLoginForm} handleLoginClose={handleLoginClose} handleSignupClick={handleSignupClick} />

    </AppBar>
  );
}
export default Navbar;