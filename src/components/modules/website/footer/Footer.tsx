import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  getInTouchItems,
  categoriesItem,
  paymentMethodItem,
  socialsItem,
  menuTypes,
  paymentTypes,
  socialTypes,
} from "@/data/footerData";

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
          sx={{
            marginTop: "98px",
            marginBottom: "88px",
            marginX: "auto",
            paddingX: "30px",
          }}
        >
          {/* 1-1 About Grid , it has logo, phone information and socials */}
          <Grid id="about" size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box>
              <Link href="/">
                <Image
                  src="/assets/images/icons/logo.png"
                  alt="Trali store"
                  height={59}
                  width={138}
                />
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
                <Image
                  src="/assets/images/icons/phone.png"
                  alt="phone-icon"
                  width={41}
                  height={41}
                />
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
                <Link href="tel:+18006565222">
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
                </Link>
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
            <Grid container sx={{ display: "flex", gap: "30px" }}>
              {/* all box component has height & width, because img of icon are not 1:1 (size) & the middle box element has margin for spacing */}

              {socialsItem.map((social: socialTypes) => (
                <Box
                  key={social.id}
                  sx={{ height: "20px", width: "20px", alignContent: "center" }}
                >
                  <Link href={social.href} target="_blank">
                    <Image
                      src={social.src}
                      alt={social.title}
                      width={social.width}
                      height={social.height}
                    />
                  </Link>
                </Box>
              ))}
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
              {getInTouchItems.map((item: menuTypes) => (
                <li key={item.id}>
                  <Link href={item.href} target="_blank">
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "24px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </li>
              ))}
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
              {categoriesItem.map((category: menuTypes) => (
                <li key={category.id}>
                  <Link href={category.href} target="_blank">
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "24px",
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Link>
                </li>
              ))}
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
              {paymentMethodItem.map((method: paymentTypes) => (
                <Box key={method.id}>
                  <Link href={method.href} target="_blank">
                    <Image
                      src={method.src}
                      alt={method.title}
                      width={50}
                      height={50}
                    />
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* End of first child of container */}

      {/* 2- Start second child of container, that is just for background */}
      <Grid
        container
        sx={{
          backgroundColor: "primary.light",
          minHeight: "100px",
          paddingX: "30px",
        }}
      >
        {/* Grid of contents, - it has two Grid child - Copyrights & Menu  */}
        <Grid
          container
          size={10}
          columnSpacing={22}
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
