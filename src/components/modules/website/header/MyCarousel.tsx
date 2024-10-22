"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/Text";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";

function MyCarousel() {
  return (
    <Box sx={{  xs: "400px", sm: "600px", md: "800px", lg: "900px",width:"100%", position:"relative"}}>
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, A11y]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}

  >
    
    <SwiperSlide >
   
    <Box
            position={"relative"}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Image
              src="/assets/images/bg.png"
              layout="responsive"
              sizes="100vw"
              width={1920}
              height={2000}
              alt="Picture of the author"
            />
          </Box>
          <Box
            position={"relative"}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Image
              src="/assets/images/bg-mobile.png"
              layout="responsive"
              sizes="100vw"
              width={1920}
              height={2000}
              alt="Picture of the author"
            />
          </Box>
   
    
    </SwiperSlide>
    <SwiperSlide>
    <Box
            position={"relative"}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Image
              src="/assets/images/bg.png"
              layout="responsive"
              sizes="100vw"
              width={1920}
              height={2000}
              alt="Picture of the author"
            />
          </Box>
          <Box
            position={"relative"}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Image
              src="/assets/images/bg-mobile.png"
              layout="responsive"
              sizes="100vw"
              width={1920}
              height={2000}
              alt="Picture of the author"
            />
          </Box>
    </SwiperSlide>
    <SwiperSlide>
    <Box
            position={"relative"}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Image
              src="/assets/images/bg.png"
              layout="responsive"
              sizes="100vw"
              width={1920}
              height={2000}
              alt="Picture of the author"
            />
          </Box>
          <Box
            position={"relative"}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Image
              src="/assets/images/bg-mobile.png"
              layout="responsive"
              sizes="100vw"
              width={1920}
              height={2000}
              alt="Picture of the author"
            />
          </Box>
    </SwiperSlide>
    
 
  </Swiper>
  <Box  sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Centering the Text component
          zIndex: 1, // Ensure it appears above the Swiper slides
          textAlign: 'center', // Center the text inside the Box
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: background for better visibility
          padding: '20px',
          borderRadius: '8px',
          background:"transparent",
          width: { xs: '90%', sm: '80%', md: '60%' }// Responsive width
        }} >
  <Text  />
  </Box>
  
  </Box>
  )
}

export default MyCarousel;
