"use client";
import React, { useState } from "react";
import Image from "next/image";
import control_img from "../../../../public/control.png";
import logo_main from "../../../../public/images/e-comm.png";
import users_img from "../../../../public/User.png";
import Link from "next/link";
import { removeCookie } from "@/components/helper/cookies";
import { useRouter } from "next/navigation";
import SlideIcon from "../../../../public/icons/SlideIcon";
import ShippingIcon from "@/assets/ShippingIcon";

const AdminDashboard = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const handleLogout = () => {
    // console.log("logout");
    removeCookie("bisuddho_auth");
    router.push("/");
    window.location.reload();
  };
  return (
    <div className="flex">
      <div
        style={{ backgroundColor: "#1f2937" }}
        className={` ${
          open ? "w-72" : "w-20 "
        } h-screen p-5 relative duration-300`}
      >
        <Image
          src={control_img}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="control_img"
        />
        <ul className="">
          <Link href="/admin/addProduct">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
            >
              <svg
                fill="#ffffff"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M13,12 L17.5,12 C17.7761424,12 18,12.2238576 18,12.5 C18,12.7761424 17.7761424,13 17.5,13 L13,13 L13,17.5 C13,17.7761424 12.7761424,18 12.5,18 C12.2238576,18 12,17.7761424 12,17.5 L12,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 C7,12.2238576 7.22385763,12 7.5,12 L12,12 L12,7.5 C12,7.22385763 12.2238576,7 12.5,7 C12.7761424,7 13,7.22385763 13,7.5 L13,12 Z M5.5,3 C5.77614237,3 6,3.22385763 6,3.5 C6,3.77614237 5.77614237,4 5.5,4 C4.67157288,4 4,4.67157288 4,5.5 C4,5.77614237 3.77614237,6 3.5,6 C3.22385763,6 3,5.77614237 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 Z M19.5,4 C19.2238576,4 19,3.77614237 19,3.5 C19,3.22385763 19.2238576,3 19.5,3 C20.8807119,3 22,4.11928813 22,5.5 L22,5.56155281 C22,5.83769519 21.7761424,6.06155281 21.5,6.06155281 C21.2238576,6.06155281 21,5.83769519 21,5.56155281 L21,5.5 C21,4.67157288 20.3284271,4 19.5,4 Z M3,7.5 C3,7.22385763 3.22385763,7 3.5,7 C3.77614237,7 4,7.22385763 4,7.5 L4,8.5 C4,8.77614237 3.77614237,9 3.5,9 C3.22385763,9 3,8.77614237 3,8.5 L3,7.5 Z M3,10.5 C3,10.2238576 3.22385763,10 3.5,10 C3.77614237,10 4,10.2238576 4,10.5 L4,11.5 C4,11.7761424 3.77614237,12 3.5,12 C3.22385763,12 3,11.7761424 3,11.5 L3,10.5 Z M3,13.5 C3,13.2238576 3.22385763,13 3.5,13 C3.77614237,13 4,13.2238576 4,13.5 L4,14.5 C4,14.7761424 3.77614237,15 3.5,15 C3.22385763,15 3,14.7761424 3,14.5 L3,13.5 Z M3,16.5 C3,16.2238576 3.22385763,16 3.5,16 C3.77614237,16 4,16.2238576 4,16.5 L4,17.5 C4,17.7761424 3.77614237,18 3.5,18 C3.22385763,18 3,17.7761424 3,17.5 L3,16.5 Z M21,7.5 C21,7.22385763 21.2238576,7 21.5,7 C21.7761424,7 22,7.22385763 22,7.5 L22,8.5 C22,8.77614237 21.7761424,9 21.5,9 C21.2238576,9 21,8.77614237 21,8.5 L21,7.5 Z M21,10.5 C21,10.2238576 21.2238576,10 21.5,10 C21.7761424,10 22,10.2238576 22,10.5 L22,11.5 C22,11.7761424 21.7761424,12 21.5,12 C21.2238576,12 21,11.7761424 21,11.5 L21,10.5 Z M21,13.5 C21,13.2238576 21.2238576,13 21.5,13 C21.7761424,13 22,13.2238576 22,13.5 L22,14.5 C22,14.7761424 21.7761424,15 21.5,15 C21.2238576,15 21,14.7761424 21,14.5 L21,13.5 Z M21,16.5 C21,16.2238576 21.2238576,16 21.5,16 C21.7761424,16 22,16.2238576 22,16.5 L22,17.5 C22,17.7761424 21.7761424,18 21.5,18 C21.2238576,18 21,17.7761424 21,17.5 L21,16.5 Z M3,19.5 C3,19.2238576 3.22385763,19 3.5,19 C3.77614237,19 4,19.2238576 4,19.5 C4,20.3284271 4.67157288,21 5.5,21 C5.77614237,21 6,21.2238576 6,21.5 C6,21.7761424 5.77614237,22 5.5,22 C4.11928813,22 3,20.8807119 3,19.5 Z M7.5,4 C7.22385763,4 7,3.77614237 7,3.5 C7,3.22385763 7.22385763,3 7.5,3 L8.5,3 C8.77614237,3 9,3.22385763 9,3.5 C9,3.77614237 8.77614237,4 8.5,4 L7.5,4 Z M10.5,4 C10.2238576,4 10,3.77614237 10,3.5 C10,3.22385763 10.2238576,3 10.5,3 L11.5,3 C11.7761424,3 12,3.22385763 12,3.5 C12,3.77614237 11.7761424,4 11.5,4 L10.5,4 Z M13.5,4 C13.2238576,4 13,3.77614237 13,3.5 C13,3.22385763 13.2238576,3 13.5,3 L14.5,3 C14.7761424,3 15,3.22385763 15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L13.5,4 Z M16.5,4 C16.2238576,4 16,3.77614237 16,3.5 C16,3.22385763 16.2238576,3 16.5,3 L17.5,3 C17.7761424,3 18,3.22385763 18,3.5 C18,3.77614237 17.7761424,4 17.5,4 L16.5,4 Z M7.5,22 C7.22385763,22 7,21.7761424 7,21.5 C7,21.2238576 7.22385763,21 7.5,21 L8.5,21 C8.77614237,21 9,21.2238576 9,21.5 C9,21.7761424 8.77614237,22 8.5,22 L7.5,22 Z M10.5,22 C10.2238576,22 10,21.7761424 10,21.5 C10,21.2238576 10.2238576,21 10.5,21 L11.5,21 C11.7761424,21 12,21.2238576 12,21.5 C12,21.7761424 11.7761424,22 11.5,22 L10.5,22 Z M13.5,22 C13.2238576,22 13,21.7761424 13,21.5 C13,21.2238576 13.2238576,21 13.5,21 L14.5,21 C14.7761424,21 15,21.2238576 15,21.5 C15,21.7761424 14.7761424,22 14.5,22 L13.5,22 Z M16.5,22 C16.2238576,22 16,21.7761424 16,21.5 C16,21.2238576 16.2238576,21 16.5,21 L17.5,21 C17.7761424,21 18,21.2238576 18,21.5 C18,21.7761424 17.7761424,22 17.5,22 L16.5,22 Z M19.5,22 C19.2238576,22 19,21.7761424 19,21.5 C19,21.2238576 19.2238576,21 19.5,21 C20.3284271,21 21,20.3284271 21,19.5 C21,19.2238576 21.2238576,19 21.5,19 C21.7761424,19 22,19.2238576 22,19.5 C22,20.8807119 20.8807119,22 19.5,22 Z"></path>{" "}
                </g>
              </svg>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Add product
              </span>
            </li>
          </Link>

          <Link href="/admin/allProducts">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title></title>{" "}
                  <g
                    fill="none"
                    fillRule="evenodd"
                    id="页面-1"
                    stroke="none"
                    strokeWidth="1"
                  >
                    {" "}
                    <g
                      id="导航图标"
                      transform="translate(-325.000000, -80.000000)"
                    >
                      {" "}
                      <g id="编组" transform="translate(325.000000, 80.000000)">
                        {" "}
                        <polygon
                          fill="#FFFFFF"
                          fillOpacity="0.01"
                          fillRule="nonzero"
                          id="路径"
                          points="24 0 0 0 0 24 24 24"
                        ></polygon>{" "}
                        <polygon
                          id="路径"
                          points="22 7 12 2 2 7 2 17 12 22 22 17"
                          stroke="#ffffff"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></polygon>{" "}
                        <line
                          id="路径"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          x1="2"
                          x2="12"
                          y1="7"
                          y2="12"
                        ></line>{" "}
                        <line
                          id="路径"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeWnejoin="round"
                          strokeWidth="1.5"
                          x1="12"
                          x2="12"
                          y1="22"
                          y2="12"
                        ></line>{" "}
                        <line
                          id="路径"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeWnejoin="round"
                          strokeWidth="1.5"
                          x1="22"
                          x2="12"
                          y1="7"
                          y2="12"
                        ></line>{" "}
                        <line
                          id="路径"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          x1="17"
                          x2="7"
                          y1="4.5"
                          y2="9.5"
                        ></line>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                All product
              </span>
            </li>
          </Link>

          <Link href="/admin/users">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
            >
              <Image src={users_img} width={20} height={20} alt="user_img" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Customer data
              </span>
            </li>
          </Link>

          <Link href="/admin/orders">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
            >
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 1024 1024"
                fill="#ffffff"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                    fill=""
                  ></path>
                </g>
              </svg>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Orders
              </span>
            </li>
          </Link>

          <Link href="/admin/shipping">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
            >
              <ShippingIcon />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Shipping
              </span>
            </li>
          </Link>

          <Link href="/admin/allCategory">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 48.00 48.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="0.00048000000000000007"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>category-list</title>{" "}
                  <g id="Layer_2" data-name="Layer 2">
                    {" "}
                    <g id="invisible_box" data-name="invisible box">
                      {" "}
                      <rect width="48" height="48" fill="none"></rect>{" "}
                    </g>{" "}
                    <g id="icons_Q2" data-name="icons Q2">
                      {" "}
                      <path d="M24,10h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,10Z"></path>{" "}
                      <path d="M24,24h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,24Z"></path>{" "}
                      <path d="M24,38h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,38Z"></path>{" "}
                      <path d="M12,7.9,14.4,12H9.5L12,7.9M12,2a2.1,2.1,0,0,0-1.7,1L4.2,13a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H18a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-6-10A1.9,1.9,0,0,0,12,2Z"></path>{" "}
                      <path d="M12,30a6,6,0,1,1,6-6A6,6,0,0,1,12,30Zm0-8a2,2,0,1,0,2,2A2,2,0,0,0,12,22Z"></path>{" "}
                      <path d="M16,44H8a2,2,0,0,1-2-2V34a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v8A2,2,0,0,1,16,44Zm-6-4h4V36H10Z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                All Categories
              </span>
            </li>
          </Link>

          <Link href="/admin/sliders">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
            >
              <SlideIcon />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Slider controller
              </span>
            </li>
          </Link>

          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5`}
          >
            <button className="flex" onClick={handleLogout}>
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                </g>
              </svg>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 ms-3.5`}
              >
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
