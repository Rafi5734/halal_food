"use client";
import { useGetSingleProductsQuery } from "@/api/productSlice/productSlice";
import PurchaseIcon from "@/assets/PurchaseIcon";
import TkIcon from "@/assets/TkIcon";
import CommentSection from "@/components/dynamicProducts/commentSection/CommentSection";
import { setCookie } from "@/components/helper/cookies";
import { Image, Input, Radio, RadioGroup } from "@nextui-org/react";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import CheckIcon from "../../../public/icons/CheckIcon";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import CustomImageMagnifier from "./ImageMagnifier/ImageMagnifier";
import Link from "next/link";

const SingleProduct = ({ searchParams }) => {
  const router = useRouter();

  const [productQuantity, setProductQuantity] = useState("1");
  const [selected, setSelected] = React.useState("");
  const [selectedImage, setSelectedImage] = useState();

  const _idString = searchParams?._id;
  const { data: singleProduct, isLoading } =
    useGetSingleProductsQuery(_idString);
  const getSingleProduct = () => {
    setCookie("bisuddho_cookies", JSON.stringify(singleProduct));
    setCookie("productQuantity", JSON.stringify(productQuantity));
    setCookie("size", JSON.stringify(selected));
    setCookie("color", JSON.stringify(selectedImage));
    router.push("/checkOrder");
  };

  useEffect(() => {
    setSelectedImage({
      url: singleProduct?.imageLink,
      title: singleProduct?.imageLinks?.[0]?.title || "",
    });
  }, [singleProduct]);

  // console.log("singleProduct", singleProduct?.category);

  return (
    <div className="container mx-auto mt-3">
      <p className="ps-3 text-[#008f8f]">
        <Link href="/">Home</Link> {"/"}{" "}
        <span className="font-bold">{singleProduct?.category}</span>
      </p>

      {isLoading ? (
        <>
          <div className="mt-5 p-3">
            <div
              role="status"
              className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
            >
              <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="ps-3 pe-3 pt-3">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
              <div>
                {/* <CustomImageMagnifier
                  imageSrc={singleProduct?.imageLink}
                  zoomScale={3}
                  magnifierSize={200}
                /> */}
                <CustomImageMagnifier
                  imageSrc={selectedImage.url}
                  zoomScale={3}
                  magnifierSize={200}
                />
              </div>
              <div>
                <h4 className="text-3xl font-bold pb-3 text-[#008f8f]">
                  {singleProduct?.name}
                </h4>
                <hr />
                <div className="mt-5">
                  <h5 className="text-2xl font-bold text-[#008f8f] flex flex-row items-center">
                    <TkIcon />{" "}
                    {singleProduct?.price -
                      (singleProduct?.price * singleProduct?.discount) /
                        100}{" "}
                    TK
                  </h5>
                  <div className="flex flex-row">
                    <p className="text-md font-bold line-through text-[#a8a8a8] flex flex-row">
                      {singleProduct?.price} TK
                    </p>
                    <span className="ms-3 text-[#ff0000]">
                      {" "}
                      - {singleProduct?.discount}% off
                    </span>
                  </div>

                  <ul className="space-y-4 text-left text-[#008f8f] dark:text-[#008f8f] mt-8">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                      <CheckIcon />
                      <span>We provide cash on delivery service.</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                      <CheckIcon />
                      <span>
                        Inside Dhaka: Delivercy Charge -{" "}
                        <span className="font-bold">70 TK.</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                      <CheckIcon />
                      <span>
                        Outside Dhaka: Delivercy Charge -{" "}
                        <span className="font-bold">100 TK.</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  {selectedImage.title && (
                    <p className="mt-3 text-sm font-medium text-[#008f8f]">
                      Selected Color: {selectedImage.title}
                    </p>
                  )}
                  <div className="flex flex-row gap-3">
                    {singleProduct?.imageLinks?.map((color) =>
                      color?._id ? (
                        <div
                          key={color._id}
                          onClick={() =>
                            setSelectedImage({
                              url: color.url,
                              title: color.title,
                            })
                          }
                          className="cursor-pointer"
                        >
                          <Image
                            src={color.url}
                            width={50}
                            height={55}
                            alt="Color Thumbnail"
                          />
                        </div>
                      ) : null
                    )}
                  </div>
                </div>

                {singleProduct?.category === "Ladies Shoes" && (
                  <div className="mt-5">
                    <p className="text-[#008f8f] font-bold">Sizes:</p>
                    <RadioGroup
                      orientation="horizontal"
                      className="mt-3"
                      value={selected}
                      onValueChange={setSelected}
                    >
                      <Radio value="35" className="text-[#008f8f]">
                        35
                      </Radio>
                      <Radio value="36">36</Radio>
                      <Radio value="37">37</Radio>
                      <Radio value="38">38</Radio>
                      <Radio value="39">39</Radio>
                      <Radio value="40">40</Radio>
                      <Radio value="41">41</Radio>
                    </RadioGroup>
                  </div>
                )}

                <div className="mt-5">
                  <form className="max-w-full">
                    <label
                      htmlFor="counter-input"
                      className="block mb-1 text-sm font-bold text-[#008f8f]"
                    >
                      Quantity:
                    </label>
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="counter-input"
                        className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-2.5 h-2.5 text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="counter-input"
                        data-input-counter
                        className="flex-shrink-0 text-gray-900 border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-24 text-center"
                        placeholder=""
                        defaultValue={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-2.5 h-2.5 text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-5 border-dotted border-t-2"></div>
                <div className="mt-3 flex">
                  <div>
                    <button
                      onClick={getSingleProduct}
                      type="button"
                      className="flex flex-row items-center justify-center font-bold focus:outline-none text-[#008f8f] bg-[#dbfcfc] font-medium rounded-full text-sm px-5 py-2.5 me-2"
                    >
                      <PurchaseIcon />{" "}
                      <span className="ms-4">Purchase this item</span>
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="border-dotted border-t-2 border-b-2">
                    <p className="p-1 text-[#008f8f]">
                      SKU: <span>{singleProduct?.SKUId}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-[#008f8f]">
                    Categories:{" "}
                    <span className="font-semibold">
                      {singleProduct?.category}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-2xl font-bold text-[#008f8f] text-center mt-5">
                Description
              </p>
              <p className="mt-3 text-[#008f8f]">
                {singleProduct?.description}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-center text-2xl font-bold border-b-2 pb-2 text-[#008f8f]">
                Customer Reviews
              </p>
            </div>
            <CommentSection singleProduct={singleProduct} />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
