"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import { Drawer, Divider } from "@mui/material";
import Heart from "@/components/custom/icons/heart";
import Scales from "@/components/custom/icons/scales";
import Person from "@/components/custom/icons/person";
import Trolley from "@/components/custom/icons/trolley";

const pages = ["home", "page", "Blog", "contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
    <AppBar
      position="static"
      sx={{
        width: "100%",
        background: "#FFF",
        boxShadow: " 0px 4px 20px 0px rgba(48, 57, 96, 0.15)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ margin: { sx: 0, md: "0 10%" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/assets/images/logo.jpg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <div>
                <Typography
                  sx={{
                    mx: 2,
                    fontSize: "30px",
                    fontStyle: "italic",
                    color: "#001138",
                    fontWeight: "800",
                    fontFamily: "Hind, sans-serif",
                    lineHeightL: "36px",
                  }}
                >
                  Trali
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{
                    mx: 2,
                    fontSize: "12px",
                    color: "#767676",
                    fontWeight: "400",
                    lineHeight: "14px",
                    fontFamily: "Hind, sans-serif",
                  }}
                >
                  wear store
                </Typography>
              </div>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              id="menu-appbar"
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Box sx={{ minWidth: "70vw", textAlign: "center" }}>
                <Typography
                  variant="h6"
                  component="div"
                  fontSize={30}
                  fontWeight={700}
                  sx={{ padding: "10px 0" }}
                >
                  Troli
                </Typography>
                <Divider />

                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        textAlign: "center !important",
                        textTransform: "uppercase",
                        display: "inline-block",
                        width: "100%",
                      }}
                    >
                      {page}
                      <Divider sx={{ padding: "4px 0px" }} />
                    </Typography>
                  </MenuItem>
                ))}
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                    height: "36px",
                    zIndex: "1111",
                  }}
                >
                  <Tooltip title="Open settings">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: "0 8px" }}
                    >
                      <Person />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Open settings">
                    <IconButton sx={{ p: "0 8px" }}>
                      <Heart />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Open settings">
                    <IconButton sx={{ p: "0 8px" }}>
                      <Scales />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Open settings">
                    <IconButton sx={{ p: "0 8px" }}>
                      <Trolley />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#252525",
                  display: "block",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontFamily: "Hind, sans-serif",
                  fontWeight: "700",
                  marginLeft: "70px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: "0 8px" }}>
                  <Box
                    sx={{
                      gap: "15px",
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <Person />
                  </Box>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: "0 8px" }}>
                  <Box
                    sx={{
                      gap: "15px",
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <Heart />
                  </Box>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: "0 8px" }}>
                  <Box
                    sx={{
                      gap: "15px",
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <Scales />
                  </Box>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: "0 8px" }}>
                  <Box
                    sx={{
                      gap: "15px",
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <Trolley />
                  </Box>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
