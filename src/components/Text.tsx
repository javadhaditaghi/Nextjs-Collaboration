import { Translate } from '@mui/icons-material'
import { Box,Typography } from '@mui/material';



function Text() {
  return (
   
    < Box sx={{ textAlign:"left", position:"sticky"}}>
     <ul >
      <li>
         <Typography fontSize={20} color='#05297F' marginBottom="15px"  >
        Stoke is limited
       </Typography>
       </li>
      <li>
        <Typography  sx={{fontWeight:"700",lineHeight:"80px",fontSize:"50px",color:"#252525"}}>
       End of Season Clearance
       </Typography>
       </li>
      <li> 
        <Typography sx={{ marginBottom:"15px", fontWeight:"700", lineHeight:"80px", width:"100%",fontSize:"50px",color:"#252525"}}>
       Sale upto 30%
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

