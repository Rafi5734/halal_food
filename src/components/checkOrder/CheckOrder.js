"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { getCookie } from "../helper/cookies";
import { useCheckoutPostMutation } from "@/api/checkoutSlice/checkoutSlice";
import Swal from "sweetalert2";
import CheckoutModal from "../checkout/checkoutModal/CheckoutModal";
import { useRouter } from "next/navigation";
import { clearCart, getCart } from "@/utils/CartUtils";
import Cookies from "js-cookie";

const CheckOrder = () => {
  const router = useRouter();
  const myCookieValuecookies = getCart();

  var productCookieValue = Cookies.get("bisuddho_cookies");
  const productQuantity = Cookies.get("productQuantity");
  const size = Cookies.get("size");

  productCookieValue = productCookieValue
    ? JSON.parse(productCookieValue)
    : null;

  if (productCookieValue) {
    // Add new properties to the object
    productCookieValue.productQuantity = productQuantity;
    productCookieValue.size = size;
  } else {
    console.error("No productCookieValues found in cookies.");
  }

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
  const [checkoutPost, { isLoading: orderLoader }] = useCheckoutPostMutation();

  const handleCheckoutInputChange = (event) => {
    const { name, value } = event.target;
    setCheckoutFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    checkoutFormData.order.push(productCookieValue);

    const result = await checkoutPost(checkoutFormData);
    if (result?.data) {
      setOpenModal(true);
      Swal.fire({
        title: "Good job!",
        text: "You successfully ordered this product",
        icon: "success",
      });
    }
  };

  const handleOrderCompleted = () => {
    setOpenModal(false);
    router.push("/");
    clearCart();
  };

  return (
    <div className="ps-5 pe-5">
      <div className="container mx-auto mt-8">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="text-4xl font-bold text-[#008f8f]">
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
                      className="block text-sm font-bold leading-6 text-[#008f8f]"
                    >
                      Your full name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="fullName"
                        value={checkoutFormData.fullName}
                        onChange={handleCheckoutInputChange}
                        id="full_name"
                        placeholder="Enter your full name"
                        autoComplete="full_name"
                        className="block w-full rounded-md border-0 py-1.5 text-[#008f8f] shadow-sm ring-1 ring-inset ring-[#008f8f] placeholder:text-[#008f8f] focus:ring-2 focus:ring-inset focus:ring-[#008f8f] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <div className="col-span-full">
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-bold leading-6 text-[#008f8f]"
                    >
                      Your phone number
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phoneNumber"
                        value={checkoutFormData.phoneNumber}
                        onChange={handleCheckoutInputChange}
                        id="phone_number"
                        autoComplete="phone_number"
                        placeholder="Enter your phone number"
                        className="block w-full rounded-md border-0 py-1.5 text-[#008f8f] shadow-sm ring-1 ring-inset ring-[#008f8f] placeholder:text-[#008f8f] focus:ring-2 focus:ring-inset focus:ring-[#008f8f] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  {/* Address Input */}
                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-bold leading-6 text-[#008f8f]"
                    >
                      Your address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        value={checkoutFormData.address}
                        onChange={handleCheckoutInputChange}
                        id="address"
                        autoComplete="address"
                        placeholder="Enter your full address"
                        className="block w-full rounded-md border-0 py-1.5 text-[#008f8f] shadow-sm ring-1 ring-inset ring-[#008f8f] placeholder:text-[#008f8f] focus:ring-2 focus:ring-inset focus:ring-[#008f8f] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  {/* Thana District Input */}
                  <div className="col-span-full">
                    <label
                      htmlFor="thana_district"
                      className="block text-sm font-bold leading-6 text-[#008f8f]"
                    >
                      Thana & Zilla
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="thanaDistrict"
                        value={checkoutFormData.thanaDistrict}
                        onChange={handleCheckoutInputChange}
                        id="thana_district"
                        placeholder="Enter your thana & zilla"
                        autoComplete="thana_district"
                        className="block w-full rounded-md border-0 py-1.5 text-[#008f8f] shadow-sm ring-1 ring-inset ring-[#008f8f] placeholder:text-[#008f8f] focus:ring-2 focus:ring-inset focus:ring-[#008f8f] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {orderLoader ? (
              <>
                <button
                  disabled
                  type="button"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
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
                <button
                  type="submit"
                  className="w-full mt-8 bg-[#dbfcfc] pt-3 pb-3 rounded-full"
                >
                  <span className="text-[#008f8f] font-bold">
                    Complete your order
                  </span>
                </button>
              </>
            )}

            <Modal show={openModal} onClose={() => handleOrderCompleted()}>
              <Modal.Header>Invoice</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <CheckoutModal productCookieValue={productCookieValue} />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="bg-[#dbfcfc] p-3 rounded-full text-[#008f8f]"
                  onClick={() => handleOrderCompleted()}
                >
                  Order completed!
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
