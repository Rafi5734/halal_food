"use client";
import {
  useDeleteCheckoutMutation,
  useGetAllCheckoutQuery,
} from "@/api/checkoutSlice/checkoutSlice";
import Loader from "@/styles/Loader/Loader";
import { DatePicker } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const OrderList = () => {
  const { data: checkoutData, isLoading } = useGetAllCheckoutQuery();
  const [deleteCheckout] = useDeleteCheckoutMutation();
  const [value, setValue] = useState(null);

  // Convert selected date to "DD/MM/YYYY" format
  const selectedDate = value
    ? `${String(value.day).padStart(2, "0")}/${String(value.month).padStart(
        2,
        "0"
      )}/${value.year}`
    : null;

  // Filter orders by selected date
  const filteredCheckoutData = checkoutData
    ?.map((product) => ({
      ...product,
      order: product.order.filter((order) => {
        const orderDate = new Date(order.createdAt).toLocaleDateString(
          "en-GB",
          { day: "2-digit", month: "2-digit", year: "numeric" }
        );
        return selectedDate ? orderDate === selectedDate : true;
      }),
    }))
    .filter((product) => product.order.length > 0); // Remove products with no matching orders

  const handleDeleteProduct = async (productId) => {
    const result = await deleteCheckout({ productId });

    if (result?.data) {
      Swal.fire({
        title: "Product Deleted successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Product not Deleted!",
        icon: "error",
      });
    }
  };

  return (
    <div className="">
      <div className="relative overflow-x-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Date Picker */}
            <DatePicker
              className="max-w-[284px] mb-8 mt-5"
              label="Filter with date"
              value={value}
              onChange={setValue}
            />

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCheckoutData
                  ?.map((product) => (
                    <>
                      {product?.order?.map((order, index) => (
                        <tr
                          key={order?._id}
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
                            {new Date(order?.createdAt).toLocaleDateString(
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
                              <p>Address: {product?.address}</p>
                              <p>Details: {product?.thanaDistrict}</p>
                              <p>Phone Number: {product?.phoneNumber}</p>
                            </td>
                          )}
                          {index === 0 && (
                            <td
                              className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                              rowSpan={product.order.length}
                            >
                              <button
                                onClick={() =>
                                  handleDeleteProduct(product?._id)
                                }
                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </>
                  ))
                  ?.reverse()}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderList;
