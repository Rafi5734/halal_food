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
} from "@nextui-org/react";

import { Button } from "@nextui-org/react";
import UserIcon from "@/assets/UserIcon";
import OrderIcon from "@/assets/OrderIcon";
import LoveIcon from "@/assets/LoveIcon";
import Cart from "@/assets/Cart";
import Link from "next/link";
import { useGetAllCategoriesQuery } from "@/api/categorySlice/categorySlice";
import { useWindowSize } from "@react-hook/window-size";
import CategoryIcon from "@/assets/CategoryIcon";
import CloseIcon from "@/assets/CloseIcon";
import ThreeDotIcon from "@/assets/ThreeDotIcon";

const UpdatedNavbar = () => {
  const [width] = useWindowSize();
  const { data: getAllCategories } = useGetAllCategoriesQuery();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleCategory = () => {
    console.log("categoryOpen");
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-[#f37c00] p-4">
      <div className="container mx-auto flex flex-row w-full justify-between items-center">
        <Link href="/">
          <p className="text-2xl text-white font-bold">Logo</p>
        </Link>

        <div className="flex fle-row justify-center items-center">
          {width && width <= 560 ? (
            <>
              <form className="w-full mx-auto ms-4 me-4 hidden">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  />
                  <button
                    type="submit"
                    className="rounded-full text-white absolute end-2.5 bottom-2.5 bg-[#f37c00] hover:bg-[#E89135] focus:ring-4 focus:outline-none focus:ring-[#EAB378] font-medium text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <form className="w-full mx-auto ms-4 me-4">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="search"
                    id="default-search"
                    className="w-full p-4 ps-5 text-sm text-[#f37c00] font-medium border border-gray-300 rounded-full bg-white focus:ring-white focus:border-white"
                    placeholder="Search your products..."
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-full text-white absolute end-2.5 bottom-2.5 bg-[#f37c00] hover:bg-[#E89135] focus:ring-4 focus:outline-none focus:ring-[#EAB378] font-medium text-sm px-4 py-2"
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
                </div>
              </form>
            </>
          )}

          <Dropdown
            showArrow
            radius="sm"
            classNames={{
              base: "before:bg-default-200", // change arrow background
              content: "p-0 border-small border-divider bg-background",
            }}
          >
            <DropdownTrigger>
              <Button
                isIconOnly
                radius="full"
                variant="light"
                className="text-white"
              >
                <UserIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Custom item styles"
              disabledKeys={["profile"]}
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownSection aria-label="Profile & Actions" showDivider>
                <DropdownItem
                  isReadOnly
                  key="profile"
                  className="h-14 gap-2 opacity-100"
                >
                  <User
                    name="Junior Garcia"
                    description="@jrgarciadev"
                    classNames={{
                      name: "text-default-600",
                      description: "text-default-500",
                    }}
                    avatarProps={{
                      size: "sm",
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                  />
                </DropdownItem>
                <DropdownItem key="order" startContent={<OrderIcon />}>
                  My Orders
                </DropdownItem>
                <DropdownItem key="settings" startContent={<LoveIcon />}>
                  My Wishlist
                </DropdownItem>
              </DropdownSection>

              <DropdownSection aria-label="Help & Feedback">
                <DropdownItem key="registration">
                  <Link href="/login">Registration / Login</Link>
                </DropdownItem>

                <DropdownItem key="logout">Log Out</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>

          <Badge content="99+" shape="circle" color="default">
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications text-black"
              variant="light"
            >
              <Cart size={24} />
            </Button>
          </Badge>
          {width && width <= 870 ? (
            <>
              <Button onClick={handleCategory} isIconOnly variant="flat">
                <ThreeDotIcon />
              </Button>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {width && width > 870 && (
        <div className="mt-3 text-white container mx-auto flex flex-row w-full justify-center items-center">
          {getAllCategories?.map((category) => (
            <Button
              className="me-2 text-white"
              color="primary"
              variant="bordered"
              key={category?.category}
            >
              <Link
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
      <div
        className={`z-10 fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Button
          className="absolute top-4 right-0"
          onClick={() => setSidebarOpen(false)}
        >
          <CloseIcon />
        </Button>
        <div className="p-4">
          <h2 className="text-lg font-bold">Categories</h2>
          {getAllCategories?.map((category) => (
            <Link
              href={{
                pathname: "/categoryProducts",
                query: { category: category?.category },
              }}
              key={category?.category}
            >
              <p className="mt-2 text-sm">{category?.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatedNavbar;
