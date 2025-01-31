import React from "react";
import OrderList from "./orderList/OrderList";

const AllOrders = () => {
  return (
    <div className="container mx-auto ms-3 me-3">
      <p className="text-center text-4xl mt-5 font-bold mb-10 underline underline-offset-4">All Orders</p>
      <OrderList />
    </div>
  );
};

export default AllOrders;
