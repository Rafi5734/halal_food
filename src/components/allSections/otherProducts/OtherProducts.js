import React from 'react';
import OtherProductList from './otherProductList/OtherProductList';

const OtherProducts = () => {
    return (
        <div className='container ps-3 pe-3 mb-5'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='mt-3 h-[5px]'>
                    <hr />
                </div>
                <div>
                    <p className='text-wrap mt-0 pt-0 text-center font-bold text-xl'>কেমিক্যাল মুক্ত শুঁটকি</p>
                </div>
                <div className='mt-3'>
                    <hr style={{ height: '12px' }} className="h-8" />
                </div>
            </div>
            <OtherProductList />
        </div >
    );
};

export default OtherProducts;