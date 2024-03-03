import AboutAllSections from "@/components/aboutAllSections/AboutAllSections";
import Image from "next/image";
import React from "react";
import AboutBannerImg from "../../../public/images/about_bannar_img.jpg";

const page = () => {
  return (
    <div>
      <Image src={AboutBannerImg} alt="about" sizes="(max-width: 100%)" />
      <AboutAllSections />
    </div>
  );
};

export default page;
