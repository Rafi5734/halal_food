import React from 'react';
import BadamList from "./badamList/BadamList";

const PremiumBadam = () => {
  return (
    <div className="container ps-3 pe-3 mt-10 pt-0 pb-1">
      <div className="grid grid-cols-3 gap-4">
        <div className="mt-3 h-[5px]">
          <hr />
        </div>
        <div className="mb-5">
          <p className="text-wrap mt-0 pt-0 text-center font-bold text-xl">
            Makeup & Cosmetic
          </p>
        </div>
        <div className="mt-3">
          <hr style={{ height: "12px" }} className="h-8" />
        </div>
      </div>
      <BadamList />
    </div>
  );
};

export default PremiumBadam;
