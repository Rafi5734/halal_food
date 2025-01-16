"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
  Badge,
  Avatar,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import UserIcon from "@/assets/UserIcon";
import OrderIcon from "@/assets/OrderIcon";
import LoveIcon from "@/assets/LoveIcon";
import Cart from "@/assets/Cart";
import Link from "next/link";
import { useGetAllCategoriesQuery } from "@/api/categorySlice/categorySlice";
import { useWindowSize } from "@react-hook/window-size";
import HumburgerMenu from "@/assets/HumburgerMenu";
import { getCart } from "@/utils/CartUtils";
import CategoryProduct from "@/components/categoryProduct/CategoryProduct";

const UpdatedNavbar = () => {
  const router = useRouter();
  const [width] = useWindowSize();

  const cartLength = getCart();

  const [searchItem, setSearchItem] = useState("");

  const { data: getAllCategories } = useGetAllCategoriesQuery();

  const handleSearchProduct = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/searchProduct",
      query: { searchItem: searchItem },
    });
  };

  const handleCategory = (category) => {
    console.log("category", category);
    return <CategoryProduct category={category} />;
  };

  return (
    <div className="bg-[#008f8f] p-4">
      <div className="container mx-auto flex flex-row w-full justify-between items-center">
        <Link href="/">
          <Image
            // width="30%"
            // width="50%"
            className="w-24"
            radius="full"
            src="https://i.postimg.cc/851b3Sq3/jeckostyles-logo.jpg"
            alt="jeckostyle logo"
          />
        </Link>

        <div className="flex flex-row justify-center items-center">
          {width && width <= 560 ? (
            <>
              <form
                className="w-full mx-auto ms-4 me-4 hidden"
                onSubmit={(e) => handleSearchProduct(e)}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="w-full p-4 ps-10 text-sm text-gray-500 border border-gray-300 rounded-full bg-white focus:ring-white focus:border-white"
                    placeholder="Search Mockups, Logos..."
                    required
                    onChange={(e) => {
                      setSearchItem(e.target.value);
                    }}
                  />
                  <Link
                    href={{
                      pathname: "/searchProduct",
                      query: { searchItem: searchItem },
                    }}
                  >
                    <button
                      type="submit"
                      className="rounded-full text-white absolute end-2.5 bottom-2.5 bg-[#008f8f] font-medium text-sm px-4 py-2"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </form>
            </>
          ) : (
            <>
              <form
                className="w-full mx-auto ms-4 me-4"
                onSubmit={(e) => handleSearchProduct(e)}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="search"
                    id="default-search"
                    className="w-96 p-4 ps-5 text-sm text-[#008f8f] font-medium border border-gray-300 rounded-full bg-white focus:ring-white focus:border-white"
                    placeholder="Search your products..."
                    required
                    onChange={(e) => {
                      setSearchItem(e.target.value);
                    }}
                  />
                  <Link
                    href={{
                      pathname: "/searchProduct",
                      query: { searchItem: searchItem },
                    }}
                  >
                    <button
                      type="submit"
                      className="rounded-full text-white absolute end-2.5 bottom-2.5 bg-[#008f8f] font-medium text-sm px-4 py-2"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </form>
            </>
          )}

          {/* <Badge content={cartLength?.length} shape="circle" color="default">
            <Link href="/cart">
              <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications text-black"
                variant="light"
              >
                <Cart size={24} />
              </Button>
            </Link>
          </Badge> */}
          {width && width <= 870 ? (
            <>
              <div className="flex items-center gap-4">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button isIconOnly variant="flat" className="ms-1">
                      <HumburgerMenu />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    {getAllCategories?.map((category) => (
                      <DropdownItem key={category?.category}>
                        <Link
                          href={{
                            pathname: "/categoryProducts",
                            query: { category: category?.category },
                          }}
                        >
                          {category?.category}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {width && width > 870 && (
        <div className="text-white container mx-auto flex flex-row w-full justify-center items-center">
          {getAllCategories?.map((category) => (
            <Button
              className="me-2 text-white"
              color="primary"
              // variant="bordered"
              key={category?.category}
              onClick={() => handleCategory(category?.category)}
            >
              <Link
                className="font-bold italic"
                href={{
                  pathname: "/categoryProducts",
                  query: { category: category?.category },
                }}
              >
                {category?.category}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdatedNavbar;
