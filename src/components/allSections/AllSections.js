import React from "react";
import MainBanner from "./mainBanner/MainBanner";
import PopularProducts from "./popularProducts/PopularProducts";
import TopCategory from "./topCategory/TopCategory";
import VillageProducts from "./villageProducts/VillageProducts";
import PremiumHoney from "./premiumProducts/premiumHoney/PremiumHoney";
import PremiumBadam from "./premiumProducts/premiumBadam/PremiumBadam";
import OtherProducts from "./otherProducts/OtherProducts";
import ProductDetails from "./productDetails/ProductDetails";
import Footer from "./footer/Footer";

const AllSections = () => {
  return (
    <div className="container mx-auto">
      <MainBanner></MainBanner>
      <PopularProducts />
      {/* <TopCategory />
      <VillageProducts />
      <PremiumHoney />
      <PremiumBadam /> */}
      {/* <OtherProducts />
      <ProductDetails /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default AllSections;
