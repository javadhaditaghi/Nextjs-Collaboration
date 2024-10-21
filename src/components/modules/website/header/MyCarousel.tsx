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
    <Box sx={{ width: "100vw", position: "relative" }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
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
      <Box
        sx={{
          position: "absolute",
          top: { xs: "30%", md: "20%", lg: "30%" },
          left: { xs: "50%", md: "10%", lg: "20%" },
          transform: {
            xs: "translateX(-50%)",
            sm: "translateX(-50%)",
            md: "none",
          },
          zIndex: 1,
          padding: "20px",
          width: { xs: "90%", sm: "80%", md: "40%", lg: "30%" },
        }}
      >
        <Text />
      </Box>
    </Box>
  );
}

export default MyCarousel;
