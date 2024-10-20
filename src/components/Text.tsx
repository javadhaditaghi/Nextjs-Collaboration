import { Translate } from '@mui/icons-material'
import { Box,Typography } from '@mui/material';



function Text() {
  return (
   
    < Box sx={{ textAlign:"left", position:"sticky"}}>
     <ul >
      <li>
         <Typography  color='#05297F' marginBottom="15px" sx={{ fontSize:"20px",fontFamily:"Hind, sans-serif",lineHeight:"22px"}}  >
        STOKE IS LIMITED
       </Typography>
       </li>
      <li>
        <Typography  sx={{fontWeight:"700",lineHeight:"80px",fontSize:"50px",color:"#252525",fontFamily:"Hind, sans-serif"}}>
       End of Season Clearance
       </Typography>
       </li>
      <li> 
        <Typography sx={{ marginBottom:"15px", fontWeight:"700", lineHeight:"80px", width:"100%",fontSize:"50px",color:"#252525",fontFamily:"Hind, sans-serif"}}>
       Sale upto  <span style={{ color: "#05297F" }}>30%</span>
       </Typography>
       </li>
       <li> 
         <button className='button'>shop now</button>
         </li>
     </ul>

  
      
      
      
     


      </Box>

   
  )
}

export default Text;

