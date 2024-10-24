"use client";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
// = = = import data = = = //
import datas from "@/data/data";
//= = = = = =style card component  = = = = = =//
const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: "#FFF",
  maxWidth: "370px",
  minWidth: "300px",
  maxHeight: "169px",
  minHeight: "150px",
  flexShrink: 0,
  display: "flex",
  borderRadius: "20px",
  boxShadow: "0px 4px 25px 0px rgba(48, 57, 96, 0.25)",
  color: " #252525",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "28px",
}));
//= = = = = = card component = = = = = =//
const Newsleterscard = () => {
  return (
    <Grid
      alignItems={"center"}
      justifyContent={"center"}
      container
      sx={{ marginTop: "70px", paddingX: { xs: "30px", sm: "0px" } }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {/* = = = = array.map = = = = */}
      {datas.map((data) => (
        <Item size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
          {/* = = = = = = import icon size xs = = = = */}
          <Grid
            size={3}
            sx={{
              justifyContent: "end",
              alignSelf: "center",
              margin: "auto",
              display: { xs: "block", sm: "none" },
            }}
          >
            <Image
              src={data.icon}
              width={60}
              height={60}
              alt="Picture of the author"
            />
            {/* = = = = = = end import icon size xs = = = = */}
          </Grid>
          {/* = = = = = = import icon size sm = = = = */}
          <Grid
            size={3}
            sx={{
              justifyContent: "end",
              alignSelf: "center",
              margin: "auto",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image
              src={data.icon}
              width={68}
              height={68}
              alt="Picture of the author"
            />
            {/* = = = = = = end import icon = = = = */}
          </Grid>
          {/* = = = = = = import card title = = = = */}
          <Grid
            size={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginRight: "auto",
            }}
          >
            <Typography
              sx={{
                color: "#252525",
                textAlign: "start",
                fontSize: { xs: "22px", sm: "24px" },
                fontStyle: "normal",
                fontWeight: { xs: "300", sm: "500" },
                lineHeight: "28px",
              }}
            >
              {data.title}
              <br />
              {data.title2}
            </Typography>
            {/* = = = = = = end import card title = = = = */}
          </Grid>
          {/* = = = = = =  import icon size xs = = = = */}
          <Grid
            size={3}
            sx={{
              alignSelf: "end",
              marginBottom: "10px",
              marginRight: "10px",
              flexShrink: "0",
              opacity: "0.1",
              display: { xs: "block", sm: "none" },
            }}
          >
            <Image src={data.icon} width={70} height={70} alt={data.title} />
          </Grid>
          {/* = = = = = =  import icon size sm = = = = */}
          <Grid
            size={3}
            sx={{
              alignSelf: "end",
              marginBottom: "10px",
              marginRight: "10px",
              flexShrink: "0",
              opacity: "0.1",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image src={data.icon} width={80} height={80} alt={data.title} />
          </Grid>
          {/* = = = = = = end import icon = = = = */}
        </Item>
      ))}
    </Grid>
    // = = = = = End card component= = = = =//
  );
};

export default Newsleterscard;

// = = = = = End SignupNewsletters Section = = = = = =//
