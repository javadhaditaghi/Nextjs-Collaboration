
"use client"; 

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';

const pages = ['home', 'page', 'Blog', "contact"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
     <AppBar position="static" sx={{width:"100%",background:"#FFF",boxShadow:" 0px 4px 20px 0px rgba(48, 57, 96, 0.15)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box sx={{  display: 'flex', justifyContent:"space-between",paddingLeft:"200px" }}>
          <Image    src="/assets/images/logo.jpg"
      width={50}
      height={50}
      alt="Picture of the author" 
      sx={{  display: { xs: 'none', md: 'flex' }, mr: 1}} />
          <Box sx={{display: { xs: 'none', sm: 'none', md: 'block' } }} >
    <div>
    <Typography sx={{ mx:2,fontSize:"30px",fontStyle:"italic",color:"#001138", fontWeight: "800", fontFamily:"Hind, sans-serif",lineHeightL:"36px"}}>Trali</Typography>
    </div>
    <div>
    <Typography sx={{  mx:2,fontSize:"12px",color:"#767676", fontWeight: "400",lineHeight:"14px",fontFamily:"Hind, sans-serif"}}>wear store</Typography>
    </div>
    </Box>
    </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign:"center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#252525", display: 'block', textDecoration: 'none',fontSize:"18px",fontFamily: 'Hind, sans-serif',fontWeight:"700",marginLeft:"70px"
              }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Box sx={{ paddingRight:"200px",gap:"15px",display: { xs: 'none', md: 'flex' } }}>
     
     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<g clip-path="url(#clip0_152_9162)">
<path d="M12.5 0C5.60762 0 0 5.60762 0 12.5C0 19.3923 5.60762 24.9999 12.5 24.9999C19.3923 24.9999 24.9999 19.3923 24.9999 12.5C24.9999 5.60762 19.3924 0 12.5 0ZM12.5 23.913C6.2065 23.913 1.08694 18.7934 1.08694 12.5C1.08694 6.2065 6.2065 1.08694 12.5 1.08694C18.7934 1.08694 23.913 6.2065 23.913 12.5C23.913 18.7934 18.7934 23.913 12.5 23.913Z" fill="#05297F"/>
<path d="M12.4998 11.957C8.60413 11.957 5.43457 15.1266 5.43457 19.0223C5.43457 19.3223 5.67807 19.5657 5.97807 19.5657C6.27806 19.5657 6.52156 19.3222 6.52156 19.0222C6.52156 15.7255 9.20306 13.044 12.4998 13.044C15.7965 13.044 18.478 15.7255 18.478 19.0222C18.478 19.3222 18.7215 19.5657 19.0215 19.5657C19.3215 19.5657 19.565 19.3222 19.565 19.0222C19.565 15.1266 16.3955 11.957 12.4998 11.957Z" fill="#05297F"/>
<path d="M12.5002 3.26172C10.4024 3.26172 8.6958 4.96822 8.6958 7.06608C8.6958 9.16394 10.4023 10.8704 12.5002 10.8704C14.598 10.8704 16.3045 9.16389 16.3045 7.06608C16.3045 4.96827 14.598 3.26172 12.5002 3.26172ZM12.5002 9.78345C11.0024 9.78345 9.78279 8.56389 9.78279 7.06608C9.78279 5.56827 11.0024 4.34871 12.5002 4.34871C13.998 4.34871 15.2175 5.56827 15.2175 7.06608C15.2175 8.56389 13.998 9.78345 12.5002 9.78345Z" fill="#05297F"/>
</g>
<defs>
<clipPath id="clip0_152_9162">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 22.6648C11.6583 22.6648 11.3289 22.541 11.0722 22.3162C10.1026 21.4684 9.16789 20.6717 8.34318 19.9689L8.33897 19.9653C5.92107 17.9048 3.83312 16.1254 2.38037 14.3725C0.756407 12.4129 0 10.5549 0 8.52521C0 6.55316 0.676207 4.73383 1.90393 3.4021C3.1463 2.05463 4.851 1.3125 6.70458 1.3125C8.08995 1.3125 9.35869 1.75049 10.4754 2.6142C11.039 3.05017 11.5499 3.58374 12 4.20612C12.4502 3.58374 12.9609 3.05017 13.5247 2.6142C14.6415 1.75049 15.9102 1.3125 17.2956 1.3125C19.149 1.3125 20.8538 2.05463 22.0962 3.4021C23.3239 4.73383 24 6.55316 24 8.52521C24 10.5549 23.2437 12.4129 21.6198 14.3723C20.167 16.1254 18.0793 17.9046 15.6617 19.9649C14.8355 20.6688 13.8993 21.4667 12.9276 22.3165C12.6711 22.541 12.3415 22.6648 12 22.6648ZM6.70458 2.71838C5.24834 2.71838 3.91058 3.29956 2.93737 4.35498C1.9497 5.42633 1.4057 6.90729 1.4057 8.52521C1.4057 10.2323 2.04016 11.759 3.4627 13.4755C4.83764 15.1346 6.88274 16.8774 9.25065 18.8954L9.25505 18.899C10.0829 19.6046 11.0213 20.4044 11.998 21.2584C12.9805 20.4027 13.9204 19.6016 14.7499 18.895C17.1176 16.877 19.1625 15.1346 20.5374 13.4755C21.9598 11.759 22.5943 10.2323 22.5943 8.52521C22.5943 6.90729 22.0503 5.42633 21.0626 4.35498C20.0896 3.29956 18.7516 2.71838 17.2956 2.71838C16.2288 2.71838 15.2494 3.0575 14.3846 3.7262C13.6139 4.32239 13.077 5.07605 12.7622 5.60339C12.6004 5.87457 12.3155 6.03644 12 6.03644C11.6845 6.03644 11.3996 5.87457 11.2377 5.60339C10.9231 5.07605 10.3863 4.32239 9.6154 3.7262C8.75059 3.0575 7.77116 2.71838 6.70458 2.71838Z" fill="black"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<g clip-path="url(#clip0_152_8522)">
<path d="M13.0078 19.5869V3.16113H19.3506C19.3506 3.16113 15.9082 12.5605 15.9717 12.6973C16.1719 14.7529 17.959 16.3301 20.083 16.3301C22.2021 16.3301 23.9355 14.7578 24.1846 12.707C24.2529 12.5654 20.8105 3.16113 20.8105 3.16113H21.4014V2.11133H13.0029V0.539062H11.9824V2.11133H3.58398V3.16113H4.17969C4.17969 3.16113 0.78125 12.3945 0.78125 12.502C0.883789 14.6553 2.71484 16.3301 4.90234 16.3301C7.08984 16.3301 8.92578 14.6504 9.07715 12.502C9.07715 12.4385 5.63477 3.16113 5.63477 3.16113H11.9775V19.582H0.537109V24.4648H24.4629V19.5869H13.0078ZM20.083 15.2852C18.6084 15.2852 17.3828 14.2891 17.0264 12.9756H23.1348C22.7832 14.2842 21.5625 15.2852 20.083 15.2852ZM17.1338 11.9795L20.0879 4.1084L22.9883 11.9795H17.1338ZM4.91699 15.2852C3.44238 15.2852 2.2168 14.2891 1.86035 12.9756H7.96875C7.6123 14.2842 6.3916 15.2852 4.91699 15.2852ZM2.01172 11.9795L4.96582 4.1084L7.86621 11.9795H2.01172ZM23.4961 23.4688H1.55762V20.6367H23.4961V23.4688Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_152_8522">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
<g clip-path="url(#clip0_152_8510)">
<path d="M23.5879 15.2902L25.4414 6.25117H7.17539L6.54063 3.24492L1.03594 0.558594L0.558594 1.5082L5.58594 3.93555L8.125 16.0621H22.8008C22.8008 16.0621 24.248 16.9711 23.6895 18.1187C23.4406 18.4742 23.0547 18.9109 22.3641 18.9109H7.75938V19.957H22.3691C23.3746 19.957 24.2227 19.4289 24.7 18.5859C25.6344 16.8391 23.5879 15.2902 23.5879 15.2902ZM9.02891 15.0008L7.38867 7.30234H24.1719L22.5824 15.0008H9.02891Z" fill="black"/>
<path d="M10.7761 21.4336C9.66396 21.4336 8.76514 22.3273 8.76514 23.4344C8.76514 24.5414 9.66396 25.4352 10.7761 25.4352C11.8882 25.4352 12.787 24.5414 12.787 23.4344C12.787 22.3273 11.8882 21.4336 10.7761 21.4336ZM10.7761 24.384C10.2479 24.384 9.82139 23.9625 9.82139 23.4344C9.82139 22.9062 10.2429 22.4848 10.7761 22.4848C11.3093 22.4848 11.7308 22.9062 11.7308 23.4344C11.7308 23.9625 11.3042 24.384 10.7761 24.384Z" fill="black"/>
<path d="M21.5769 21.4336C20.4647 21.4336 19.5659 22.3273 19.5659 23.4344C19.5659 24.5414 20.4647 25.4402 21.5769 25.4402C22.689 25.4402 23.6437 24.5465 23.5878 23.4395C23.5878 22.3324 22.689 21.4336 21.5769 21.4336ZM22.5315 23.4395C22.5315 23.9676 22.1101 24.3891 21.5769 24.3891C21.0437 24.3891 20.6222 23.9676 20.6222 23.4395C20.6222 22.9113 21.0437 22.4898 21.5769 22.4898C22.1101 22.4898 22.5823 22.9113 22.5315 23.4395Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_152_8510">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
     </Box>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
               
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center'}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyAppBar;