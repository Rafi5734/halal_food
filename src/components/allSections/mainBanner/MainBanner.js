import Image from "next/image";
import React from "react";
import banner from "../../../../public/images/Main_Banner.webp";

const MainBanner = () => {
  return (
    <div className="container mx-auto p-3">
      <Image
        src={banner}
        alt="Picture of the banner"
        sizes="100vw"
        placeholder="blur"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default MainBanner;
