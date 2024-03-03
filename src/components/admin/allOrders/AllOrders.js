import React from "react";
import OrderList from "./orderList/OrderList";

const AllOrders = () => {
  return (
    <div className="container mx-auto">
      <p className="text-center text-4xl mt-5 font-bold mb-10">All Orders</p>
      <OrderList />
    </div>
  );
};

export default AllOrders;
