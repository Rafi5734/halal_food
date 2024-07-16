"use client";
import { useGetSingleProductsQuery } from "@/api/productSlice/productSlice";
import CommentSection from "@/components/dynamicProducts/commentSection/CommentSection";
import { setCookie } from "@/components/helper/cookies";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SingleProduct = ({ searchParams }) => {
  // const response = await fetch(
  //   `http://localhost:8800/product/${searchParams?._id}`,
  //   { cache: "force-cache" }
  // );
  // console.log("Response:", response);
  // const singleProduct = await response.json();
  // console.log("singleProduct", singleProduct?.category);

  const _idString = searchParams?._id;
  const { data: singleProduct, isLoading } =
    useGetSingleProductsQuery(_idString);
  const getSingleProduct = () => {
    console.log(singleProduct);
    localStorage.setItem('bisuddho_localData', JSON.stringify(singleProduct));
    setCookie("bisuddho_cookies", JSON.stringify(singleProduct));
  };
  return (
    <div className="container mx-auto mt-3">
      <p className="ps-3">
        Home {"/"} {singleProduct?.category}
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
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="ps-3 pe-3 pt-3">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
              <div>
                <Image
                  className="rounded object-contain"
                  alt="product_image"
                  src={singleProduct?.imageLink}
                  width={500}
                  height={500}
                  // sizes="100vw"
                  sizes="(max-width: 100%)"
                />
              </div>
              <div>
                <h4 className="text-3xl font-bold pb-3">
                  {singleProduct?.name}
                </h4>
                <hr />
                <div className="mt-5">
                  <h5 className="text-2xl font-bold">
                    {singleProduct?.price} TK
                  </h5>
                  <p className="mt-3 font-bold">ঢাকার মধ্যে ৮০ টাকা</p>
                  <p className="font-bold">ঢাকার বাহিরে ১৩০ টাকা</p>
                </div>

                <div className="mt-5">
                  <p>
                    weight: <span>{singleProduct?.weight}</span>KG
                  </p>
                  <div>
                    <button
                      type="button"
                      className="disabled mt-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      <span>{singleProduct?.weight}</span> KG
                    </button>
                  </div>
                </div>

                <div className="mt-5 border-dotted border-t-2">
                  <h5 className="text-lg font-bold mt-1">
                    {singleProduct?.price} TK
                  </h5>
                </div>

                <div className="mt-3 flex">
                  {/* <form className="">
                    <div className="relative flex items-center max-w-[8rem]">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="bg-gray-100 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        defaultValue={singleProduct?.quantity}
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-500 block w-full py-2.5"
                        placeholder="33"
                        required
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </form> */}
                  <div>
                    <Link
                      href={{
                        pathname: "/checkOrder",
                      }}
                    >
                      <button
                        onClick={getSingleProduct}
                        type="button"
                        className="font-bold focus:outline-none text-black bg-[#21bd1e] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      >
                        পন্যটি ক্রয় করুন
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="border-t-2 border-b-2">
                    <p className="p-1">
                      SKU: <span>{singleProduct?.SKUId}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p>
                    Categories:{" "}
                    <a href="#" className="hover:text-[#eab308]">
                      {singleProduct?.category}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-2xl font-bold">
                <span>{singleProduct?.name}</span> এর বিবরণী:
              </p>
              <p className="mt-3">{singleProduct?.description}</p>
            </div>

            <div className="mt-5">
              <p className="text-center text-2xl font-bold border-b-2 pb-2">
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
