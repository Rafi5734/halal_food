"use client";

import { useState } from "react";
import CategoryModal from "./CategoryModal";
import {
  useDeleteCategoryMutation,
  useGetSingleCategoryQuery,
} from "@/api/categorySlice/categorySlice";

import { Tooltip, Button } from "@nextui-org/react";
import DeleteIcon from "@/assets/DeleteIcon";

const Allcategory = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState();

  const [deleteCategory, { isLoading: categoryDeleteLoader }] =
    useDeleteCategoryMutation();

  const { data: singleCategory, isLoading } =
    useGetSingleCategoryQuery(categoryId);
  const handleCategoryEdit = (category) => {
    setOpenModal(true);
    setCategoryId(category);
  };

  const handleCategoryDelete = async (id) => {
    try {
      const result = await deleteCategory(id);
      if (result) {
        wal.fire({
          title: "Good job!",
          text: "Category deleted!",
          icon: "success",
        });
      }
    } catch (e) {}
  };

  return (
    <div>
      <p className="mt-5 mb-10 text-center text-4xl font-semibold">All categories</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="">Actions</span>
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
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleCategoryEdit(category?._id)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <Tooltip content="Delete a category">
                    <Button
                      onClick={() => handleCategoryDelete(category?._id)}
                      className="text-white"
                    >
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
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
