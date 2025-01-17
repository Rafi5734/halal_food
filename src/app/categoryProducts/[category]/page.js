import React from "react";
import CategoryProduct from "@/components/categoryProduct/CategoryProduct";

export default function page({ params }) {
  const { category } = params;
  const decodedString = decodeURIComponent(category);

  return (
    <div>
      <CategoryProduct decodedString={decodedString} />
    </div>
  );
}
