import React from 'react';
import ProductDetailsList from './productDetailsList/ProductDetailsList';

const ProductDetails = () => {
    return (
      <div className="container ps-3 pe-3 mb-5 flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-4">
          <div className="mt-3 h-[5px]">
            <hr />
          </div>
          <div>
            <p className="text-wrap mt-0 pt-0 text-center font-bold text-xl">
              পণ্য সম্পর্কে জানুন
            </p>
          </div>
          <div className="mt-3">
            <hr style={{ height: "12px" }} className="h-8" />
          </div>
        </div>
        <ProductDetailsList />
        {/* <div>
                <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 font-bold">আরও জানুন</button>
            </div> */}
      </div>
    );
};

export default ProductDetails;
