
"use client"; 

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMediaQuery } from '@mui/material';

const MyAppBar: React.FC = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left Side: Logo */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Box>

        {/* Middle: Links */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>Pages</a>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            </Typography>
          </Box>
        )}

        {/* Right Side: Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="home">
            <AccountCircleOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="about">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="contact">
            <BackHandOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="search">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;