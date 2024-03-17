import Image from "next/image";
import React from "react";

const ServiceTeam = () => {
  return (
    <div className="bg-[#fafafa] pb-10">
      <p className="text-center mt-10 mb-10 text-[35px] font-bold pt-5">
        Halal Food Service Team
      </p>
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
          <div>
            <div className="bg-white border border-gray-200 rounded-lg">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png"
                  width={500}
                  // width="100%"
                  height={100}
                  // sizes="100vw"
                  quality={75}
                  // placeholder="blur"
                  sizes="(max-width: 100%)"
                  alt="team image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-center mb-2 text-black text-2xl font-bold tracking-tight text-gray-900">
                    Md Rashedul Islam
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border border-gray-200 rounded-lg">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png"
                  width={500}
                  // width="100%"
                  height={100}
                  // sizes="100vw"
                  quality={75}
                  // placeholder="blur"
                  sizes="(max-width: 100%)"
                  alt="team image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-center mb-2 text-black text-2xl font-bold tracking-tight text-gray-900">
                    Md Rashedul Islam
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white border border-gray-200 rounded-lg">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png"
                  width={500}
                  // width="100%"
                  height={100}
                  // sizes="100vw"
                  quality={75}
                  // placeholder="blur"
                  sizes="(max-width: 100%)"
                  alt="team image"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-center mb-2 text-black text-2xl font-bold tracking-tight text-gray-900">
                    Md Rashedul Islam
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTeam;
