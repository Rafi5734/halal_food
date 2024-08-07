"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { getCookie } from "../helper/cookies";
import { useCheckoutPostMutation } from "@/api/checkoutSlice/checkoutSlice";
import Swal from "sweetalert2";
import CheckoutModal from "../checkout/checkoutModal/CheckoutModal";
import { useRouter } from "next/navigation";
const CheckOrder = () => {
  const router = useRouter();

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
  const [openModal, setOpenModal] = useState(false);
  const [productQuantity, setProductQuantity] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState();
  const [storedData, setStoredData] = useState("");
  const [checkoutPost] = useCheckoutPostMutation();

  const handleCheckoutInputChange = (event) => {
    const { name, value } = event.target;
    setCheckoutFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const myCookieValue = localStorage.getItem("bisuddho_localData");
    if (myCookieValue) {
      try {
        const parsedData = JSON.parse(myCookieValue);
        setStoredData(parsedData);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        // Handle error if parsing fails
      }
    }
  }, []);

  useEffect(() => {
    setCheckoutFormData((prevFormData) => ({
      ...prevFormData,
      order: storedData,
      delivery_charge: deliveryCharge,
      totalPrice:
        storedData?.price * Number(productQuantity) + Number(deliveryCharge),
      productQuantity: productQuantity,
    }));
  }, [deliveryCharge, productQuantity, storedData]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("checkoutFormData", checkoutFormData);
    const result = await checkoutPost(checkoutFormData);
    if (result) {
      Swal.fire({
        title: "Good job!",
        text: "Your successfully order the product",
        icon: "success",
      });
    }

    setOpenModal(true);
  };

  const handleOrderCompleted = () => {
    setOpenModal(false);
    router.push("/");
  };

  // console.log("storedData", storedData);
  // console.log("myCookieValue", JSON.parse(myCookieValue));

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="text-4xl font-bold text-[#ff7f00]">
              Checkout Details
            </span>{" "}
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                  <div className="col-span-full">
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-bold leading-6 text-[#ff7f00]"
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
                        className="block w-full rounded-md border-0 py-1.5 text-[#ff7f00] shadow-sm ring-1 ring-inset ring-[#ff7f00] placeholder:text-[#ff7f00] focus:ring-2 focus:ring-inset focus:ring-[#ff7f00] sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

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
              <Modal.Header>Invoice #{storedData?.SKUId}</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <CheckoutModal
                    checkoutFormData={checkoutFormData}
                    productQuantity={productQuantity}
                  />
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

          <div>
            <div className="mt-5 border-2 border-[#ff7f00] p-5">
              <div className="">
                <p className="font-bold pb-2 text-xl text-[#ff7f00]">
                  আপনার অর্ডার
                </p>
                <div className="flex justify-between mt-5 border-b-2 border-[#ccccd6]">
                  <p className="font-bold text-[#ff7f00]">পণ্য</p>
                  <p className="font-bold text-[#ff7f00]">মোট টাকা</p>
                </div>
                <div className="flex justify-between mt-5 border-b-2 border-[#ccccd6]">
                  <p className="text-muted">
                    <span className="font-bold text-[#ff7f00]">
                      {storedData?.name}
                    </span>{" "}
                    <span className="font-bold text-[#ff7f00]">
                      {" "}
                      {"-"} {productQuantity}
                    </span>
                  </p>
                  <p className="font-bold text-[#ff7f00]">
                    {storedData?.price} <span>Tk</span> *{" "}
                    {Number(productQuantity)} <span>items</span>{" "}
                  </p>
                </div>
                <div className="flex justify-between mt-5 border-b-2 border-[#ccccd6]">
                  <p className="text-muted">
                    <span className="font-bold text-[#ff7f00]">Sub Total</span>{" "}
                  </p>
                  <p className="font-bold text-[#ff7f00]">
                    {storedData?.price * Number(productQuantity)} TK
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
                  className="w-4 h-4 text-[#ff7f00] bg-[#f0cca8] border-[#ff7f00] focus:ring-[#ff7f00] focus:ring-2"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-[#ff7f00]"
                >
                  ঢাকার মধ্যে - <span className="font-bold">80 tk</span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="130"
                  name="delivery_charge"
                  onChange={(e) => setDeliveryCharge(e.target.value)}
                  className="w-4 h-4 text-[#ff7f00] bg-[#f0cca8] border-[#ff7f00] focus:ring-[#ff7f00] focus:ring-2"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-[#ff7f00]"
                >
                  ঢাকার বাহিরে - <span className="font-bold">130 tk</span>
                </label>
              </div>
              <div className="flex justify-between mt-5 border-b-2 border-t-2 border-[#ccccd6]">
                <p className="mt-3 mb-3 text-[#ff7f00]">মোট</p>

                <p className="font-bold mt-3 mb-3 text-[#ff7f00]">
                  {storedData?.price * Number(productQuantity) +
                    Number(deliveryCharge)}{" "}
                  TK
                </p>
              </div>
              <div>
                <p className="font-bold mt-5 text-[#ff7f00]">
                  Cash on delivery
                </p>
                <p className="font-normal text-[#ff7f00]">
                  Pay with cash upon delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
