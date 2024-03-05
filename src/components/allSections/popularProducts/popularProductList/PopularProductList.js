"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import productImage from "../../../../../public/images/honey-nuts.jpg";
import { useGetAllProductsQuery } from "@/api/productSlice/productSlice";
import Loader from "@/styles/Loader/Loader";
import { getCookie } from "@/components/helper/cookies";
import Swal from "sweetalert2";
import { usePostCartMutation } from "@/api/productSlice/orderSlice/orderSlice";
import { useGetUsersQuery } from "@/api/auth/authSlice";
const PopularProductList = () => {
  const myCookieValue = getCookie("bisuddho_cookies");
  const { data: popularProductList, isLoading } = useGetAllProductsQuery();
  const [postCart, { isLoading: cartLoader }] = usePostCartMutation();
  const { data: userData, isLoading: userDataLoader } = useGetUsersQuery();

  if (myCookieValue) {
    var userId = JSON.parse(myCookieValue)?._id || null;
  }

  const popularProducts = popularProductList?.filter(
    (product) => product.category === "Food_items"
  );

  if (myCookieValue) {
    var loggedInUser = userData?.find(
      (user) =>
        user.userName === JSON?.parse(myCookieValue)?.userName &&
        user.phoneNumber === JSON?.parse(myCookieValue)?.phoneNumber
    );
  }

  const handleCartButton = async (productId) => {
    const duplicateProduct = loggedInUser?.cart?.find(
      (product) => product?._id === productId
    );

    if (duplicateProduct) {
      return Swal.fire({
        title: "This product already added in your cart",
        text: "Check your cart",
        icon: "warning",
      });
    }

    const singleProductId = {
      _id: productId,
    };

    console.log("id", singleProductId, userId);
    try {
      const res = await postCart({
        userId,
        singleProductId,
      });

      console.log("res", res?.data?.message);

      if (res?.data) {
        Swal.fire({
          title: res?.data?.message,
          text: "Check your cart",
          icon: "success",
        });
        window.location.reload();
      }
    } catch (err) {}

    // console.log("kinun", productId);
  };

  return (
    <div className="container w-full">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap-2">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {popularProducts?.map((product, index) => (
              <div
                key={index}
                className="w-full relative mt-5 flex flex-col rounded-lg border border-gray-100 bg-white shadow-md"
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
                      className="rounded object-cover"
                      src={product?.imageLink}
                      width={100}
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
                    <Link
                      href={{
                        pathname: "/singleProduct",
                        query: { _id: product._id },
                      }}
                    >
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
                          <span className="text-center">{product?.price}</span>
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
                          className="w-full flex items-center justify-center rounded-md bg-[#fdb414] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
                                stroke-width="1"
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
    </div>
  );
};

export default PopularProductList;
