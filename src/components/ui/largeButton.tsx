import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { Children } from "react";

const LargeButton = ({ children }: { children: string }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#05297F",
        textTransform: "uppercase",
        color: "#ffff",
        borderRadius: "50px",
        padding: "9px 18px 7px 18px",
        fontSize: { xs: "12px", sm: "14px" },
      }}
    >
      {children}
    </Button>
  );
};

export default LargeButton;
