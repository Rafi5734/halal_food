"use client";

import {
  useDeleteCheckoutMutation,
  useGetAllCheckoutQuery,
} from "@/api/checkoutSlice/checkoutSlice";
import Image from "next/image";
import Swal from "sweetalert2";

const OrderList = () => {
  const { data: checkoutData, isLoading } = useGetAllCheckoutQuery();
  const [deleteCheckout] = useDeleteCheckoutMutation();
  const handleDeleteProduct = async (productId) => {
    console.log("deleted this item", productId);
    const result = await deleteCheckout({ productId });
    // console.log("deleted", result);
    if (result?.data) {
      Swal.fire({
        title: "Product Deleted successfully!",
        // text: "You deleted the product",
        icon: "success",
      });
    }
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Sub Total
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
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
            {checkoutData?.map((product, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <Image
                    src={product?.order?.imageLink}
                    className="w-16 md:w-32 max-w-full max-h-full rounded"
                    alt="Apple Watch"
                    width={100}
                    height={100}
                  />
                  <p className="mt-3 font-bold">{product?.order?.name}</p>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product?.fullName}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product?.product_quantity}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $ {product?.order?.price}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $ {product?.product_quantity * product?.order?.price}
                </td>
                <td className="px-6 font-semibold text-gray-900 dark:text-white">
                  $ {product?.totalPrice}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product?.phoneNumber}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <p>{product?.address}</p>
                  <p>{product?.thanaDistrict}</p>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteProduct(product?._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
