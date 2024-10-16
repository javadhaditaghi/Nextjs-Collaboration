
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
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'

const MyAppBar: React.FC = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{background:"#FFF",boxShadow:" 0px 4px 20px 0px rgba(48, 57, 96, 0.15)"}}>
      <Toolbar>
        {/* Left Side: Logo */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Image
      src="/assets/images/logo.jpg"
      width={50}
      height={50}
      alt="Picture of the author"
    />
        </Box>

        {/* Middle: Links */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/" style={{ color: '#252525', textDecoration: 'none', fontSize:"18px" }}>Home</a>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/about" style={{ color: '#252525', textDecoration: 'none',fontSize:"18px" }}>Pages</a>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/services" style={{ color: '#252525', textDecoration: 'none', fontSize:"18px" }}>Blog</a>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <a href="/contact" style={{ color: '#252525', textDecoration: 'none',fontSize:"18px" }}>Contact</a>
            </Typography>
          </Box>
        )}

        {/* Right Side: Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="home">
            <AccountCircleOutlinedIcon sx={{width:"24px", height:"24px"}}  />
          </IconButton>
          <IconButton  aria-label="about">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton  aria-label="contact">
            <BackHandOutlinedIcon />
          </IconButton>
          <IconButton  aria-label="search">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;