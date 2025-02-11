"use client";
import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import PaginatedProducts from "./paginatedProducts/PaginatedProducts";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";

const PaginatedItems = ({ itemsPerPage }) => {
  const { data: popularProductList, isLoading } = useGetAllProductsQuery();
  const items = popularProductList;
  // console.log(items);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(items?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event?.selected * itemsPerPage) % items?.length;
    // console.log(
    //   `User requested page number ${event?.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <PaginatedProducts currentItems={currentItems} />
      <div className="flex justify-center items-center">
        <ReactPaginate
          className="flex m-3"
          breakLabel="..."
          nextLabel="&#129122;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="&#129120;"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default PaginatedItems;
