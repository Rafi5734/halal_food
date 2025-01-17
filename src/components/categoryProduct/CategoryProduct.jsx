"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";
import Loader from "@/styles/Loader/Loader";

export default function CategoryProduct({ decodedString }) {
  const { data: popularProductList, isLoading } = useGetAllProductsQuery();

  const categoryProduct = popularProductList?.filter(
    (product) => product.category === decodedString
  );

  // console.log("categoryProduct", categoryProduct);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section>
      <p className="text-center font-bold mt-10 mb-8 text-[#008f8f] underline underline-offset-3 text-4xl">
        {decodedString}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 mt-10 mb-10 ms-5 me-5">
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
      </div>
    </section>
  );
}
