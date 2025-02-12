"use client";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";
import React from "react";
import Link from "next/link";
import Loader from "@/styles/Loader/Loader";
import Image from "next/image";

const OtherProductList = () => {
  const { data: productList, isLoading } = useGetAllProductsQuery();

  console.log("productList", productList);

  const othersProducts = productList?.filter(
    (product) => product.category === "কেমিক্যাল মুক্ত শুঁটকি"
  );
  return (
    <div className="container mb-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap2">
        <div className="mt-0 pt-0">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {othersProducts?.map((product, index) => (
                <div
                  key={index}
                  className="w-full relative mt-5 flex flex-row rounded-lg border border-gray-100 bg-white shadow-md"
                >
                  <div>
                    <Link
                      href={`/products/${product?._id}`}
                      className="relative mx-3 mt-3 flex h-70 rounded-xl"
                    >
                      <Image
                        className="rounded object-cover"
                        src={product?.imageLink}
                        width={500}
                        // width="100%"
                        height={100}
                        // sizes="100vw"
                        quality={75}
                        // placeholder="blur"
                        sizes="(max-width: 100%)"
                        alt="product image"
                      />
                      {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                39% OFF
              </span> */}
                    </Link>
                    <div className="mt-4 px-5 pb-5">
                      <Link href={`/products/${product?._id}`}>
                        <h5 className="text-xl tracking-tight text-slate-900 font-bold">
                          {product?.name}
                        </h5>
                      </Link>
                      <div className="flex justify-center items-center mt-2 mb-5 flex items-center justify-between">
                        <p className="">
                          <span className="flex justify-center items-center text-3xl font-bold text-slate-900">
                            <svg
                              fill="#000000"
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              id="taka-2"
                              data-name="Flat Color"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon flat-color"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  id="primary"
                                  d="M18,11a1,1,0,0,0-1,1v4.5a3.5,3.5,0,0,1-7,0V12h2a1,1,0,0,0,0-2H10V6A4,4,0,0,0,6,2,1,1,0,0,0,6,4,2,2,0,0,1,8,6v4H6a1,1,0,0,0,0,2H8v4.5a5.5,5.5,0,0,0,11,0V12A1,1,0,0,0,18,11Z"
                                  style={{ fill: "#000000" }}
                                ></path>
                              </g>
                            </svg>
                            <span className="text-center">
                              {product?.price}
                            </span>
                          </span>
                          {/* <span className="text-sm text-slate-900 line-through ms-3">
                    $699
                  </span> */}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <button
                          href="#"
                          className="flex items-center justify-center rounded-md bg-[#fdb414] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Add to cart
                        </button>
                        <Link href={`/products/${product?._id}`}>
                          <button
                            href="#"
                            className="flex items-center justify-center rounded-md bg-[#fdb414] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                          >
                            <svg
                              width="25px"
                              height="25px"
                              viewBox="0 0 512 512"
                              version="1.1"
                              fill="#ffffff"
                              stroke="#ffffff"
                              className="me-3"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>details</title>{" "}
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  {" "}
                                  <g
                                    id="Combined-Shape"
                                    fill="#ffffff"
                                    transform="translate(64.000000, 64.000000)"
                                  >
                                    {" "}
                                    <path d="M384,64 L384,384 L64,384 L64,64 L384,64 Z M341.333333,106.666667 L106.666667,106.666667 L106.666667,341.333333 L341.333333,341.333333 L341.333333,106.666667 Z M320,1.42108547e-14 L320,42.6666667 L42.666,42.666 L42.6666667,320 L1.42108547e-14,320 L1.42108547e-14,1.42108547e-14 L320,1.42108547e-14 Z M298.666667,234.666667 L298.666667,277.333333 L149.333333,277.333333 L149.333333,234.666667 L298.666667,234.666667 Z M298.666667,149.333333 L298.666667,192 L149.333333,192 L149.333333,149.333333 L298.666667,149.333333 Z">
                                      {" "}
                                    </path>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                            View details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherProductList;
