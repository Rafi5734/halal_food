import PaginatedItems from "@/styles/pagination/PaginatedItems";
import React from "react";

const AllProducts = ({ data }) => {
  // console.log("data all", data);
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
      <PaginatedItems itemsPerPage={5} data={data} />
    </div>
  );
};

export default AllProducts;
