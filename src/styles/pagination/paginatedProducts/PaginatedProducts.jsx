import { useDeleteProductMutation } from "@/api/productSlice/productSlice";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import ImageAddModal from "./imageAddModal/ImageAddModal";
import EditIcon from "../../../../public/icons/EditIcon";
import Link from "next/link";

const PaginatedProducts = ({ currentItems }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [getProductId, setGetProductId] = useState();

  const [deleteProduct] = useDeleteProductMutation();

  const handleProductDelete = async (productId) => {
    try {
      const result = await deleteProduct({ productId });
      if (result?.data) {
        Swal.fire({
          title: "Product deleted!",
          // text: "Logged In Successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Product not deleted!",
          // text: "Logged In Successfully",
          icon: "error",
        });
      }
      // console.log("deleted", result);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleProductUpdate = (productId) => {
    console.log("productId", productId);
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
              category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              discount
            </th>
            <th scope="col" className="px-6 py-3">
              Date
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
                  className="rounded border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
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
                    {product?.category}
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product?.price} TK
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product?.discount}%
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {new Date(product?.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 rounded-br-lg">
                    <button
                      onClick={() => handleProductDelete(product?._id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                    <Link
                      href={{
                        pathname: "/updateProduct",
                        query: { _id: product._id },
                      }}
                    >
                      <Button
                        isIconOnly
                        // onPress={onOpen}
                        onClick={() => handleProductUpdate(product?._id)}
                        className="ms-3 mt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <EditIcon />
                      </Button>
                    </Link>

                    <Button
                      onPress={onOpen}
                      onClick={() => setGetProductId(product?._id)}
                      className="ms-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Add images
                    </Button>
                  </td>
                </tr>
              ))}
          <ImageAddModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            getProductId={getProductId}
          />
        </tbody>
      </table>
    </div>
  );
};

export default PaginatedProducts;
