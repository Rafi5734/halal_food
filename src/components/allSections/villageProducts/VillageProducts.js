import React from 'react';
import VillageProductList from './villagaeProductList/VillageProductList';

const VillageProducts = ({ thirdCategory }) => {
  return (
    <div className="container ps-3 pe-3 mt-9">
      <div className="grid grid-cols-3 gap-4">
        <div className="mt-3 h-[5px]">
          <hr />
        </div>
        <div className="mb-5">
          <p className="mt-0 pt-0 text-center font-bold text-4xl text-[#ff7f00] text-wrap">
            {thirdCategory}
          </p>
        </div>
        <div className="mt-3">
          <hr style={{ height: "12px" }} className="h-8" />
        </div>
      </div>
      <VillageProductList thirdCategory={thirdCategory} />
    </div>
  );
};

export default VillageProducts;
