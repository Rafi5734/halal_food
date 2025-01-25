import { useImagePostMutation } from "@/api/productSlice/productSlice";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ImageAddModal({ isOpen, onOpenChange, getProductId }) {
  const [imageInfo, setImageInfo] = useState({
    url: "",
    title: "",
  });

  const [uploading, setUploading] = useState(false);

  const [imagePost] = useImagePostMutation();

  const handleInputValueChange = (e) => {
    const { name, value } = e.target;
    setImageInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_images"); // Replace with your preset

    try {
      setUploading(true);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dhojflhbx/image/upload`, // Replace with your Cloudinary URL
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setImageInfo((prev) => ({
          ...prev,
          url: data.secure_url,
          productId: getProductId,
        }));
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleCreate = async () => {
    if (!imageInfo.url || !imageInfo.title) {
      alert("Please provide an image and a title.");
      return;
    }

    // console.log("getProductId", getProductId);

    try {
      const result = await imagePost(imageInfo);

      if (result?.data) {
        Swal.fire({
          title: "Images added this product",
          //   text: "Logged In Successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Images not added this product",
          //   text: "Logged In Successfully",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: err?.message,
        // text: "Logged In Successfully",
        icon: "error",
      });
    }

    // console.log("imageInfo", imageInfo);

    // Reset the form and close the modal
    setImageInfo({ url: "", title: "" });
    onOpenChange(false);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload Images
              </ModalHeader>
              <ModalBody>
                <label htmlFor="file-upload">Upload an image</label>
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                />
                {uploading && <p>Uploading image...</p>}
                {imageInfo?.url && (
                  <>
                    <p className="text-green-500">
                      Image uploaded successfully!
                    </p>
                    <Image src={imageInfo.url} width={100} />
                  </>
                )}

                <label
                  htmlFor="title-input"
                  className="block text-sm font-medium text-gray-900 mt-3"
                >
                  Add a title
                </label>
                <input
                  type="text"
                  id="title-input"
                  name="title"
                  value={imageInfo.title}
                  placeholder="Enter a title"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleInputValueChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="success"
                  variant="light"
                  onPress={() => {
                    handleCreate();
                    onClose();
                  }}
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
