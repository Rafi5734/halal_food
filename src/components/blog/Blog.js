import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="p-3">
      {/* <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-5">
        <div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#f7f7f7]">
            <a href="#">
              <Image
                className="p-5 rounded"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/04/%E0%A6%B8%E0%A6%B0%E0%A6%BF%E0%A6%B7%E0%A6%BE-%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%A7%E0%A7%81-%E0%A6%9C%E0%A6%AE%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%95%E0%A7%87%E0%A6%A8.jpg?resize=800%2C800&ssl=1"
                width={500}
                // width="100%"
                height={100}
                // sizes="100vw"
                quality={75}
                // placeholder="blur"
                sizes="(max-width: 100%)"
                alt="blog image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 class="mb-1 text-xl font-bold text-[#374151] hover:text-[#d19c22]">
                  সরিষা ফুলের মধু জমে যাচ্ছে?
                </h5>
                <span className="text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  পপুলার
                </span>

                <p className="mt-5 mb-5 text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  সব মধুর বৈশিষ্ট্য এক না। কোনটার রং লাল,কালো আবার সাদা। কোন মধু
                  জমে যায় আবার কোনটা জমে না। একই মৌমাছি কিন্তু ফুলের ভিন্নতার
                  কারণে মধুর বৈশিষ্ট্য ভিন্ন হয়। সরিষা ফুলের মধুর বৈশিষ্ট্য এই
                  মধু খুবই মিষ্টি। রং হবে হালকা হলুদ বর্ণের। তবে এই মধুর সবচেয়ে
                  বড় যে বৈশিষ্ট্য, তা আমাদের অনেকের জানা নেই।...
                </p>
              </a>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#d19c22] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#f7f7f7]">
            <a href="#">
              <Image
                className="p-5 rounded"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/04/%E0%A6%B8%E0%A6%B0%E0%A6%BF%E0%A6%B7%E0%A6%BE-%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%A7%E0%A7%81-%E0%A6%9C%E0%A6%AE%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%95%E0%A7%87%E0%A6%A8.jpg?resize=800%2C800&ssl=1"
                width={500}
                // width="100%"
                height={100}
                // sizes="100vw"
                quality={75}
                // placeholder="blur"
                sizes="(max-width: 100%)"
                alt="blog image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 class="mb-1 text-xl font-bold text-[#374151] hover:text-[#d19c22]">
                  সরিষা ফুলের মধু জমে যাচ্ছে?
                </h5>
                <span className="text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  পপুলার
                </span>

                <p className="mt-5 mb-5 text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  সব মধুর বৈশিষ্ট্য এক না। কোনটার রং লাল,কালো আবার সাদা। কোন মধু
                  জমে যায় আবার কোনটা জমে না। একই মৌমাছি কিন্তু ফুলের ভিন্নতার
                  কারণে মধুর বৈশিষ্ট্য ভিন্ন হয়। সরিষা ফুলের মধুর বৈশিষ্ট্য এই
                  মধু খুবই মিষ্টি। রং হবে হালকা হলুদ বর্ণের। তবে এই মধুর সবচেয়ে
                  বড় যে বৈশিষ্ট্য, তা আমাদের অনেকের জানা নেই।...
                </p>
              </a>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#d19c22] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#f7f7f7]">
            <a href="#">
              <Image
                className="p-5 rounded"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/04/%E0%A6%B8%E0%A6%B0%E0%A6%BF%E0%A6%B7%E0%A6%BE-%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%A7%E0%A7%81-%E0%A6%9C%E0%A6%AE%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%95%E0%A7%87%E0%A6%A8.jpg?resize=800%2C800&ssl=1"
                width={500}
                // width="100%"
                height={100}
                // sizes="100vw"
                quality={75}
                // placeholder="blur"
                sizes="(max-width: 100%)"
                alt="blog image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 class="mb-1 text-xl font-bold text-[#374151] hover:text-[#d19c22]">
                  সরিষা ফুলের মধু জমে যাচ্ছে?
                </h5>
                <span className="text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  পপুলার
                </span>

                <p className="mt-5 mb-5 text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  সব মধুর বৈশিষ্ট্য এক না। কোনটার রং লাল,কালো আবার সাদা। কোন মধু
                  জমে যায় আবার কোনটা জমে না। একই মৌমাছি কিন্তু ফুলের ভিন্নতার
                  কারণে মধুর বৈশিষ্ট্য ভিন্ন হয়। সরিষা ফুলের মধুর বৈশিষ্ট্য এই
                  মধু খুবই মিষ্টি। রং হবে হালকা হলুদ বর্ণের। তবে এই মধুর সবচেয়ে
                  বড় যে বৈশিষ্ট্য, তা আমাদের অনেকের জানা নেই।...
                </p>
              </a>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#d19c22] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#f7f7f7]">
            <a href="#">
              <Image
                className="p-5 rounded"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/04/%E0%A6%B8%E0%A6%B0%E0%A6%BF%E0%A6%B7%E0%A6%BE-%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%A7%E0%A7%81-%E0%A6%9C%E0%A6%AE%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%95%E0%A7%87%E0%A6%A8.jpg?resize=800%2C800&ssl=1"
                width={500}
                // width="100%"
                height={100}
                // sizes="100vw"
                quality={75}
                // placeholder="blur"
                sizes="(max-width: 100%)"
                alt="blog image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 class="mb-1 text-xl font-bold text-[#374151] hover:text-[#d19c22]">
                  সরিষা ফুলের মধু জমে যাচ্ছে?
                </h5>
                <span className="text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  পপুলার
                </span>

                <p className="mt-5 mb-5 text-sm font-bold text-[#374151] hover:text-[#d19c22]">
                  সব মধুর বৈশিষ্ট্য এক না। কোনটার রং লাল,কালো আবার সাদা। কোন মধু
                  জমে যায় আবার কোনটা জমে না। একই মৌমাছি কিন্তু ফুলের ভিন্নতার
                  কারণে মধুর বৈশিষ্ট্য ভিন্ন হয়। সরিষা ফুলের মধুর বৈশিষ্ট্য এই
                  মধু খুবই মিষ্টি। রং হবে হালকা হলুদ বর্ণের। তবে এই মধুর সবচেয়ে
                  বড় যে বৈশিষ্ট্য, তা আমাদের অনেকের জানা নেই।...
                </p>
              </a>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-[#d19c22] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <p className="text-center text-5xl font-bold">Comming Soon!</p>
      {/* pagination buttons */}
    </div>
  );
};

export default Blog;
