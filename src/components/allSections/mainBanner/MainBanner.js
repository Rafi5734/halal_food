import Image from "next/image";
import React, { useRef, useState } from "react";
import banner1 from "../../../../public/images/1.png";
import banner2 from "../../../../public/images/2.png";
import banner3 from "../../../../public/images/3.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Image } from "@nextui-org/react";

const MainBanner = () => {
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
        <SwiperSlide>
          <Image
            src={banner1}
            alt="Picture of the banner"
            placeholder="blur"
            sizes="(max-width: 100%)"
            className="w-full h-[840px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            alt="Picture of the banner"
            placeholder="blur"
            sizes="(max-width: 100%)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner3}
            alt="Picture of the banner"
            placeholder="blur"
            sizes="(max-width: 100%)"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
        </div>
      </Swiper>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-3 md:grid-cols-1 gap-3">
        <Image
          src={banner1}
          alt="Picture of the banner"
          placeholder="blur"
          sizes="(max-width: 100%)"
        />
        <Image
          src={banner2}
          alt="Picture of the banner"
          placeholder="blur"
          sizes="(max-width: 100%)"
        />
        <Image
          src={banner3}
          alt="Picture of the banner"
          placeholder="blur"
          sizes="(max-width: 100%)"
        />
      </div> */}
    </div>
  );
};

export default MainBanner;
