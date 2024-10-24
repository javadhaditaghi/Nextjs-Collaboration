//Header

import MyAppBar from "./MyAppBar"
import MyCarousel from "./MyCarousel"
import { Box } from "@mui/material"



const Header = () => {

    return (
        <Box sx={{marginBottom:"130px"}}>
      
        <MyAppBar />
        <MyCarousel />
        </Box>
    )


}


export default Header;