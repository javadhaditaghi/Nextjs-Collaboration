'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Text from '@/components/Text';
import 'swiper/css';

function MyCarousel() {
  return (
    <>
    
    <Swiper
    
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
      src="/assets/images/bg.png"
      layout='responsive'
      width={1920}
      height={800}
      alt="Picture of the author"
    />
    </SwiperSlide>

    <SwiperSlide>
        <Image
      src="/assets/images/bg.png"
      layout='responsive'
      width={1920}
      height={1080}
      alt="Picture of the author"
    />
    </SwiperSlide>

      <SwiperSlide>
        <Image
      src="/assets/images/bg.png"
      layout='responsive'
      width={1920}
      height={1080}
      alt="Picture of the author"
    />
    </SwiperSlide>

      <SwiperSlide>
        <Image
      src="/assets/images/bg.png"
      layout='responsive'
      width={1920}
      height={1080}
      alt="Picture of the author"
    />
    </SwiperSlide>
      ...
    </Swiper>
    <Text  />
    </>
  
  )
  
}

export default MyCarousel
