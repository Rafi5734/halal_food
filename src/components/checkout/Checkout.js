"use client";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, Modal } from "flowbite-react";
import { getCookie } from "../helper/cookies";
import { useCheckoutPostMutation } from "@/api/checkoutSlice/checkoutSlice";
import Swal from "sweetalert2";
import CheckoutModal from "./checkoutModal/CheckoutModal";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const myCookieValue = getCookie("bisuddho_cookies");
  const [openModal, setOpenModal] = useState(false);
  const [productQuantity, setProductQuantity] = useState("");
  // console.log("singleProduct", JSON.parse(myCookieValue));
  const [checkoutPost] = useCheckoutPostMutation();
  const [deliveryCharge, setDeliveryCharge] = useState();

  if (myCookieValue) {
    var totalPrice =
      JSON.parse(myCookieValue)?.price * Number(productQuantity) +
      Number(deliveryCharge);
  }
  if (myCookieValue && dhakaOutside) {
    var totalPrice =
      JSON.parse(myCookieValue)?.price * Number(productQuantity) +
      Number(deliveryCharge);
  }
  // console.log("i am from form submit button", deliveryCharge);
  const [checkoutFormData, setCheckoutFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    thanaDistrict: "",
    product_quantity: "",
    delivery_charge: "",
    totalPrice: "",
    status: "pending",
    order: {},
  });

  useEffect(() => {
    const myCookieValue = getCookie("bisuddho_cookies");

    if (myCookieValue) {
      // Parse the cookie value and update the order array in the state
      const parsedCookieValue = JSON.parse(myCookieValue);
      setCheckoutFormData((prevFormData) => ({
        ...prevFormData,
        order: parsedCookieValue,
        delivery_charge: deliveryCharge,
        totalPrice: totalPrice,
        productQuantity: productQuantity,
      }));
    }
    setProductQuantity(checkoutFormData?.product_quantity);
  }, [
    checkoutFormData?.product_quantity,
    deliveryCharge,
    productQuantity,
    totalPrice,
    myCookieValue,
  ]);
  const handleCheckoutInputChange = (event) => {
    const { name, value } = event.target;
    setCheckoutFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await checkoutPost(checkoutFormData);
    if (result) {
      Swal.fire({
        title: "Good job!",
        text: "Your successfully order the product",
        icon: "success",
      });
    }

    // setCheckoutFormData({
    //   fullName: "",
    //   phoneNumber: "",
    //   address: "",
    //   thanaDistrict: "",
    //   delivery_charge: "",
    //   totalPrice: 0,
    //   product_quantity: "",
    //   status: "pending",
    //   order: {},
    // });
    setOpenModal(true);
  };
  if (myCookieValue) {
    var subTotalPrice =
      JSON.parse(myCookieValue)?.price * Number(productQuantity);
  }

  const handleOrderCompleted = () => {
    setOpenModal(false);
    router.push("/");
  };
  // console.log("i am from form productQuantity", productQuantity);
  return (
    <div className="container mx-auto mt-8">
      <div className="text-center">
        <div className="flex justify-center">
          <span className="text-4xl font-bold">Checkout Details</span>{" "}
        </div>
      </div>

      <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
        <form onSubmit={handleFormSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Billing and Shipping
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-bold leading-6 text-gray-900"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    পণ্যটির পরিমান
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="product_quantity"
                      value={checkoutFormData.product_quantity}
                      onChange={handleCheckoutInputChange}
                      onBlur={(e) => {
                        setProductQuantity(e.target.value);
                      }}
                      id="product_quantity"
                      placeholder="কতটি পণ্য লাগবে"
                      autoComplete="product_quantity"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="phone_number"
                    className="block text-sm font-bold leading-6 text-gray-900"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-bold leading-6 text-gray-900"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="thana_district"
                    className="block text-sm font-bold leading-6 text-gray-900"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" color="warning" className="w-full mt-8">
            <span className="text-black font-bold">অর্ডারটি সম্পূর্ণ করুন</span>
          </Button>
          <Modal show={openModal} onClose={() => handleOrderCompleted()}>
            <Modal.Header>
              Invoice #{JSON.parse(myCookieValue)?.SKUId}
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <CheckoutModal
                  checkoutFormData={checkoutFormData}
                  productQuantity={productQuantity}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#d19c22]"
                onClick={() => handleOrderCompleted()}
              >
                অর্ডারটি সম্পন্ন হয়েছে |
              </Button>
            </Modal.Footer>
          </Modal>
        </form>

        <div>
          <div className="mt-5 border-2 border-[#000000] p-5">
            <div className="">
              <p className="font-bold pb-2 text-xl">আপনার অর্ডার</p>
              <div className="flex justify-between mt-5 border-b-2 border-[#ccccd6]">
                <p className="font-bold">পণ্য</p>
                <p className="font-bold">মোট টাকা</p>
              </div>
              <div className="flex justify-between mt-5 border-b-2 border-[#ccccd6]">
                <p className="text-muted">
                  <span className="font-bold">
                    {JSON.parse(myCookieValue)?.name}
                  </span>{" "}
                  {/* <span className="font-bold"> - 1</span> */}
                </p>
                <p className="font-bold">
                  {JSON.parse(myCookieValue)?.price} <span>Tk</span> *{" "}
                  {Number(productQuantity)} <span>items</span>{" "}
                </p>
              </div>
              <div className="flex justify-between mt-5 border-b-2 border-[#ccccd6]">
                <p className="text-muted">
                  <span className="font-bold">Sub Total</span>{" "}
                  {/* <span className="font-bold"> - 1</span> */}
                </p>
                <p className="font-bold">
                  {subTotalPrice} <span>Tk</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4 mt-8">
              <input
                id="default-radio-1"
                type="radio"
                value="80"
                name="delivery_charge"
                onChange={(e) => setDeliveryCharge(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-black"
              >
                ঢাকার মধ্যে - <span className="font-bold">80 tk</span>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value="100"
                name="delivery_charge"
                onChange={(e) => setDeliveryCharge(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                ঢাকার বাহিরে - <span className="font-bold">100 tk</span>
              </label>
            </div>
            <div className="flex justify-between mt-5 border-b-2 border-t-2 border-[#ccccd6]">
              <p className="">মোট</p>
              <p className="font-bold">{totalPrice} tk</p>
            </div>
            <div>
              <p className="font-bold mt-5">Cash on delivery</p>
              <p className="font-normal">Pay with cash upon delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
