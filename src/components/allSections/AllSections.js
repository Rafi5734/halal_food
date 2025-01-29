"use client";
import React from "react";
import MainBanner from "./mainBanner/MainBanner";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";
import Loader from "@/styles/Loader/Loader";
import Link from "next/link";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import ProductIcon from "@/assets/ProductIcon";

const AllSections = () => {
  const { data: getAllProducts } = useGetAllProductsQuery();

  if (!getAllProducts || getAllProducts?.length === 0) {
    return <Loader />;
  }

  // Group products by category
  const groupedProducts = getAllProducts?.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedProducts).sort((a, b) => {
    return a.localeCompare(b); // Alphabetical order for other categories
  });

  return (
    <div className="container mx-auto p-3">
      <MainBanner />

      {sortedCategories.map((category) => {
        const products = groupedProducts[category];
        const displayProducts = products.slice(0, 8); // Show only the first 5 items

        return (
          <div key={category} className="mb-10">
            <div className="grid grid-cols-3 mt-10 gap-4">
              <div className="mt-6 h-[5px]">
                <hr />
              </div>
              <div className="">
                <h2 className="text-center font-bold text-4xl text-[#008f8f] text-wrap mb-8 border-b-1 border-[#008f8f]">
                  {category}
                </h2>
              </div>
              <div className="mt-6">
                <hr style={{ height: "12px" }} className="h-8" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayProducts
                .slice()
                .reverse()
                .map((product) => (
                  <Card
                    key={product?._id}
                    className="bg-[#dbfcfc] shadow-md relative overflow-hidden"
                  >
                    <CardBody className="overflow-hidden">
                      <Image
                        isZoomed
                        alt={product?.imageLink}
                        className="object-cover rounded-xl w-full lg:h-[400px] md:h-[300] sm:h-[100]"
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
                          <Button
                            href="#"
                            className="w-full flex items-center justify-center rounded-full bg-[#008f8f] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
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
            </div>

            {/* More Button */}
            {products.length > 8 && (
              <div className="mt-4 text-center">
                <Link
                  href={{
                    pathname: `/categoryProducts/${category}`, // Redirect to the category page
                  }}
                >
                  <Button className="rounded-full bg-[#008f8f] px-6 py-2 text-white font-bold">
                    More
                  </Button>
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllSections;
