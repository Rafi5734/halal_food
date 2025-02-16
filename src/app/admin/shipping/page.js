import React from "react";
import { Image } from "@nextui-org/react";

export default async function ShippingOrders() {
  // Fetch orders without caching
  const res = await fetch("https://hala-food-server-zg6m.vercel.app/checkout", {
    cache: "no-store", // Ensure fresh data on every request
  });
  const allOrders = await res.json();

  // Filter only "shipping" status orders
  const shippingOrders = allOrders.filter(
    (order) => order.status === "shipping"
  );

  console.log("shippingOrders", shippingOrders);
  return (
    <div className="w-full">
      <div className="p-4">
        <h2 className="text-4xl font-bold mb-4 text-center mt-5 mb-10">
          Shipping Orders
        </h2>
        {shippingOrders?.length === 0 ? (
          <p>No orders in shipping status.</p>
        ) : (
          <div className="relative overflow-x-auto mt-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-md sm:rounded-lg mt-10">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Person Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount (%)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {shippingOrders
                  ?.map((product) =>
                    product?.order?.map((order, index) => (
                      <tr
                        key={`${product._id}-${order._id}`}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="p-4">
                          <Image
                            src={JSON.parse(order?.color)?.url}
                            className="w-16 md:w-32 max-w-full max-h-full rounded"
                            alt="Product Image"
                            width={100}
                            height={100}
                          />
                          <p className="mt-3 font-bold">{order?.name}</p>
                          <p className="mt-3 font-bold">
                            Color: {JSON.parse(order?.color)?.title}
                          </p>
                        </td>
                        {index === 0 && (
                          <td
                            className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                            rowSpan={product.order.length}
                          >
                            <p>{product?.fullName}</p>
                          </td>
                        )}
                        <td className="font-bold">
                          {JSON.parse(order?.color)?.title}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {JSON.parse(order?.productQuantity)}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {JSON.parse(order?.size)}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-nowrap">
                          {order?.price} TK
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {order?.discount}%
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {Number(
                            order?.price -
                              (order?.price * order?.discount) / 100
                          ) * Number(JSON.parse(order?.productQuantity))}{" "}
                          TK
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {new Date(product?.orderTime).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        {index === 0 && (
                          <td
                            className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                            rowSpan={product.order.length}
                          >
                            <p>
                              Address details:{" "}
                              <span className="font-extralight">
                                {product?.division}; {product?.district};{" "}
                                {product?.zilla}; {product?.address}
                              </span>
                            </p>
                            <p>
                              Phone Number:{" "}
                              <span className="font-extralight">
                                {product?.phoneNumber}
                              </span>
                            </p>
                          </td>
                        )}
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-nowrap">
                          {product?.status}
                        </td>
                        {index === 0 && (
                          <td
                            className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                            rowSpan={product.order.length}
                          >
                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                              Remove
                            </button>
                          </td>
                        )}
                      </tr>
                    ))
                  )
                  ?.reverse()}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
