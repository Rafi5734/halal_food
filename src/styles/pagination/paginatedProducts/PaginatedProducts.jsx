import Image from "next/image";
import React from "react";

const PaginatedProducts = ({ currentItems }) => {
  return (
    <div class="rounded">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="rounded text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr class="">
            <th scope="col" class="px-5 py-3 rounded-tl-lg">
              <span class="rounded">#SN</span>
            </th>
            <th scope="col" class="px-5 py-3">
              <span>Image</span>
            </th>
            <th scope="col" class="px-6 py-3">
              Product
            </th>
            <th scope="col" class="px-6 py-3">
              Weight
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3 rounded-tr-lg">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems?.map((product, index) => (
              <tr
                key={index}
                class="rounded bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white rounded-bl-lg">
                  {index + 1}
                </td>
                <td class="p-4">
                  <Image
                    className="rounded object-contain"
                    src={product?.imageLink}
                    width={200}
                    // width="100%"
                    height={200}
                    // sizes="100vw"
                    quality={75}
                    // placeholder="blur"
                    sizes="(max-width: 100%)"
                    alt="all product image"
                  />
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product?.name}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product?.weight} KG
                </td>

                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${product?.price}
                </td>
                <td class="px-6 py-4 rounded-br-lg">
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                  <a
                    href="#"
                    class="ms-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
