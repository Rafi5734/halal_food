"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import {
  useCategoryPostMutation,
  useGetAllCategoriesQuery,
} from "@/api/categorySlice/categorySlice";
import Swal from "sweetalert2";
import { useProductPostMutation } from "@/api/productSlice/productSlice";
import axios from "axios";
const AdminAddProduct = () => {
  const fileInputRef = useRef(null);
  const [categoryPost, { isLoading }] = useCategoryPostMutation();
  const [productPost, { isLoading: productIsLoading }] =
    useProductPostMutation();
  const { data: categoryData, isLoading: getAllCategoriesIsLoading } =
    useGetAllCategoriesQuery();
  const [imageUploading, setImageUploading] = useState(false);

  const [productFormData, setProductFormData] = useState({
    category: "",
    name: "",
    imageLink: "",
    price: "",
    description: "",
    stock: "",
    discount: "",
    status: "pending",
    quantity: 0,
    SKUId: "",
    sold: "",
    reviews: [],
    subCategory: "",
  });

  const [formData, setFormData] = useState({
    category: "",
  });

  const [subCategory2, setSubCategory2] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleProductInputChange = (event) => {
    const { name, value } = event.target;
    setProductFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProductInputChange2 = (event) => {
    const { name, value } = event.target;
    setProductFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_images"); // Replace with your Cloudinary preset

    setImageUploading(true);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dhojflhbx/image/upload`,
        formData
      );
      
      setProductFormData((prevData) => ({
        ...prevData,
        imageLink: response.data.secure_url,
      }));
      const originalImage = productFormData?.imageLink
      // Transform Cloudinary link to add width
      const transformedImage = originalImage.replace(
        "/upload/",
        "/upload/w_500/" // Adjust width to 500px
      );
      console.log(transformedImage);
      Swal.fire({
        title: "Success!",
        text: "Image uploaded successfully.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to upload image.",
        icon: "error",
      });
    } finally {
      setImageUploading(false);
    }
  };

  const handleProductFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await productPost(productFormData);
      if (result?.data) {
        Swal.fire({
          title: "Product added successfully!",
          icon: "success",
        });
      }
    } catch (err) {}
  };

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
      <p className="text-center text-4xl mt-5 font-bold mb-10">Add a product</p>
      <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-3">
        <form className="ms-4" onSubmit={handleFormSubmit}>
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
            {/* <div>
              <div className="mb-2 block">
                <Label htmlFor="imageLink" value="Product thumbnail Image" />
              </div>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="imageLink"
                type="text"
                name="imageLink"
                value={productFormData.imageLink}
                onChange={handleProductInputChange}
              />
            </div> */}
            <div>
              <Label htmlFor="imageLink" value="Product Image" />
              <input
                type="file"
                id="imageLink"
                name="imageLink"
                onChange={handleImageUpload}
                accept="image/*"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                required
              />
              {imageUploading && <p>Uploading...</p>}
              {productFormData.imageLink && (
                <img
                  src={productFormData.imageLink}
                  alt="Uploaded"
                  className="mt-2 w-32 h-32 object-cover"
                />
              )}
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
                  <option value="easy">Easy</option>
                  <option value="deshal">Deshal</option>
                  <option value="arong">Arong</option>
                </Select>
              </div>
            )}

            {subCategory2 === "Cosmatics" && (
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="subCategory2" value="Select a sub category" />
                </div>
                <Select
                  id="sub_category2"
                  name="subCategory2"
                  value={productFormData.subCategory2}
                  onChange={handleProductInputChange2}
                  required
                >
                  <option>Select a category</option>
                  <option value="lakme">Lakme</option>
                  <option value="imagic">Imagic</option>
                  <option value="sheglam">Sheglam</option>
                </Select>
              </div>
            )}

            <div>
              <div className="mb-2 block">
                <Label htmlFor="discount" value="Product discount %" />
              </div>
              <TextInput
                id="discount"
                type="text"
                name="discount"
                value={productFormData.discount}
                onChange={handleProductInputChange}
                placeholder="Product discount (%)"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="stock" value="Product stock" />
              </div>
              <TextInput
                id="stock"
                type="text"
                name="stock"
                value={productFormData.stock}
                onChange={handleProductInputChange}
                placeholder="Product stock"
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
            {productIsLoading ? (
              <>
                <button
                  disabled
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              </>
            ) : (
              <>
                <Button type="submit">Create a product</Button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default AdminAddProduct;
