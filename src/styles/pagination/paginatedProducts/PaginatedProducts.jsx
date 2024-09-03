import { useDeleteProductMutation } from "@/api/productSlice/productSlice";
import Image from "next/image";
import React from "react";

const PaginatedProducts = ({ currentItems }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleProductDelete = async (productId) => {
    try {
      const result = await deleteProduct({ productId });
      console.log("deleted", result);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div className="rounded">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="rounded text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th scope="col" className="px-5 py-3 rounded-tl-lg">
              <span className="rounded">#SN</span>
            </th>
            <th scope="col" className="px-5 py-3">
              <span>Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3 rounded-tr-lg">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems
              ?.slice()
              ?.reverse()
              ?.map((product, index) => (
                <tr
                  key={index}
                  className="rounded bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white rounded-bl-lg">
                    {index + 1}
                  </td>
                  <td className="p-4">
                    <Image
                      classNameName="rounded object-contain"
                      src={product?.imageLink}
                      width={150}
                      // width="100%"
                      height={150}
                      // sizes="100vw"
                      quality={75}
                      // placeholder="blur"
                      sizes="(max-width: 100%)"
                      alt="all product image"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product?.name}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product?.weight} KG
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${product?.price}
                  </td>
                  <td className="px-6 py-4 rounded-br-lg">
                    <button
                      onClick={() => handleProductDelete(product?._id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                    <a
                      href="#"
                      className="ms-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaginatedProducts;
