"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { getCookie } from "../helper/cookies";
import { useCheckoutPostMutation } from "@/api/checkoutSlice/checkoutSlice";
import Swal from "sweetalert2";
import CheckoutModal from "../checkout/checkoutModal/CheckoutModal";
import { useRouter } from "next/navigation";
import { clearCart, getCart } from "@/utils/CartUtils";

const CheckOrder = () => {
  const router = useRouter();
  const myCookieValuecookies = getCart();

  const [checkoutFormData, setCheckoutFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    thanaDistrict: "",
    delivery_charge: "",
    totalPrice: "",
    status: "pending",
    order: [],
  });
  const [openModal, setOpenModal] = useState(false);
  const [checkoutPost] = useCheckoutPostMutation();

  const handleCheckoutInputChange = (event) => {
    const { name, value } = event.target;
    setCheckoutFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the cookie data (already in array format)
    const cookies = getCart(); // Assuming this returns an array directly

    // Check if cookies exist
    if (cookies && Array.isArray(cookies)) {
      // Instead of relying on async state, use the latest form data directly
      const updatedCheckoutFormData = {
        ...checkoutFormData,
        order: cookies, // Directly assign the cookies array to the 'order' property
      };

      setOpenModal(true);

      // Now, submit the data (API call or further logic)
      const result = await checkoutPost(updatedCheckoutFormData);
      if (result) {
        Swal.fire({
          title: "Good job!",
          text: "You successfully ordered the product",
          icon: "success",
        });
        setOpenModal(true);
      }
    } else {
      console.error("No cookies found or cookies are not in array format!");
    }
  };

  const handleOrderCompleted = () => {
    setOpenModal(false);
    router.push("/");
    clearCart(); // Clear cart on order completion
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="text-4xl font-bold text-[#ff7f00]">
              Checkout Details
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-5">
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Full Name Input */}
                  <div className="col-span-full">
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-bold leading-6 text-[#ff7f00]"
                    >
                      পুরো নাম
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="fullName"
                        value={checkoutFormData.fullName}
                        onChange={handleCheckoutInputChange}
                        id="full_name"
                        placeholder="আপনার পুরো নাম লিখুন"
                        autoComplete="full_name"
                        className="block w-full rounded-md border-0 py-1.5 text-[#ff7f00] shadow-sm ring-1 ring-inset ring-[#ff7f00] placeholder:text-[#ff7f00] focus:ring-2 focus:ring-inset focus:ring-[#ff7f00] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <div className="col-span-full">
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-bold leading-6 text-[#ff7f00]"
                    >
                      ফোন নাম্বার
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phoneNumber"
                        value={checkoutFormData.phoneNumber}
                        onChange={handleCheckoutInputChange}
                        id="phone_number"
                        autoComplete="phone_number"
                        placeholder="ফোন নাম্বার লিখুন"
                        className="block w-full rounded-md border-0 py-1.5 text-[#ff7f00] shadow-sm ring-1 ring-inset ring-[#ff7f00] placeholder:text-[#ff7f00] focus:ring-2 focus:ring-inset focus:ring-[#ff7f00] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  {/* Address Input */}
                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-bold leading-6 text-[#ff7f00]"
                    >
                      ঠিকানা
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        value={checkoutFormData.address}
                        onChange={handleCheckoutInputChange}
                        id="address"
                        autoComplete="address"
                        placeholder="আপনার ঠিকানা লিখুন"
                        className="block w-full rounded-md border-0 py-1.5 text-[#ff7f00] shadow-sm ring-1 ring-inset ring-[#ff7f00] placeholder:text-[#ff7f00] focus:ring-2 focus:ring-inset focus:ring-[#ff7f00] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  {/* Thana District Input */}
                  <div className="col-span-full">
                    <label
                      htmlFor="thana_district"
                      className="block text-sm font-bold leading-6 text-[#ff7f00]"
                    >
                      থানা এবং জেলা
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="thanaDistrict"
                        value={checkoutFormData.thanaDistrict}
                        onChange={handleCheckoutInputChange}
                        id="thana_district"
                        placeholder="আপনার থানা এবং জেলা নাম লিখুন"
                        autoComplete="thana_district"
                        className="block w-full rounded-md border-0 py-1.5 text-[#ff7f00] shadow-sm ring-1 ring-inset ring-[#ff7f00] placeholder:text-[#ff7f00] focus:ring-2 focus:ring-inset focus:ring-[#ff7f00] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-[#f0cca8] pt-3 pb-3 rounded-full"
            >
              <span className="text-[#ff7f00] font-bold">
                অর্ডারটি সম্পূর্ণ করুন
              </span>
            </button>

            <Modal show={openModal} onClose={() => handleOrderCompleted()}>
              <Modal.Header>Invoice</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <CheckoutModal myCookieValuecookies={myCookieValuecookies} />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="bg-[#f0cca8] p-3 rounded-full text-[#ff7f00]"
                  onClick={() => handleOrderCompleted()}
                >
                  অর্ডারটি সম্পন্ন হয়েছে
                </button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
