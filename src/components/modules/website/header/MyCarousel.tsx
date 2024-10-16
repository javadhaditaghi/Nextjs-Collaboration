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

function MyCarousel() {
  return (
    <>
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
      width={1920}
      height={2000}
      alt="Picture of the author"
    />
    </SwiperSlide>
    
    ...
  </Swiper>
  <Text />
  </>
  )
}

export default MyCarousel

