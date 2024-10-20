'use client'

import React from 'react';
import Image from 'next/image';
import Text from '@/components/Text';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';

function MyCarousel() {
  return (
    <Box sx={{  xs: "400px", sm: "600px", md: "800px", lg: "900px",width:"100%"}}>
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, A11y]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
    
    <Image
      src="/assets/images/bg.png"
      layout='responsive'
      width={1920}
      height={2000}
      alt="Picture of the author"
    />
    </SwiperSlide>
    <SwiperSlide>
    <Image
      src="/assets/images/bg.png"
      layout='responsive'
      width={1920}
      height={2000}
      alt="Picture of the author"
      
    />
    </SwiperSlide>
    <SwiperSlide>
    <Image
      src="/assets/images/bg.png"
      layout='responsive'
      width={100}
      height={2000}
      alt="Picture of the author"
    />
    </SwiperSlide>
    
 
  </Swiper>
  <Box sx={{
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

export default MyCarousel

