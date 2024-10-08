import PaginatedItems from "@/styles/pagination/PaginatedItems";
import React from "react";

const AllProducts = () => {
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
      <PaginatedItems itemsPerPage={10} />
    </div>
  );
};

export default AllProducts;
