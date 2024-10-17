
import TopProducts from "@/components/modules/website/home/topProducts/TopProducts";
import ProductGrid from "@/components/modules/website/home/topProducts/TopProducts";
import { Typography, Box, Divider } from "@mui/material";
import { Kanit } from "next/font/google";





export default function Home() {

  return (
    <>
    {/* <Typography>Regular typography</Typography>
    <Typography variant="h1" sx={{color:"text.primary"}}>h1: text.primary</Typography>
    <Typography variant="h2" sx={{color:"text.secondary"}}>h2: text.secondary</Typography>
    <Typography variant="h3" sx={{color:"text.disabled"}}>h3: text.disbled</Typography>
    <Typography variant="h4">h4</Typography>
    <Typography variant="h5">h5</Typography>
    <Typography variant="h6">h6</Typography>
    <Divider />

    <Typography variant="body1">body 1</Typography>
    <Typography variant="body2">body 2</Typography>

    <Box typography={"body1"} sx={{ backgroundColor: "primary.main", display:"block" }}>primary.main</Box>
    <Box sx={{ backgroundColor: "secondary.main", fontFamily:"Kanit", display:"block" }}>secondary.main</Box>
    <Box sx={{ backgroundColor: "primary.light", fontFamily:"Kanit", display:"block" }}>primary.light</Box>
    <Box sx={{ backgroundColor: "secondary.light", fontFamily:"Kanit", display:"block" }}>secondary.light</Box>
    <Box sx={{ backgroundColor: "primary.dark", fontFamily:"Kanit", display:"block" }}>primary.dark</Box>
    <Box sx={{ backgroundColor: "secondary.dark", fontFamily:"Kanit", display:"block" }}>secondary.dark</Box> */}
    
    <TopProducts/>
   </>
    
  );
}
