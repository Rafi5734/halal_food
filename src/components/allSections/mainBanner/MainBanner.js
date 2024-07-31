import Image from "next/image";
import React from "react";
import banner1 from "../../../../public/images/1.jpg";
import banner2 from "../../../../public/images/2.jpg";
import banner3 from "../../../../public/images/3.jpg";

const MainBanner = () => {
  return (
    <div className="container mx-auto p-3">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 md:grid-cols-1 gap-3">
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
      </div>
    </div>
  );
};

export default MainBanner;
