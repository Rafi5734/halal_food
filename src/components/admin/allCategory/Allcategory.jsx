"use client";

import { useState } from "react";
import CategoryModal from "./CategoryModal";
import { useGetSingleCategoryQuery } from "@/api/categorySlice/categorySlice";

const Allcategory = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const { data: singleCategory, isLoading } =
    useGetSingleCategoryQuery(categoryId);
  const handleCategoryEdit = (category) => {
    setOpenModal(true);
    setCategoryId(category);
  };
  //   console.log("data", data);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                <span class="">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((category, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {category?.category}
                </th>
                <td className="px-6 py-4 text-left">
                  <button
                    onClick={() => handleCategoryEdit(category?._id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CategoryModal
          categoryId={categoryId}
          singleCategory={singleCategory}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
};

export default Allcategory;
