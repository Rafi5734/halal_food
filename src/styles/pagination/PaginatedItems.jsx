"use client";
import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import PaginatedProducts from "./paginatedProducts/PaginatedProducts";

const PaginatedItems = ({ itemsPerPage, data }) => {
  const items = data;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(items?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event?.selected * itemsPerPage) % items?.length;
    console.log(
      `User requested page number ${event?.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <PaginatedProducts currentItems={currentItems} />
      <div className="flex justify-center items-center">
        <ReactPaginate
          className="flex m-3"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default PaginatedItems;
