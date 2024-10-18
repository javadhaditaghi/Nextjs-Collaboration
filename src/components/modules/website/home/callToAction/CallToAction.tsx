//Call to Action

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import LargeButton from "@/components/ui/largeButton";

const CallToAction = () => {
  return (
    <Grid width={"100%"} sx={{marginBottom:"120px"}}>
      <Box position={"relative"}>
        {/* larger Screens Photo  */}
        <Box sx={{display:{xs: "none", sm:"block"}}}>
        <Image
          src="/assets/images/callToAction.png"
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          
        /> 
        </Box>
        {/* End of larger Screens Photo  */}

         {/* Mobile Size Screens Photo  */}
        <Box sx={{display:{xs: "block", sm:"none"}}}>

        <Image
          src="/assets/images/specialOffer.png"
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          
        />

        </Box>
        {/* End of Mobile Size Screens Photo  */}

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "50%", sm: "10%" },
            color: "#252525",
            padding: "8px",
            borderRadius: "4px",
            width: { xs: "250px", sm: "380px", md: "650px" },
            transform: {xs: "translate(-50%, -50%)", sm:"translate(0%, -50%)"},
            textAlign: {xs: "center", sm:"left"}
          }}
        >
          <Typography
            variant="h6"
            fontSize={{ xs:"7vw", sm: "28px", md: "40", lg: "44px" }}
            sx={{
              lineHeight: "121.739%",
              fontWeight: 700,
              margin: "10px 0 30px 0",
              
            }}
          >
            Free shipping worldwide on all baskets over $200
          </Typography>
          <LargeButton> Go to Shop </LargeButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default CallToAction;
