import React from 'react';
import TopCategoryList from './topCategoryList/TopCategoryList';

const TopCategory = ({ secondCategory }) => {
  return (
    <div className="container bg-[#f6f6f6] mt-3 p-3">
      <div className="pt-5 grid grid-cols-3 gap-4">
        <div className="mt-3 h-[5px]">
          <hr />
        </div>
        <div>
          <p className="mt-0 pt-0 text-center font-bold text-4xl text-[#ff7f00] text-wrap">
            {secondCategory}
          </p>
        </div>
        <div className="mt-3">
          <hr style={{ height: "12px" }} className="h-8" />
        </div>
      </div>
      <TopCategoryList secondCategory={secondCategory} />
    </div>
  );
};

export default TopCategory;
