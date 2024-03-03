import DynamicProducts from "@/components/dynamicProducts/DynamicProducts";
import React from "react";

const page = ({ params }) => {
  console.log("params", params);
  return (
    <div className="container mx-auto mt-5">
      <DynamicProducts />
    </div>
  );
};

export default page;
