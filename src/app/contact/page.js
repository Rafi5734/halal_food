import Image from "next/image";
import React from "react";
import contactBanner from "../../../public/images/firmbee-com-SpVHcbuKi6E-unsplash.webp";
import styles from "./contact.module.css";
import ContactBannarImg from "../../../public/images/contact_bannar_img.jpg";
const page = () => {
  return (
    <div className={styles.main_contact_container}>
      {/* <Image
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src={ContactBannarImg}
        sizes="(max-width: 100%)"
        alt="Bonnie image"
      /> */}

      <div className="w-full bg-cover bg-center bg-no-repeat p-20 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen text-2xl font-semibold">
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-[64px] text-white font-bold mb-8">Contact</p>
          <p className="text-[24px] text-white font-bold">Send us a message</p>
        </div>
      </div>

      {/* <div className={styles.img_text_centered}>
        
      </div> */}
      <div className="container mx-auto text-black p-3">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-3 mt-5">
            <div>
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mt-5 flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={ContactBannarImg}
                    sizes="(max-width: 100%)"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Address
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Visual Designer
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mt-5 flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={ContactBannarImg}
                    sizes="(max-width: 100%)"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Address
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Visual Designer
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mt-5 flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={ContactBannarImg}
                    sizes="(max-width: 100%)"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Address
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Visual Designer
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mt-5 flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={ContactBannarImg}
                    sizes="(max-width: 100%)"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Address
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Visual Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full">
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Ask a question
                </h5>
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name..."
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit your message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <iframe
            className="rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.142086501156!2d90.42166437592898!3d23.813545986348124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1704878021259!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
