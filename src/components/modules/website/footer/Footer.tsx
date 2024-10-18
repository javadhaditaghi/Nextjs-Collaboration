import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";


const Footer = () => {
  return (
    //  footer has a Container mui component & 2 child of Grid component.
    <Container
      component="footer"
      sx={{ color: "#666", fontFamily: "hind" }}
      disableGutters
      maxWidth={false}
    >
      {/* 1- Start first child of container, that is just for background - it has a Grid child to keep the contents*/}
      <Grid
        container
        sx={{ backgroundColor: "background.default", minHeight: "312px" }}
      >
        {/* Grid of contents, has 4 Grid child - (About - Get in touch -Categories - Payment methods)  */}
        <Grid
          container
          size={10}
          columnSpacing={12}
          rowGap={{ xs: 8, lg: 6 }}
          display="flex"
          alignContent="center"
          sx={{ marginTop: "98px", marginBottom: "88px", marginX: "auto" }}
        >
          {/* 1-1 About Grid , it has logo, phone information and socials */}
          <Grid id="about" size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box>
              <Link href="/">
                <Image src="/assets/images/icons/logo.png" alt="logo-icon" height={59} width={138} />
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                marginTop: "28px",
                color: "#252525",
              }}
            >
              <Box>
                <Image src="/assets/images/icons/phone.png" alt="phone-icon" width={41} height={41} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "24px",
                  }}
                >
                  CALL US FREE
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  +1 800 6565 222
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "24px",
                marginTop: "17px",
                marginBottom: "30px",
              }}
            >
              Mon-Sun: 9:00am - 9:00pm
            </Typography>
            <Grid container>
              {/* all box component has height & width, because img of icon are not 1:1 (size) & the middle box element has margin for spacing */}
              <Box sx={{ height: "20px", width: "20px" }}>
                <Image src="/assets/images/icons/instagram.png" alt="instagram-icon" width={18} height={19}/>
              </Box>
              <Box
                sx={{
                  height: "20px",
                  width: "20px",
                  alignContent: "center",
                  marginX: "30px",
                }}
              >
                <Image src="/assets/images/icons/twitter.png" alt="twitter-icon" width={20} height={17} />
              </Box>
              <Box sx={{ height: "20px", width: "20px" }}>
                <Image src="/assets/images/icons/facebook.png" alt="facebook-icon" width={11} height={21} />
              </Box>
            </Grid>
          </Grid>
          {/* 1-2 Get in touch Grid , it has ul & 5 li links , all same */}
          <Grid
            container
            direction="column"
            size={{ xs: 12, sm: 6, lg: 3 }}
            sx={{ color: "#666" }}
          >
            <Typography
              sx={{
                color: "#252525",
                fontSize: "22px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "28px",
              }}
            >
              Get In Touch
            </Typography>
            <Box
              component="ul"
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <li>
                <Link href="#">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Delivery Information
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Discount
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    100% Purchase Protection
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Returns Centre
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Your Account
                  </Typography>
                </Link>
              </li>
            </Box>
          </Grid>
          {/* 1-3 Categories Grid , it has ul & 5 li links , all same */}
          <Grid
            container
            id="category"
            direction="column"
            size={{ xs: 12, sm: 6, lg: 3 }}
            sx={{ color: "#666" }}
          >
            <Typography
              sx={{
                color: "#252525",
                fontSize: "22px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "28px",
              }}
            >
              Categories
            </Typography>
            <Box
              component="ul"
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <li>
                <Link href="">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Woman
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Men
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Accessories
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Sport Shoes
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "24px",
                    }}
                  >
                    Clothes
                  </Typography>
                </Link>
              </li>
            </Box>
          </Grid>
          {/* 1-4 Payments Grid , it has 4 box for img , all same */}
          <Grid id="payments" size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography
              sx={{
                color: "#252525",
                fontSize: "22px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "28px",
              }}
            >
              Payment Method
            </Typography>
            <Box sx={{ display: "flex", marginTop: "20px", gap: "20px" }}>
              <Box>
                <Image src="/assets/images/icons/credit-card-visa.png" alt="credit-card-visa-icon" width={50} height={50} />
              </Box>
              <Box>
                <Image src="/assets/images/icons/paypal.png" alt="papal-icon" width={50} height={50}/>
              </Box>
              <Box>
                <Image src="/assets/images/icons/american-express.png" alt="american-express-icon" width={50} height={50}/>
              </Box>
              <Box>
                <Image src="/assets/images/icons/maestro.png" alt="maestro-icon" width={50} height={50}/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* End of first child of container */}

      {/* 2- Start second child of container, that is just for background */}
      <Grid
        container
        sx={{ backgroundColor: "primary.light", minHeight: "100px" }}
      >
        {/* Grid of contents, - it has two Grid child - Copyrights & Menu  */}
        <Grid
          container
          size={10}
          columnSpacing={12}
          display="flex"
          alignContent="center"
          sx={{ marginX: "auto" }}
        >
          {/*------------- 2-1 Copyrights Grid------------ */}
          <Grid size={{ md: 6 }}>
            <Typography>
              Merkulove © Trali Template All rights reserved Copyrights{" "}
              {new Date().getFullYear()}
            </Typography>
          </Grid>
          {/*--------------- 2-2 Menu Grid ------------*/}
          <Grid
            size={{ md: 6 }}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
            // for responsive design, md and above it has half of parent size, lower than md shouldnot display(none), xs:0 doesnot working
          >
            {/* for menu, use ul that has 5 li and Divider between them, All same  */}
            <Box
              component="ul"
              sx={{
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <li>
                <Link href="/">
                  <Typography>Home</Typography>
                </Link>
              </li>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                flexItem
                sx={{ border: "#E5E5E5 solid 1px" }}
              />
              <li>
                <Link href="">
                  <Typography>Shop</Typography>
                </Link>
              </li>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                flexItem
                sx={{ border: "#E5E5E5 solid 1px" }}
              />
              <li>
                <Link href="">
                  <Typography>Blog</Typography>
                </Link>
              </li>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                flexItem
                sx={{ border: "#E5E5E5 solid 1px" }}
              />
              <li>
                <Link href="">
                  <Typography>About</Typography>
                </Link>
              </li>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                flexItem
                sx={{ border: "#E5E5E5 solid 1px" }}
              />
              <li>
                <Link href="">
                  <Typography>Contacts</Typography>
                </Link>
              </li>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* End of second child of container */}
    </Container>
  );
};

export default Footer;
