import PaginatedItems from "@/styles/pagination/PaginatedItems";
import React from "react";

const AllProducts = () => {
  return (
    <div>
      <p className="text-center text-4xl font-bold mb-8">All Products</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
      <PaginatedItems itemsPerPage={10} />
    </div>
  );
};

export default AllProducts;
