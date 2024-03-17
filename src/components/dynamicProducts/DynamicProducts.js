"use client";
import React from "react";
import Image from "next/image";
import dynamicProductImage from "../../../public/images/Halal-food-service-ghee.webp";
import CommentSection from "./commentSection/CommentSection";
import Link from "next/link";
// import { useRouter } from "next/navigation ";

const DynamicProducts = () => {
  // const router = useRouter();
  console.log("id of product");
  return (
    <div className="ps-3 pe-3">
      {/* <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
        <div>
          <Image
            alt="product_image"
            src={dynamicProductImage}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <h4 className="text-3xl font-bold pb-3">দানাদার ঘি ( সিরাজগঞ্জ )</h4>
          <hr />
          <div className="mt-5">
            <h5 className="text-2xl font-bold">850৳ – 1,650৳ </h5>
            <p className="mt-3 font-bold">ঢাকার মধ্যে ৫০ টাকা</p>
            <p className="font-bold">ঢাকার বাহিরে ১০০ টাকা</p>
          </div>

          <div className="mt-5">
            <p>weight: 1 KG</p>
            <div>
              <button
                type="button"
                className="mt-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                0.5 KG
              </button>
              <button
                type="button"
                className="mt-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                1 KG
              </button>
            </div>
          </div>

          <div className="mt-5 border-dotted border-t-2">
            <h5 className="text-lg font-bold mt-1">850৳ – 1,650৳ </h5>
          </div>

          <div className="mt-3 flex">
            <form className="">
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
            </form>
            <div>
              <button
                type="button"
                className="ms-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Buy Now
              </button>
              <Link href="/cart">
                <button
                  type="button"
                  className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-5">
            <div className="border-t-2 border-b-2">
              <p className="p-1">SKU: 01-DND-GH-1000</p>
            </div>
          </div>

          <div className="mt-5">
            <p>
              Categories:{" "}
              <a href="#" className="hover:text-[#eab308]">
                ঘি ও তেল, পপুলার
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-2xl font-bold">গাওয়া ঘি এর উপকারিতাঃ</p>
        <p className="mt-3">
          <span className="font-bold">✅ হাড়ের জন্য:</span> ঘিয়ের ভিটামিন ‘কে’
          ক্যালসিয়ামের সঙ্গে মিলে হাড়ের স্বাস্থ্য ও গঠন বজায় রাখে। স্বাস্থ্যকর
          ইনসুলিন ও শর্করার মাত্রা বজায় রাখতে কাজে লাগে ভিটামিন ‘কে।” বলেন
          চ্যাডউইক। ঘিতে যেসব ভিটামিন রয়েছে -এ, ডি, ই এবং কে, যা আমাদের
          হৃৎপিন্ড,হাড়ের জন্য খুব উপকারী। এই ঘিয়ের মধ্যে রয়েছে প্রাকৃতিক
          লুব্রিকেন্ট যা গিঁটে ব্যথা ও আর্থ্রাইটিসের সমস্যা সমাধানে কাজ করে।
          তাছাড়া এর মধ্যে রয়েছে ওমেগা-৩ ফ্যাটি এসিড। এটি অস্টিওপরোসিস প্রতিরোধে
          কাজ করে এবং হাড়কে ভালো রাখে।
        </p>
      </div>

      <div className="mt-5">
        <p className="text-center text-2xl font-bold border-b-2 pb-2">
          Customer Reviews
        </p>
      </div> */}
      <CommentSection />
    </div>
  );
};

export default DynamicProducts;
