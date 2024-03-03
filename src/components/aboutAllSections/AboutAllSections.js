import React from "react";
import ServiceTeam from "./serviceTeam/ServiceTeam";
import ServiceMessage from "./serviceMessage/ServiceMessage";

const AboutAllSections = () => {
  return (
    <div className="">
      <ServiceTeam className="bg-[#fafafa]"></ServiceTeam>
      <ServiceMessage></ServiceMessage>
    </div>
  );
};

export default AboutAllSections;
