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
    const result = await deleteCheckout({ productId });

    if (result?.data) {
      Swal.fire({
        title: "Product Deleted successfully!",
        // text: "You deleted the product",
        icon: "success",
      });
    }
  };
  return (
    <div className="ms-3 me-3">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Person Name
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
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Discount Price
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
            {checkoutData
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
                          alt="Apple Watch"
                          width={100}
                          height={100}
                        />
                        <p className="mt-3 font-bold">{order?.name}</p>
                        <p className="mt-3 font-bold">color: {JSON.parse(order?.color)?.title}</p>
                      </td>
                      {index === 0 && (
                        <td
                          className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                          rowSpan={product.order.length} // Span the rows according to the order length
                        >
                          <p>{product?.fullName}</p>
                        </td>
                      )}
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {JSON.parse(order?.productQuantity)}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {JSON.parse(order?.size)}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-nowrap">
                        $ {order?.price}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {order?.discount}%
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        $ {order?.price}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${" "}
                        {Number(
                          order?.price - (order?.price * order?.discount) / 100
                        ) * Number(JSON.parse(order?.productQuantity))}
                      </td>

                      {index === 0 && (
                        <td
                          className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                          rowSpan={product.order.length} // Span the rows according to the order length
                        >
                          <p>Address: {product?.address}</p>
                          <p>Details: {product?.thanaDistrict}</p>
                          <p>phone Number: {product?.phoneNumber}</p>
                        </td>
                      )}
                      {index === 0 && (
                        <td
                          className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                          rowSpan={product.order.length} // Span the rows according to the order length
                        >
                          <button
                            onClick={() => handleDeleteProduct(product?._id)}
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
      </div>
    </div>
  );
};

export default OrderList;
