import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import LargeButton from "@/components/ui/largeButton";

const AboutUs = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        marginBottom: "120px",
        alignItems: "center",
        
      }}
      spacing={2}
    >
      <Grid size={{ xs: 9, sm:4, md: 3, lg: 3 }}>
        <Box>
          <Box
            position={"relative"}
            sx={{
              position: "relative",
            }}
          >
            {/* Let Image  */}
            <Image
              src="/assets/images/about.png"
              alt="Picture of the author"
              sizes="100vw"
              width={455}
              height={455}
              objectFit="cover"
              style={{ borderRadius: "50%", width: "100%", height: "auto" }}
            />
            <Box
              sx={{
                position: "absolute",
                right: "-5%",
                bottom: {xs: "-5%",md:"-15%"},
                width:"50%"
              }}
            >
              <Image
                src="/assets/images/about.png"
                alt="Picture of the author"
                objectFit="cover"
                sizes="55vw"
                width={214}
                height={214}
                style={{ borderRadius: "50%", width:"100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 10, sm: 7, md: 6, lg: 5 }}>
        <Typography
          sx={{
            color: "#FC9D9D",
            fontFamily: "Roboto",
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: 500,
            paddingBottom: "10px",
          }}
        >
          best sport shop
        </Typography>
        <Typography
          sx={{
            color: "#05297F",
            fontSize: {xs:"27px", sm:"35px",md:"45px",lg: "50px"},
            textTransform: "uppercase",
            fontWeight: 600,
            lineHeight: "111.111%",
            paddingBottom: "20px",
          }}
        >
          Something About Us
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "150%",
            fontFamily: "Roboto",
            marginBottom: "30px",
          }}
        >
          Sed pretium turpis id orci molestie, vitae placerat ligula vulputate.
          Duis volutpat ante sed laoreet tempus. Vivamus diam purus, vehicula ac
          tortor ut, dictum vestibulum nisi. Nulla condimentum felis quis augue
          viverra, et tempor arcu dapibus.
        </Typography>
        <LargeButton>Go to Shop</LargeButton>
      </Grid>
      <Grid size={{ xs: 0, md: 3, lg: 1.5 }} sx={{display: {sm:"none", lg:"block"}}}>
        <Box
          position={"relative"}
        
        >
          {/* Let Image  */}
          <Image
            src="/assets/images/about.png"
            alt="Picture of the author" 
            objectFit="cover"
            sizes="50vw"
            width={200}
            height={200}
            style={{ borderRadius: "50%", width: "100%", height: "auto" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
