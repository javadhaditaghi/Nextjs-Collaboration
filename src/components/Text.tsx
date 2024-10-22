
import { Box,Typography } from '@mui/material';
import Button from '@mui/material/Button';






function Text() {
  return (
   
    < Box sx={{ textAlign:"left", position:"sticky"}}>
     <ul >
      <li>
         <Typography  color='#05297F' marginBottom="15px" sx={{ fontSize:{xs: "10px", md:"20px", lg:"30px"},fontFamily:"Hind, sans-serif",lineHeight:{xs: "20px", md:"80px", lg:"90px"}, textTransform:"uppercase"}}  >
        stoke is limited
       </Typography>
       </li>
      <li>
        <Typography  sx={{fontWeight:"700",lineHeight:{xs: "20px", md:"80px", lg:"90px"},fontSize:{xs: "20px", md:"40px", lg:"60px"},color:"#252525",fontFamily:"Hind, sans-serif"}}>
       End of Season Clearance
       </Typography>
       </li>
      <li> 
        <Typography sx={{ marginBottom:"15px", fontWeight:"700", lineHeight:{xs: "20px", md:"80px", lg:"90px"},fontSize:{xs: "20px", md:"40px", lg:"60px"},color:"#252525",fontFamily:"Hind, sans-serif"}}>
       Sale upto  <span style={{ color: "#05297F" }}>30%</span>
       </Typography>
       </li>
       <li> 
       <Button variant="contained" sx={{background:"#05297F",borderRadius:"50px",width:{xs:"90px",md:"168px"},lineHeight:{xs: "20px", md:"80px", lg:"90px"},height:{xs:"30px",md:"48px"}, fontSize:{xs:"9px",md:"18px"}}}>Go to Shop</Button>
         </li>
     </ul>

  
      

    </Box>
  );
}

export default Text;
