import AboutAllSections from "@/components/aboutAllSections/AboutAllSections";
import Image from "next/image";
import React from "react";
import AboutBannerImg from "../../../public/images/about_bannar_img.jpg";

const page = () => {
  return (
    <div>
      <Image
        className="img_sizing"
        src="https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        // width="100%"
        height={100}
        // sizes="100vw"
        quality={75}
        // placeholder="blur"
        sizes="(max-width: 100%)"
        alt="about image"
      />
      <AboutAllSections />
    </div>
  );
};

export default page;
