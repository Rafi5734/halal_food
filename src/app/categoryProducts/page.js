"use client";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";
import Loader from "@/styles/Loader/Loader";
import Link from "next/link";
import React from "react";
import { Tabs, Tab, Card, CardBody, Image, Button } from "@nextui-org/react";
import Subcategory1 from "@/components/subcategory/Female/Subcategory1";
import SubCategory2 from "@/components/subcategory/Male/SubCategory2";
import SubCategory3 from "@/components/subcategory/easy/Subcategory3";
import SubCategory4 from "@/components/subcategory/deshal/Subgategory4";
import SubCategory5 from "@/components/subcategory/arong/Subgategory5";
import LakmeCategory from "@/components/subcategory/lakme/LakmeCategory";
import ImagicCategory from "@/components/subcategory/imagic/ImagicCategory";
import SheglamCategory from "@/components/subcategory/sheglam/SheglamCategory";
import ProductIcon from "@/assets/ProductIcon";

const CategoryProducts = ({ searchParams }) => {
  const { data: popularProductList, isLoading } = useGetAllProductsQuery();

  const categoryProduct = popularProductList?.filter(
    (product) => product.category === searchParams?.category
  );

  return (
    <div className="ps-5 pe-5">
      <p className="text-center text-4xl font-bold text-[#008f8f] mt-10 mb-10">
        {searchParams?.category} products
      </p>
      {searchParams?.category === "Ladies Shoe" ? (
        <div className="flex w-full flex-col">
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap-2">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {categoryProduct?.map((product, index) => (
                  <Card
                    key={product?._id}
                    className="bg-[#dbfcfc] shadow-md relative overflow-hidden"
                  >
                    <CardBody className="overflow-hidden">
                      <Image
                        isZoomed
                        alt={product?.imageLink}
                        className="object-cover rounded-xl w-full h-[400px]"
                        src={product?.imageLink}
                        width="100%"
                      />
                      <h5 className="text-xl tracking-tight text-[#008f8f] font-bold mt-2">
                        {product?.name}
                      </h5>
                      <div className="flex justify-center items-center mt-2 mb-5 flex items-center justify-between">
                        <p className="">
                          <span className="flex justify-center items-center text-3xl font-bold text-slate-900">
                            <svg
                              fill="#008f8f"
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
                                  style={{ fill: "#008f8f" }}
                                ></path>
                              </g>
                            </svg>
                            <span className="text-center text-[#008f8f]">
                              {product?.price -
                                (product?.price * product?.discount) / 100}
                            </span>
                            <span className="line-through text-[#a8a8a8] ms-4">
                              {product?.price}
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-row justify-between">
                        <Link
                          className="w-full"
                          href={{
                            pathname: "/singleProduct",
                            query: { _id: product._id },
                          }}
                        >
                          <Button className="w-full flex items-center justify-center rounded-full bg-[#008f8f] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none">
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
                            See details
                          </Button>
                        </Link>
                        <div className="absolute right-0 top-0 h-16 w-16 z-50">
                          <div className="absolute transform rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                            {product?.discount}% off
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          {searchParams?.category === "Cosmatics" ? (
            <>
              <div className="flex w-full flex-col mt-4">
                <Tabs aria-label="Options">
                  <Tab key="lakme" title="Lakme">
                    <Card>
                      <LakmeCategory />
                    </Card>
                  </Tab>
                  <Tab key="imagic" title="Imagic">
                    <Card>
                      <ImagicCategory />
                    </Card>
                  </Tab>
                  <Tab key="Sheglam" title="Sheglam">
                    <Card>
                      <SheglamCategory />
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
                                  See product
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
    </div>
  );
};

export default CategoryProducts;
