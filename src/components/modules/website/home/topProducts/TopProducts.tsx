import Image from "next/image";
import React from "react";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Product from "./Product";
// whole page title navbar and 8 cards and product compnent write in product file 
export default function TopProducts() {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 } }}>
    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}>
      {/* title */}
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: "24px", sm: "32px" }, textAlign: "left" }}>
          Top Products
        </Typography>

      {/* navbar has color bullets */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4, mr: 7 }}>
          <Link href="/all" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
              }}>

              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#FC9D9D",
                  position: "absolute",
                  left: -15,
                }}
              />
              <Typography
                sx={{
                  textDecoration: "line-through",
                  textDecorationColor: "#FC9D9D",
                  fontWeight: 600,
                  fontSize: "14px",
                }}>
                ALL
              </Typography>
            </Box>
          </Link>

          <Link href="/boys-collection" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
              }}>
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#FC9D9D",
                  position: "absolute",
                  left: -15,
                }}
              />
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                Boys Collection
              </Typography>
            </Box>
          </Link>

          <Link href="/girls-collection" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
              }}>
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#FC9D9D",
                  position: "absolute",
                  left: -15,
                }}
              />
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                Girls Collection
              </Typography>
            </Box>
          </Link>

          <Link href="/shoe-collection" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
              }}>
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#FC9D9D",
                  position: "absolute",
                  left: -15,
                }}
              />
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                Shoe Collection
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>

     {/* 8 card */}
      <Grid container spacing={2}>
     
        <Grid sx={{xs:12,sm:6,md:3,lg:3}} >
          <Product />
        </Grid>
       
      </Grid>
    </Box>
  );
}
