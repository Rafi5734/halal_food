import Allcategory from "@/components/admin/allCategory/Allcategory";
import React from "react";

async function getData() {
  const res = await fetch("https://hala-food-server-zg6m.vercel.app/category", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async () => {
  const data = await getData();
  console.log("data", data);

  return (
    <div className="ms-5 mt-5 w-full me-3">
      <Allcategory data={data} />
    </div>
  );
};

export default page;
