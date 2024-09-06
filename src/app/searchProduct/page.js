"use client";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";
import Loader from "@/styles/Loader/Loader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";
import { emptyProduct } from "../../assets/emptyProduct.png";

const page = ({ searchParams }) => {
  const { data: ProductList, isLoading } = useGetAllProductsQuery();

  const [filteredProducts, setFilteredProducts] = useState(ProductList);

  console.log("searchParams?.category", searchParams?.searchItem);

  useEffect(() => {
    if (searchParams?.searchItem) {
      const filtered = ProductList?.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(searchParams?.searchItem?.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchParams?.searchItem?.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(ProductList);
    }
  }, [ProductList, searchParams?.searchItem]);

  console.log("filteredProducts", filteredProducts);

  return (
    <div>
      <p className="text-center text-3xl font-bold text-[#ff7f00] mt-6 mb-6">
        Search Items
      </p>
      {filteredProducts?.length > 0 ? (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap-2">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {filteredProducts?.map((product, index) => (
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
                        width="100%"
                        quality={75}
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
                          {/* <span className="text-sm text-slate-900 line-through ms-3">
                    $699
                  </span> */}
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
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Image
            width="100%"
            alt="NextUI hero Image"
            src="https://i.ibb.co/Z1nq6x1/empty-Product.png"
          />
          <p className="text-[#ff7f00] mt-6">There are no matching data</p>
        </div>
      )}
    </div>
  );
};

export default page;
