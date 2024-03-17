"use client";
import React, { useState } from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useUpdateSingleCategoryMutation } from "@/api/categorySlice/categorySlice";

const CategoryModal = ({
  setOpenModal,
  openModal,
  singleCategory,
  categoryId,
}) => {
  const [formData, setFormData] = useState({
    category: "",
  });
  const [updateSingleCategory, { data: updateCategoryData }] =
    useUpdateSingleCategoryMutation();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateCategory = async (e) => {
    e.preventDefault();
    const category = formData;
    const result = await updateSingleCategory({ categoryId, category });
    // console.log("updated", result);
    setOpenModal(false);
  };
  //   console.log("i am from edit formData", formData?.category);
  return (
    <div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <form onSubmit={updateCategory}>
          <Modal.Header>
            <p className="text-center">Change Category Name</p>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Category Name" />
                </div>
                <input
                  id="category"
                  name="category"
                  //   value={formData.category}
                  onChange={handleInputChange}
                  defaultValue={singleCategory?.category}
                  type="text"
                  autocomplete="category"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your category"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Change</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default CategoryModal;
