"use client";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { getCookie } from "../helper/cookies";
import { useGetUsersQuery } from "@/api/auth/authSlice";
import Link from "next/link";
import { useDeleteCartProductMutation } from "@/api/productSlice/orderSlice/orderSlice";
import Swal from "sweetalert2";
import Image from "next/image";

const Cart = () => {
  const myCookieValue = getCookie("bisuddho_cookies");
  const [deleteCartProduct, { isLoading: deleteItemLoader }] =
    useDeleteCartProductMutation();

  const { data: userData, isLoading } = useGetUsersQuery();

  // console.log("i am from user data loader", isLoading);
  if (myCookieValue) {
    var loggedInUser = userData?.find(
      (user) =>
        user.userName === JSON?.parse(myCookieValue)?.userName ||
        (null &&
          user.phoneNumber === JSON?.parse(myCookieValue)?.phoneNumber) ||
        null
    );
  }

  const subTotalPrice = loggedInUser?.cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (myCookieValue) {
    var userId = JSON?.parse(myCookieValue)?._id || null;
  }

  const handleDeleteCartItem = async (productId) => {
    try {
      const res = await deleteCartProduct({ userId, productId });
      console.log("delete res", res?.data);
      if (res) {
        Swal.fire({
          title: res?.data?.message,
          text: "Check your cart again.",
          icon: "success",
        });
        window.location.reload();
      }

      console.log(deleteItemLoader);
    } catch (err) {}
    console.log("delete", productId);
  };

  console.log("loggedInUser?.cart", loggedInUser?.cart);
  console.log("loggedInUser", loggedInUser);

  const handleDecreaseQuantity = (itemId) => {
    console.log("increased", itemId);
  };
  return (
    <div className="container mx-auto mt-10 mb-14 w-full p-3">
      <div className="text-center">
        <div className="flex justify-center">
          <span className="text-4xl font-bold">Shopping Cart</span>{" "}
        </div>
      </div>

      <div className="mt-16 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
        <div className="mt-5 overflow-x-auto rounded-lg mt-5">
          <div className="w-full relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sub Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {loggedInUser?.cart?.length === 0 && (
                  <div className="flex justify-center items-center text-center h-40">
                    <p className="text-center text-red-600 font-bold">
                      No Product added.
                    </p>
                  </div>
                )}
                {loggedInUser?.cart?.map((cart, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4">
                      <Image
                        src={cart?.imageLink}
                        className="w-16 md:w-32 max-w-full max-h-full rounded"
                        alt="product_img"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {cart?.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecreaseQuantity(cart?._id)}
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
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
                        <div>
                          <input
                            type="number"
                            id="first_product"
                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={cart?.quantity}
                            placeholder="1"
                            required
                          />
                        </div>
                        <button
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
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
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <span className="text-nowrap">{cart?.price} ৳</span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <span className="text-nowrap">{cart?.price} ৳</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteCartItem(cart?._id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        pending
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/">
            <Button color="dark" className="mt-5">
              Continue Shopping
            </Button>
          </Link>
        </div>
        <div className="mt-5 border-l-2 ps-5">
          <div className="">
            <p className="font-bold border-b-4 border-[#ccccd6] pb-2">
              Cart total
            </p>
            <div className="flex justify-between mt-5 border-b-2 border-[#ccccd6]">
              <p className="">Sub Total</p>
              <p className="font-bold">{subTotalPrice} tk</p>
            </div>
          </div>
          <div className="flex items-center mb-4 mt-8">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
            />
            <label
              for="default-radio-1"
              className="ms-2 text-sm font-medium text-black"
            >
              ঢাকার মধ্যে: 50৳
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              for="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              ঢাকার বাহিরে: 100৳
            </label>
          </div>
          <div className="flex justify-between mt-5 border-b-2 border-t-2 border-[#ccccd6]">
            <p className="">Total</p>
            <p className="font-bold">900 tk</p>
          </div>
          <Button color="warning" className="w-full mt-8">
            <Link href={"/checkout"}>
              <span className="text-black font-bold">Proceed to checkout</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
