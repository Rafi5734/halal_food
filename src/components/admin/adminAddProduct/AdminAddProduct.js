"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import {
  useCategoryPostMutation,
  useGetAllCategoriesQuery,
} from "@/api/categorySlice/categorySlice";
import Swal from "sweetalert2";
import { useProductPostMutation } from "@/api/productSlice/productSlice";
const AdminAddProduct = () => {
  const fileInputRef = useRef(null);
  const [categoryPost, { isLoading }] = useCategoryPostMutation();
  const [productPost, { isLoading: productIsLoading }] =
    useProductPostMutation();
  const { data: categoryData, isLoading: getAllCategoriesIsLoading } =
    useGetAllCategoriesQuery();
  const [productFormData, setProductFormData] = useState({
    category: "",
    name: "",
    imageLink: "",
    price: "",
    description: "",
    weight: "",
    status: "pending",
    quantity: 0,
    SKUId: "",
    reviews: [],
    subCategory: "",
  });

  const [formData, setFormData] = useState({
    category: "",
  });

  const [subCategory, setSubCategory] = useState("");

  const handleProductInputChange = (event) => {
    const { name, value } = event.target;
    setProductFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProductFormSubmit = async (e) => {
    e.preventDefault();

    console.log("productFormData", productFormData);

    try {
      const file = fileInputRef.current.files[0];

      console.log("file: ", file);

      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("key", "9cf415951d8543caa0ce3bef03190e06");

        const imgbbResponse = await fetch("https://api.imgbb.com/1/upload", {
          method: "POST",
          body: formData,
        });
        const imgbbResult = await imgbbResponse.json();

        console.log("imgbbResult", imgbbResult);

        if (imgbbResult.success) {
          const imageUrl = imgbbResult.data.url;
          const updatedProductFormData = {
            ...productFormData,
            imageLink: imageUrl,
          };
          const result = await productPost(updatedProductFormData);
          console.log("products", result);

          if (result) {
            Swal.fire({
              title: "Good job!",
              text: "A product added successfully",
              icon: "success",
            });
          }
          if (result.error) {
            Swal.fire({
              title: "Oops...",
              text: result.error,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Oops...",
            text: "Image upload failed",
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Please select an image",
          icon: "error",
        });
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (productFormData) {
      setSubCategory(productFormData?.category);
    }
  }, [productFormData]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (categoryData?.length > 10) {
      Swal.fire({
        title: "Sorry!",
        text: "You can not add more category.",
        icon: "error",
      });
      return;
    }

    try {
      const result = await categoryPost(formData);

      if (result) {
        Swal.fire({
          title: "Good job!",
          text: "A category added successfully",
          icon: "success",
        });
      }
      if (result.error) {
        Swal.fire({
          title: "Oops...",
          text: result.error,
          icon: "error",
        });
      }
    } catch (err) {
      if (err) {
        Swal.fire({
          title: "Oops...",
          text: "User name or phone already existed",
          icon: "error",
        });
      }
    }
    setFormData({
      category: "",
      name: "",
      imageLink: "",
      price: "",
      description: "",
      weight: "",
      status: "pending",
      quantity: 0,
      SKUId: "",
      reviews: [],
      subCategory: "",
    });
  };
  return (
    <main className="">
      <p className="text-center text-4xl mt-5 font-bold mb-10">Add product</p>
      <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-3">
        <form className="" onSubmit={handleFormSubmit}>
          <div className="bg-[#111827] rounded-lg p-3">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Create a product category" />
            </div>
            <TextInput
              id="category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Create a product category"
              autocomplete="category"
              required
            />
            <Button type="submit" className="mt-5">
              Create a category
            </Button>
          </div>
        </form>
        <div>
          <form
            className="flex w-full flex-col gap-4 bg-[#111827] p-3 rounded-lg"
            onSubmit={handleProductFormSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Product Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                name="name"
                value={productFormData.name}
                onChange={handleProductInputChange}
                placeholder="Product name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="imageLink" value="Product Image" />
              </div>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                ref={fileInputRef}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Product Price" />
              </div>
              <TextInput
                id="price"
                type="number"
                name="price"
                value={productFormData.price}
                onChange={handleProductInputChange}
                placeholder="Product Price"
                required
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Select a category" />
              </div>
              <Select
                id="category"
                name="category"
                value={productFormData.category}
                onChange={handleProductInputChange}
                required
              >
                <option>Select a category</option>
                {categoryData?.map((category, index) => (
                  <>
                    <option key={index}>{category?.category}</option>
                  </>
                ))}
              </Select>
            </div>

            {subCategory === "Clothing" && (
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="subCategory" value="Select a sub category" />
                </div>
                <Select
                  id="sub_category"
                  name="subCategory"
                  value={productFormData.subCategory}
                  onChange={handleProductInputChange}
                  required
                >
                  <option>Select a category</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </div>
            )}

            <div>
              <div className="mb-2 block">
                <Label htmlFor="weight" value="Product Weight (KG)" />
              </div>
              <TextInput
                id="weight"
                type="number"
                name="weight"
                value={productFormData.weight}
                onChange={handleProductInputChange}
                placeholder="Product Weight (KG)"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="SKUId" value="Product SKU" />
              </div>
              <TextInput
                id="SKUId"
                type="text"
                name="SKUId"
                value={productFormData.SKUId}
                onChange={handleProductInputChange}
                placeholder="Product SKU"
                required
              />
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Product Description" />
              </div>
              <Textarea
                className="p-3"
                id="description"
                name="description"
                value={productFormData.description}
                onChange={handleProductInputChange}
                placeholder="Product Description"
                required
                rows={4}
              />
            </div>

            <Button type="submit">Create a product</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AdminAddProduct;
