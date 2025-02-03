"use client";
import { useState } from "react";
import { Button, Image, Tooltip } from "@nextui-org/react";
import PlusIcon from "../../../../public/icons/PlusIcon";
import DeleteIcon from "@/assets/DeleteIcon";
import EditIcon from "../../../../public/icons/EditIcon";

export default function Sliders() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [sliderData, setSliderData] = useState({
    title: "",
    image: "",
    status: "active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSliderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderDataFormSubmit = (e) => {
    e.preventDefault();

    console.log("sliderData", sliderData);
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
              <input type="file" className="w-full p-2 border rounded mb-4" />
              <div className="flex justify-end">
                <Button
                  className="bg-gray-400 me-2 text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-[#008f8f] text-white" type="submit">
                  Create
                </Button>
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Image
                  alt="HeroUI hero Image"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={300}
                />
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4 flex flex-row justify-center items-center">
                <Tooltip content="Delete a slider">
                  <Button className="bg-[#C81E1E]" isIconOnly>
                    <DeleteIcon />
                  </Button>
                </Tooltip>
                <Tooltip content="Edit a slider">
                  <Button className="bg-[#0E9F6E] ms-3" isIconOnly>
                    <EditIcon />
                  </Button>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
