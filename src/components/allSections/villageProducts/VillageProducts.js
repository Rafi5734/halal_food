import React from 'react';
import VillageProductList from './villagaeProductList/VillageProductList';

const VillageProducts = () => {
    return (
      <div className="container ps-3 pe-3 mt-9">
        <div className="grid grid-cols-3 gap-4">
          <div className="mt-3 h-[5px]">
            <hr />
          </div>
          <div className="mb-5">
            <p className="text-wrap mt-0 pt-0 text-center font-bold text-xl">
              Baby Toys
            </p>
          </div>
          <div className="mt-3">
            <hr style={{ height: "12px" }} className="h-8" />
          </div>
        </div>
        <VillageProductList />
      </div>
    );
};

export default VillageProducts;
