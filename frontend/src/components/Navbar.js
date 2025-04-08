import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Cookies from 'js-cookie'; // Importing js-cookie for cookie handling

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const userId = localStorage.getItem('userId');

    useEffect(() => {
        const getLoggedIn = async () => {
            const response = await fetch(`http://localhost:8080/validate`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            if (response.ok) {
              setIsLoggedIn(true);
            } else {
              setIsLoggedIn(false);
            }
        };
        getLoggedIn();
    });

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

  const handleProfileClick = () => {
    navigate("/profile");
  }

  const handleLogout = async () => {
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST", 
        credentials: "include", 
      });

      setIsLoggedIn(false);
      navigate("/");
  };

  const pages = [
    { "name": "All", "handler": handleAllClick },
    { "name": "Movies", "handler": handleMoviesClick },
    { "name": "Shows", "handler": handleTVShowsClick }
  ];

  const userPages = isLoggedIn
    ? [
        { "name": "Profile", "handler": handleProfileClick },
        { "name": "Logout", "handler": handleLogout }
      ]
    : [
        { "name": "Sign up", "handler": handleSignupClick },
        { "name": "Login", "handler": handleLoginClick }
      ];

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
          {pages.map((page) => (
            <Typography key={page.name} variant="h6" onClick={page.handler}>{page.name}</Typography>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", width: "100%" }}>
          {userPages.map((page) => (
            <Typography key={page.name} variant="h6" onClick={page.handler}>{page.name}</Typography>
          ))}
        </Stack>

        <Stack direction="row" sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            size="large"
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={anchorEl}
            onClose={handleCloseMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            {(pages.concat(userPages)).map((page) => (
              <MenuItem key={page.name} onClick={page.handler}>
                <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
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
