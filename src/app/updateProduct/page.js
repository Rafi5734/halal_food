"use client";
import {
  useGetSingleProductsQuery,
  useUpdateProductMutation,
} from "@/api/productSlice/productSlice";
import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function UpdateProduct({ searchParams }) {
  const { data: getASingleProductData } = useGetSingleProductsQuery(
    searchParams?._id
  );

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const [updatedProductData, setUpdatedProductData] = useState({});
  //   console.log("getASingleProductData", getASingleProductData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
    const productId = searchParams?._id;

    try {
      const result = await updateProduct({ updatedProductData, productId });
      if (result?.data) {
        Swal.fire({
          title: "Update!",
          text: "Product Information Updated",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Something is wrong. Try again!",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err?.message,
        icon: "error",
      });
    }
  };
  return (
    <div className="container mx-auto">
      <p className="text-center text-4xl font-bold mt-10 mb-10">
        Update{" "}
        <span className="text-[#008f8f]">{getASingleProductData?.name}</span>{" "}
        information
      </p>
      <form className="container mx-auto" onSubmit={handleUpdateFormSubmit}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={getASingleProductData?.name}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={getASingleProductData?.price}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="imageLink"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Thumbnail Image & Other Images
            </label>
            {/* <Image width={100} src={getASingleProductData?.imageLink}></Image> */}
            <div className="flex flex-row gap-3">
              {getASingleProductData?.imageLinks?.map((images) => (
                <Image key={images?.url} width={100} src={images?.url}></Image>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="discount"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Discount (%)
            </label>
            <input
              type="text"
              id="discount"
              name="discount"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={getASingleProductData?.discount}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sourceUrl"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Source URL
            </label>
            <input
              type="text"
              id="sourceUrl"
              name="sourceUrl"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={getASingleProductData?.sourceUrl}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sourceName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Source Name
            </label>
            <input
              type="text"
              id="sourceName"
              name="sourceName"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={getASingleProductData?.sourceName}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="SKUId"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product SKU Id
            </label>
            <input
              type="text"
              id="SKUId"
              name="SKUId"
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={getASingleProductData?.SKUId}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Description
            </label>
            <textarea
              id="description"
              rows="4"
              name="description"
              onChange={handleInputChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
              defaultValue={getASingleProductData?.description}
            ></textarea>
          </div>
        </div>
        {isLoading ? (
          <Button
            isLoading
            className="bg-[#008f8f] text-[#ffffff] w-full mt-5 mb-5"
          >
            Loading
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-[#008f8f] text-[#ffffff] w-full mt-5 mb-5"
          >
            Update
          </Button>
        )}
      </form>
    </div>
  );
}
