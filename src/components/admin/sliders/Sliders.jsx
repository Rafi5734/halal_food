"use client";
import { useState } from "react";
import { Button, Image, Tooltip } from "@nextui-org/react";
import PlusIcon from "../../../../public/icons/PlusIcon";
import DeleteIcon from "@/assets/DeleteIcon";
import EditIcon from "../../../../public/icons/EditIcon";
import Swal from "sweetalert2";
import {
  useDeleteSliderMutation,
  useGetAllSliderQuery,
  useSliderPostMutation,
  useSliderUpdateMutation,
} from "@/api/sliders/sliderSlice";

export default function Sliders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal
  const [loading, setLoading] = useState(false);
  const [selectedSlider, setSelectedSlider] = useState(null); // State to store the selected slider for editing

  const [sliderData, setSliderData] = useState({
    title: "",
    image: "",
    status: "active",
  });

  const [sliderPost, { isLoading: sliderPostLoader }] = useSliderPostMutation();
  const { data: getAllSliderData, isLoading: sliderAllDataLoader } =
    useGetAllSliderQuery();

  const [deleteSlider, { isLoading: loaderForDelete }] =
    useDeleteSliderMutation();
  const [sliderUpdate, { isLoading: updateSliderLoader }] =
    useSliderUpdateMutation(); // Add this mutation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSliderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_images"); // Replace with your Cloudinary upload preset

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dhojflhbx/image/upload`, // Replace with your Cloudinary cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      if (res?.status === 400) {
        Swal.fire({
          title: "Error!",
          text: "Image size is too much!",
          icon: "error",
        });
      }

      const data = await res.json();
      setSliderData((prev) => ({
        ...prev,
        image: data.secure_url, // Cloudinary URL
      }));

      // console.log("Image uploaded:", data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSliderDataFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await sliderPost(sliderData);

      if (result?.data) {
        Swal.fire({
          title: "Success!",
          text: "Slider added successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong, Try again!",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err?.message,
        icon: "error",
      });
    }
    // console.log("sliderData", sliderData);
  };

  const handleSliderDelete = async (sliderId) => {
    try {
      const result = await deleteSlider(sliderId);
      if (result?.data) {
        Swal.fire({
          title: "Success!",
          text: "Slider deleted successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Slider not deleted. Try again!",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err?.message,
        icon: "error",
      });
    }
  };

  const handleSliderEdit = (slider) => {
    setSelectedSlider(slider); // Set the selected slider
    setSliderData({
      title: slider.title,
      image: slider.image,
      status: slider.status,
    });
    setIsEditModalOpen(true); // Open the edit modal
  };

  const handleEditSliderDataFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("sliderData", sliderData);
    // console.log("sliderId", selectedSlider._id);
    try {
      const result = await sliderUpdate({
        sliderData,
        sliderId: selectedSlider._id,
      });

      if (result?.data) {
        Swal.fire({
          title: "Success!",
          text: "Slider updated successfully!",
          icon: "success",
        });
        setIsEditModalOpen(false); // Close the edit modal
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong, Try again!",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err?.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="w-full overflow-x-auto ms-3 me-3">
      <p className="text-center text-4xl mt-5 font-bold mb-10 text-wrap w-full underline underline-offset-4">
        Sliders Controller
      </p>

      <Tooltip content="Create a slider">
        <Button
          className="bg-[#008f8f] mb-4"
          isIconOnly
          onClick={() => setIsModalOpen(true)}
        >
          <PlusIcon />
        </Button>
      </Tooltip>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Create a Slider</h2>
            <form onSubmit={handleSliderDataFormSubmit}>
              <input
                type="text"
                placeholder="Enter slider title"
                name="title"
                value={sliderData?.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="file"
                className="w-full p-2 border rounded mb-4"
                onChange={handleImageUpload}
              />
              {loading && <p className="text-blue-500">Uploading...</p>}
              {sliderData.image && (
                <Image
                  src={sliderData.image}
                  alt="Slider Preview"
                  width={300}
                  className="mb-4"
                />
              )}
              <div className="flex justify-end">
                <Button
                  className="bg-gray-400 me-2 text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                {sliderPostLoader ? (
                  <>
                    <Button isLoading className="bg-[#008f8f] text-white">
                      Loading
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="bg-[#008f8f] text-white" type="submit">
                      Create
                    </Button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Slider</h2>
            <form onSubmit={handleEditSliderDataFormSubmit}>
              <input
                type="text"
                placeholder="Enter slider title"
                name="title"
                value={sliderData?.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="file"
                className="w-full p-2 border rounded mb-4"
                onChange={handleImageUpload}
              />
              {loading && <p className="text-blue-500">Uploading...</p>}
              {sliderData.image && (
                <Image
                  src={sliderData.image}
                  alt="Slider Preview"
                  width={300}
                  className="mb-4"
                />
              )}
              <div className="flex justify-end">
                <Button
                  className="bg-gray-400 me-2 text-white"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>
                {updateSliderLoader ? (
                  <>
                    <Button isLoading className="bg-[#008f8f] text-white">
                      Loading
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="bg-[#008f8f] text-white" type="submit">
                      Update
                    </Button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="w-full">
              <th scope="col" className="w-full px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {getAllSliderData?.map((slider) => (
              <tr key={slider?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    alt={slider?.image}
                    src={slider?.image}
                    width="100%"
                    height={200}
                  />
                </th>
                <td className="px-6 py-4 text-nowrap">{slider.title}</td>
                <td className="px-6 py-4 flex flex-row justify-center items-center">
                  <Tooltip content="Delete a slider">
                    <Button
                      className="bg-[#C81E1E]"
                      isIconOnly
                      onClick={() => handleSliderDelete(slider?._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Edit a slider">
                    <Button
                      onClick={() => handleSliderEdit(slider)}
                      className="bg-[#0E9F6E] ms-3"
                      isIconOnly
                    >
                      <EditIcon />
                    </Button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
