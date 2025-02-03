"use client";
// import Image from "next/image";
import React, { useRef, useState } from "react";
import banner1 from "../../../../public/images/1.png";
import banner2 from "../../../../public/images/2.png";
import banner3 from "../../../../public/images/3.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useGetAllSliderQuery } from "@/api/sliders/sliderSlice";
import { Image } from "@nextui-org/react";
// import { Image } from "@nextui-org/react";

const MainBanner = () => {
  const { data: getAllSliderData, isLoading: sliderAllDataLoader } =
    useGetAllSliderQuery();
  return (
    <div className="container mx-auto p-3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {getAllSliderData?.map((slider) => (
          <SwiperSlide>
            <Image
              src={slider?.image}
              alt={slider?.image}
              placeholder="blur"
              sizes="(max-width: 100%)"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainBanner;
