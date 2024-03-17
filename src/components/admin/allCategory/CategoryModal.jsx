"use client";
import React from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useGetSingleCategoryQuery } from "@/api/categorySlice/categorySlice";

const CategoryModal = ({ setOpenModal, openModal, categoryId }) => {
  //   console.log("i am from edit category", categoryId);
  const { data: singleCategory, isLoading } =
    useGetSingleCategoryQuery(categoryId);

  //   console.log("singleCategory", singleCategory);
  return (
    <div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <p className="text-center">Change Category Name</p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category_name" value="Category Name" />
              </div>
              <TextInput
                id="category_name"
                placeholder="Category Name"
                defaultValue={singleCategory?.category}
                // value={singleCategory?.category}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Change</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryModal;
