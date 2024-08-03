import React from 'react';
import PopularProductList from './popularProductList/PopularProductList';

const PopularProducts = () => {
    return (
      <div className="container ps-3 pe-3 mb-5 mt-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="mt-3 h-[5px]">
            <hr />
          </div>
          <div>
            <p className="mt-0 pt-0 text-center font-bold text-4xl text-[#ff7f00] text-wrap">
              Food Items
            </p>
          </div>
          <div className="mt-3">
            <hr style={{ height: "12px" }} className="h-8" />
          </div>
        </div>
        <PopularProductList />
      </div>
    );
};

export default PopularProducts;
