"use client";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";
import Loader from "@/styles/Loader/Loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Subcategory1 from "@/components/subcategory/Female/Subcategory1";
import SubCategory2 from "@/components/subcategory/Male/SubCategory2";
import SubCategory3 from "@/components/subcategory/easy/Subcategory3";
import SubCategory4 from "@/components/subcategory/deshal/Subgategory4";
import SubCategory5 from "@/components/subcategory/arong/Subgategory5";

const CategoryProducts = ({ searchParams }) => {
  const { data: popularProductList, isLoading } = useGetAllProductsQuery();

  const categoryProduct = popularProductList?.filter(
    (product) => product.category === searchParams?.category
  );

  console.log("searchParams", searchParams);
  return (
    <div className="p-4">
      <p className="text-center text-4xl font-bold text-[#ff7f00]">
        {searchParams?.category} Products
      </p>
      {searchParams?.category === "Clothing" ? (
        <div className="flex w-full flex-col mt-4">
          <Tabs aria-label="Options">
            <Tab key="all" title="All">
              <Card>
                <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap-2">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <>
                      {categoryProduct?.map((product, index) => (
                        <div
                          key={index}
                          className="w-full relative flex flex-row rounded-lg border border-[#f0cca8] bg-[#f0cca8] shadow-md"
                        >
                          <div>
                            <Link
                              // href={`/products/${product?._id}`}
                              href={{
                                pathname: "/singleProduct",
                                query: { _id: product._id },
                              }}
                              className="relative mx-3 mt-3 flex h-70 rounded-xl"
                            >
                              <Image
                                className="rounded object-contain"
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
                            </Link>
                            <div className="mt-4 px-5 pb-5">
                              <Link
                                href={{
                                  pathname: "/singleProduct",
                                  query: { _id: product._id },
                                }}
                              >
                                <h5 className="text-xl tracking-tight text-[#ff7f00] font-bold">
                                  {product?.name}
                                </h5>
                              </Link>
                              <div className="flex justify-center items-center mt-2 mb-5 flex items-center justify-between">
                                <p className="">
                                  <span className="flex justify-center items-center text-3xl font-bold text-slate-900">
                                    <svg
                                      fill="#ff7f00"
                                      width="30px"
                                      height="30px"
                                      viewBox="0 0 24 24"
                                      id="taka-2"
                                      data-name="Flat Color"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon flat-color"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                      ></g>
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></g>
                                      <g id="SVGRepo_iconCarrier">
                                        <path
                                          id="primary"
                                          d="M18,11a1,1,0,0,0-1,1v4.5a3.5,3.5,0,0,1-7,0V12h2a1,1,0,0,0,0-2H10V6A4,4,0,0,0,6,2,1,1,0,0,0,6,4,2,2,0,0,1,8,6v4H6a1,1,0,0,0,0,2H8v4.5a5.5,5.5,0,0,0,11,0V12A1,1,0,0,0,18,11Z"
                                          style={{ fill: "#ff7f00" }}
                                        ></path>
                                      </g>
                                    </svg>
                                    <span className="text-center text-[#ff7f00]">
                                      {product?.price}
                                    </span>
                                  </span>
                                </p>
                              </div>
                              <div className="">
                                <Link
                                  href={{
                                    pathname: "/singleProduct",
                                    query: { _id: product._id },
                                  }}
                                >
                                  <button
                                    href="#"
                                    className="w-full flex items-center justify-center rounded-full bg-[#ff7f00] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
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
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                      ></g>
                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
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
                                    পন্যটি দেখুন
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
              </Card>
            </Tab>
            <Tab key="male" title="Male">
              <Card>
                <SubCategory2 />
              </Card>
            </Tab>
            <Tab key="female" title="Female">
              <Card>
                <Subcategory1 female="female" />
              </Card>
            </Tab>
            <Tab key="easy" title="Easy">
              <Card>
                <SubCategory3 easy="easy" />
              </Card>
            </Tab>
            <Tab key="deshal" title="Deshal">
              <Card>
                <SubCategory4 deshal="deshal" />
              </Card>
            </Tab>
            <Tab key="arong" title="Arong">
              <Card>
                <SubCategory5 arong="arong" />
              </Card>
            </Tab>
          </Tabs>
        </div>
      ) : (
        <>
          {searchParams?.category === "Cosmatics" ? (
            <>
              <div className="flex w-full flex-col mt-4">
                <Tabs aria-label="Options">
                  <Tab key="lakme" title="Lakme">
                    <Card>
                      <SubCategory2 />
                    </Card>
                  </Tab>
                  <Tab key="imagic" title="Imagic">
                    <Card>
                      <Subcategory1 female="female" />
                    </Card>
                  </Tab>
                  <Tab key="Sheglam" title="Sheglam">
                    <Card>
                      <Subcategory1 female="female" />
                    </Card>
                  </Tab>
                </Tabs>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="mt-6 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap-2">
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    {categoryProduct?.map((product, index) => (
                      <div
                        key={index}
                        className="w-full relative flex flex-row rounded-lg border border-[#f0cca8] bg-[#f0cca8] shadow-md"
                      >
                        <div>
                          <Link
                            // href={`/products/${product?._id}`}
                            href={{
                              pathname: "/singleProduct",
                              query: { _id: product._id },
                            }}
                            className="relative mx-3 mt-3 flex h-70 rounded-xl"
                          >
                            <Image
                              className="rounded object-contain"
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
                          </Link>
                          <div className="mt-4 px-5 pb-5">
                            <Link
                              href={{
                                pathname: "/singleProduct",
                                query: { _id: product._id },
                              }}
                            >
                              <h5 className="text-xl tracking-tight text-[#ff7f00] font-bold">
                                {product?.name}
                              </h5>
                            </Link>
                            <div className="flex justify-center items-center mt-2 mb-5 flex items-center justify-between">
                              <p className="">
                                <span className="flex justify-center items-center text-3xl font-bold text-slate-900">
                                  <svg
                                    fill="#ff7f00"
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    id="taka-2"
                                    data-name="Flat Color"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon flat-color"
                                  >
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      strokeWidth="0"
                                    ></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        id="primary"
                                        d="M18,11a1,1,0,0,0-1,1v4.5a3.5,3.5,0,0,1-7,0V12h2a1,1,0,0,0,0-2H10V6A4,4,0,0,0,6,2,1,1,0,0,0,6,4,2,2,0,0,1,8,6v4H6a1,1,0,0,0,0,2H8v4.5a5.5,5.5,0,0,0,11,0V12A1,1,0,0,0,18,11Z"
                                        style={{ fill: "#ff7f00" }}
                                      ></path>
                                    </g>
                                  </svg>
                                  <span className="text-center text-[#ff7f00]">
                                    {product?.price}
                                  </span>
                                </span>
                              </p>
                            </div>
                            <div className="">
                              <Link
                                href={{
                                  pathname: "/singleProduct",
                                  query: { _id: product._id },
                                }}
                              >
                                <button
                                  href="#"
                                  className="w-full flex items-center justify-center rounded-full bg-[#ff7f00] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
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
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      strokeWidth="0"
                                    ></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
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
                                  পন্যটি দেখুন
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
            </>
          )}
        </>
      )}
      {/* {searchParams?.category === "Cosmatics" ? (
        <div className="flex w-full flex-col mt-4">
          <Tabs aria-label="Options">
            <Tab key="lakme" title="Lakme">
              <Card>
                <SubCategory2 />
              </Card>
            </Tab>
            <Tab key="imagic" title="Imagic">
              <Card>
                <Subcategory1 female="female" />
              </Card>
            </Tab>
            <Tab key="Sheglam" title="Sheglam">
              <Card>
                <Subcategory1 female="female" />
              </Card>
            </Tab>
          </Tabs>
        </div>
      ) : (
        <div className="mt-6 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap-2">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {categoryProduct?.map((product, index) => (
                <div
                  key={index}
                  className="w-full relative flex flex-row rounded-lg border border-[#f0cca8] bg-[#f0cca8] shadow-md"
                >
                  <div>
                    <Link
                      // href={`/products/${product?._id}`}
                      href={{
                        pathname: "/singleProduct",
                        query: { _id: product._id },
                      }}
                      className="relative mx-3 mt-3 flex h-70 rounded-xl"
                    >
                      <Image
                        className="rounded object-contain"
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
                    </Link>
                    <div className="mt-4 px-5 pb-5">
                      <Link
                        href={{
                          pathname: "/singleProduct",
                          query: { _id: product._id },
                        }}
                      >
                        <h5 className="text-xl tracking-tight text-[#ff7f00] font-bold">
                          {product?.name}
                        </h5>
                      </Link>
                      <div className="flex justify-center items-center mt-2 mb-5 flex items-center justify-between">
                        <p className="">
                          <span className="flex justify-center items-center text-3xl font-bold text-slate-900">
                            <svg
                              fill="#ff7f00"
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
                                  style={{ fill: "#ff7f00" }}
                                ></path>
                              </g>
                            </svg>
                            <span className="text-center text-[#ff7f00]">
                              {product?.price}
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="">
                        <Link
                          href={{
                            pathname: "/singleProduct",
                            query: { _id: product._id },
                          }}
                        >
                          <button
                            href="#"
                            className="w-full flex items-center justify-center rounded-full bg-[#ff7f00] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                            পন্যটি দেখুন
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
      )} */}
    </div>
  );
};

export default CategoryProducts;
