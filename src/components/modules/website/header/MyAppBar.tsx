
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
import Link from 'next/link'

const MyAppBar: React.FC = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar  position="static" sx={{width:"100%",background:"#FFF",boxShadow:" 0px 4px 20px 0px rgba(48, 57, 96, 0.15)"}}>
      <Toolbar>
        {/* Left Side: Logo */}
        <Box sx={{  display: 'flex', justifyContent:"space-between",paddingLeft:"200px" }}>
        <Image
      src="/assets/images/logo.jpg"
      width={50}
      height={50}
      alt="Picture of the author"
    
    />
    <Typography sx={{ xs:"none", sm:"none", mx:2,fontSize:"30px",fontStyle:"italic",color:"black", fontWeight: "800"}}>Trali</Typography>

        </Box>

        {/* Middle: Links */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h6" sx={{ mx: 4}}>
            <Link href="/" style={{ color: '#05297F', textDecoration: 'none',fontSize:"18px" }}>Home</Link>
            </Typography>
            <Typography variant="h6" sx={{ mx: 4 }}>
            <Link href="/" style={{ color: '#252525', textDecoration: 'none',fontSize:"18px" }}>Pages</Link>
            </Typography>
            <Typography variant="h6" sx={{ mx: 4 }}>
            <Link href="/" style={{ color: '#252525', textDecoration: 'none',fontSize:"18px" }}>Blog</Link>
            </Typography>
            <Typography variant="h6" sx={{ mx: 4 }}>
            <Link href="/" style={{ color: '#252525', textDecoration: 'none',fontSize:"18px" }}>Contact</Link>
            </Typography>
          </Box>
        )}

        {/* Right Side: Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', paddingRight:"200px" }}>
          <IconButton aria-label="home">
            <AccountCircleOutlinedIcon sx={{width:"24px", height:"24px"}}  />
          </IconButton>
          <IconButton  aria-label="about">
            <FavoriteBorderOutlinedIcon sx={{width:"24px", height:"24px"}} />
          </IconButton>
          <IconButton  aria-label="contact">
            <BackHandOutlinedIcon sx={{width:"24px", height:"24px"}} />
          </IconButton>
          <IconButton  aria-label="search">
            <ShoppingCartOutlinedIcon sx={{width:"24px", height:"24px"}} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;