"use client";
import React, { useEffect, useState } from "react";
import MainBanner from "./mainBanner/MainBanner";
import PopularProducts from "./popularProducts/PopularProducts";
import TopCategory from "./topCategory/TopCategory";
import VillageProducts from "./villageProducts/VillageProducts";
import PremiumHoney from "./premiumProducts/premiumHoney/PremiumHoney";
import PremiumBadam from "./premiumProducts/premiumBadam/PremiumBadam";
import { useGetAllCategoriesQuery } from "@/api/categorySlice/categorySlice";

const AllSections = () => {
  const [firstCategory, setFirstCategory] = useState();
  const [secondCategory, setSecondCategory] = useState();
  const [thirdCategory, setThirdCategory] = useState();
  const [fourthCategory, setFourthCategory] = useState();
  const [fifthCategory, setFifthCategory] = useState();

  const { data: allCategory } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (allCategory && allCategory.length > 0) {
      setFirstCategory(allCategory[0]);
      setSecondCategory(allCategory[1]);
      setThirdCategory(allCategory[2]);
      setFourthCategory(allCategory[3]);
      setFifthCategory(allCategory[4]);
    }
  }, [allCategory]);

  return (
    <div className="container mx-auto">
      <MainBanner></MainBanner>

      {allCategory && allCategory?.length > 0 && (
        <PopularProducts firstCategory={firstCategory?.category} />
      )}

      {allCategory && allCategory?.length > 0 && (
        <TopCategory secondCategory={secondCategory?.category} />
      )}

      {allCategory && allCategory?.length > 0 && (
        <VillageProducts thirdCategory={thirdCategory?.category} />
      )}

      {allCategory && allCategory?.length > 0 && (
        <PremiumHoney fourthCategory={fourthCategory?.category} />
      )}

      {allCategory && allCategory?.length > 0 && (
        <PremiumBadam fifthCategory={fifthCategory?.category} />
      )}

      {/* <OtherProducts />
      <ProductDetails /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default AllSections;
