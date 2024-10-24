//Special Offers

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

const SpecialOffers = () => {
  return (

    <Grid >
      <Grid container spacing={2}  sx={{ justifyContent: "center", marginBottom:"120px" }}>
      {/* Left side image with text  */}
        <Grid size={6}>
          <Box
            position={"relative"}
            sx={{
              position: "relative",
              width: { xs: 350, md: 600, xl: 692 }, 
            height: { xs: 300, md: 400, xl: 450}  
    
            }}
          >
            {/* Let Image  */}
            <Image
              src="/assets/images/specialOffer.png"
              alt="Picture of the author"
              layout="fill" 
              objectFit="cover"
            />

            {/* Left side overlay text  */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "5%", sm: "10%" }, 
                color: "#252525",
                padding: "8px",
                borderRadius: "4px",
                width: { xs: "150px", sm: "180px", md: "250px" }, 
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "12px", sm: "14px" }, 
                  fontWeight: 600,
                  lineHeight: "128.571%",
                  textDecorationLine: "underline",
                  textTransform: "uppercase",
                }}
              >
                Flash Deal
              </Typography>
              <Typography
                variant="h6"
                fontSize={{ sm: "24px", md: "34px" }} 
                sx={{
                  lineHeight: "123.529%",
                  fontWeight: 700,
                  margin: "10px 0 30px 0",
                }}
              >
                Sale Up To 30% Off Clothes
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#FC9D9D",
                  textTransform: "uppercase",
                  color: "#ffff",
                  borderRadius: "50px",
                  padding: "6px 10px 4px 10px",
                  fontSize: { xs: "12px", sm: "14px" }, 
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>

      {/* Right side image with text  */}
        <Grid size={6}>
        <Box
            position={"relative"}
            sx={{
              position: "relative",
              width: { xs: 350, md: 600, xl: 692 }, 
            height: { xs: 300, md: 400, xl: 450}
            }}
          >
            {/* Right image  */}
            <Image
              src="/assets/images/specialOffer.png"
              alt="Picture of the author"
              layout="fill" 
              objectFit="cover"
            />
            {/* Right side overlay text */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "5%", sm: "10%" }, 
                color: "#252525",
                padding: "8px",
                borderRadius: "4px",
                width: { xs: "150px", sm: "180px", md: "250px" }, 
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "12px", sm: "14px" }, 
                  fontWeight: 600,
                  lineHeight: "128.571%",
                  textDecorationLine: "underline",
                  textTransform: "uppercase",
                }}
              >
                Big Deal
              </Typography>
              <Typography
                variant="h6"
                fontSize={{ sm: "24px", md: "34px" }} 
                sx={{
                  lineHeight: "123.529%",
                  fontWeight: 700,
                  margin: "10px 0 30px 0",
                }}
              >
                Accessories Sale 20%
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#05297F",
                  textTransform: "uppercase",
                  color: "#ffff",
                  borderRadius: "50px",
                  padding: "6px 10px 4px 10px",
                  fontSize: { xs: "12px", sm: "14px" }, 
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpecialOffers;
