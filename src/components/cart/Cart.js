"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  calculateTotalPrice,
  decrementQuantity,
  getCart,
  incrementQuantity,
  removeFromCart,
} from "@/utils/CartUtils";
import { Image, Input } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  const totalPrice = calculateTotalPrice();

  useEffect(() => {
    const initialCart = getCart();
    setCart(initialCart);
  }, []);

  const handleDeleteCartItem = async (productId) => {
    removeFromCart(productId);
    window.location.reload();
  };

  const handleDecreaseQuantity = (itemId) => {
    decrementQuantity(itemId);
    window.location.reload();
  };
  const handleIncreaseQuantity = (productId) => {
    incrementQuantity(productId);
    window.location.reload();
  };

  const handleCheckout = () => {
    router.push("/checkOrder");
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
                  <th scope="col" className="px-6 py-3 text-nowrap">
                    Sub Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((cart, index) => (
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
                    <td className="px-6 py-4 font-semibold text-nowrap text-gray-900 dark:text-white">
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
                            onChange={(e) =>
                              setQuantity(e.target.value || cart?.quantity)
                            }
                            min={0}
                          />
                        </div>
                        <button
                          onClick={() => handleIncreaseQuantity(cart?._id)}
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
                      <span className="text-nowrap">
                        {cart?.price * cart?.quantity} ৳
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteCartItem(cart?._id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link href="/">
              <Button color="dark" className="mt-5">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-5 border-l-2 ps-5">
          <div className="border-b-4 border-[#ccccd6] flex justify-between flex-row">
            <p className="font-bold pb-2">Total Amount:</p>
            <p className="font-bold pb-2">{totalPrice} TK</p>
          </div>
          <div className="flex w-full flex-col mt-6">
            <Tabs aria-label="Options">
              <Tab key="cash_on_delivery" title="Cash on delivery">
                <Card>
                  <CardBody>
                    <div className="flex flex-row justify-between">
                      <Card>
                        <CardBody>
                          <p>Inside Dhaka, delivery charge is: 80 tk</p>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody>
                          <p>
                            <p>Outside Dhaka, delivery charge is: 130 tk</p>
                          </p>
                        </CardBody>
                      </Card>
                    </div>
                    <Button
                      color="primary"
                      onClick={handleCheckout}
                      className="mt-6 bg-[#f37c00] font-bold"
                    >
                      Proceed to checkout
                    </Button>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="bkash" title="Bkash">
                <Card>
                  <CardBody>
                    <div>
                      <div>
                        <label
                          htmlFor="referenceId"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Reference ID
                        </label>
                        <input
                          type="text"
                          id="referenceId"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Enter your reference id"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="bkashNumber"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Bkash Number
                        </label>
                        <input
                          type="text"
                          id="bkashNumber"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Enter your reference id"
                          required
                        />
                      </div>
                    </div>
                    <Button
                      color="primary"
                      onClick={handleCheckout}
                      className="mt-6 bg-[#f37c00] font-bold"
                    >
                      Proceed to checkout
                    </Button>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="nagad" title="Nagad">
                <Card>
                  <CardBody>
                    <div>
                      <div>
                        <label
                          htmlFor="trasactionId"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Transaction ID
                        </label>
                        <input
                          type="text"
                          id="trasactionId"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Enter your reference id"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="nagadNumber"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Nagad Number
                        </label>
                        <input
                          type="text"
                          id="nagadNumber"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Enter your reference id"
                          required
                        />
                      </div>
                    </div>
                    <Button
                      color="primary"
                      onClick={handleCheckout}
                      className="mt-6 bg-[#f37c00] font-bold"
                    >
                      Proceed to checkout
                    </Button>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
