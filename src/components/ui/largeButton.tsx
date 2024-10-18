import { Button } from "@mui/material";
;

const LargeButton = ({ children }: { children: string }) => {

  {/* Largge buttons on index sections like call  to action and about us parts of it  */}
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
