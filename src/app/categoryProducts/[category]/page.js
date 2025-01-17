"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CategoryProduct from "@/components/categoryProduct/CategoryProduct";

export default function page({ params }) {
  const router = useRouter();
  const { category } = params;
  const decodedString = decodeURIComponent(category);

  console.log("params", decodedString);

  return (
    <div>
      <CategoryProduct decodedString={decodedString} />
    </div>
  );
}
