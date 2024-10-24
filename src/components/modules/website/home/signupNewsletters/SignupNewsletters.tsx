import React from "react";
import { Box, Button, InputBase, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Newsleterscard from "./Newsleterscard";


// = = = = = SignupNewsletters Section = = = = = =//
const SignupNewsletters = () => {
  const styles = {
    //= = = = = =style color newsletters = = = = = =//
    color: "#FC9D9D",
  };
  return (
  <Grid
      size={12}
      py={"120px"}
      width={"1920px"}
      height={"763px"}
      flexShrink={"0"}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: " #EEF2F5",
        top: "6052px",
        paddingY: { xs: "80px", md: "120px" },
      }}
    >
      <Box
        textAlign={"center"}
        sx={{
          margin: "auto",
          top: "6052px",
          maxWidth: "385px",
          maxHeight: "120px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: "40px", sm: "48px", md: "54px" },
            color: " #252525",
            lineHeight: { xs: "45px", sm: "50px", md: "60px" },
          }}
        >
          Sing Up For Our
          <br />
          <span style={styles}>Newsleters</span>
          {/* = = = = = = style color newsletters = = = = = = */}
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "574px",
          margin: "auto",
          marginBottom: "40px",
          marginTop: { xs: "30px", sm: "20px", md: "10px" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            textAlign: "center",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
            paddingX: { xs: "30px", sm: "20px", md: "0px" },
          }}
        >
          Sed pretium turpis id orci molestie, vitae placerat ligula vulputate.
          Duis volutpat ante sed laoreet tempus. Vivamus diam purus, vehicula ac
          tortor ut, dictum vestibulum ni
        </Typography>
      </Box>
      {/* = = = = = = = subscribe button = = = =  = */}
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          flexShrink: "0",
          paddingX: { xs: "30px", sm: "20px", md: "0px" },
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            backgroundColor: "#FFF",
            alignItems: "center",
            border: "1px solid #B1B1B1",
            maxWidth: "574px",
            borderRadius: "50px",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              boxShadow: "none",
              p: "2px 4px",
              width: "calc(100% - 100px)",
            }}
            placeholder="Subscribe"
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              transition: "0.3s",
              textTransform: "capitalize",
              width: "116px",
              height: "42px",
              flexShrink: "0",
              backgroundColor: "#FC9D9D",
            }}
          >
            submit
          </Button>
        </Paper>
      </Box>
      {/* = = = = = = =End  subscribe button = = = =  = */}
      <Newsleterscard />{" "}
      {/* = = = = = = = import cards component == = = = ==  */}
    </Grid>
  );
};

export default SignupNewsletters;
