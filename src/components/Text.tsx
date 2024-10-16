import { Translate } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'



function Text() {
  return (
   <>
   <Box display='flex' justifyContent="center" alignItems="center" height="100%" position="absolute" top="50%" 
 sx={{ textAlign: 'center', zIndex: 1}}
    >
    <Typography sx={{fontSize:"60px",color:"#05297F"}}>
    End of Season Clearance
Sale upto 30%

    </Typography>
    <Typography>
        
    </Typography>
    <button className='button'>shop now</button>
   </Box>
   </>
  )
}

export default Text
