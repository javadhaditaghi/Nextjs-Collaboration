import { Box, Typography } from "@mui/material";

function Text() {
  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" }, position: "sticky" }}>
      <Typography fontSize={{xs:"15px", md:"20px"}} color="#05297F" marginBottom={{xs: 0, md: "15px"}}>
        Stoke is limited
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          lineHeight: { xs: "40px", lg: "75px", xl: "80px" },
          fontSize: { xs: "30px", md: "35px", lg: "50px" },
          color: "#252525",
        }}
      >
        End of Season Clearance Sale up to 30%
      </Typography>

      <button className="button">shop now</button>
    </Box>
  );
}

export default Text;
