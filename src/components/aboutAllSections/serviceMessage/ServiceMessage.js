import React from "react";

const ServiceMessage = () => {
  return (
    <div className="container mx-auto">
      <p className="mt-10 text-center font-bold text-[35px] pb-5">
        Service Message
      </p>
      <p className="text-center font-bold">
        Our company’s building stands firm on the foundation of five pillars
        that are of key importance to every individual working here:
      </p>
      <div className="mt-10 mb-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 gap-3">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 pt-5">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/01/quality.png?resize=400%2C400&ssl=1"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Quality
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 pt-5">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/01/customer-service-agent.png?w=256&ssl=1"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Quality
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 pt-5">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/01/delivery.png?w=256&ssl=1"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Quality
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 pt-5">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://i0.wp.com/halalfoodservicebd.com/wp-content/uploads/2022/01/trust.png?w=256&ssl=1"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Quality
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 lg:p-0 md:p-0 sm:p-0 xs:p-3">
        <p className="font-bold">
          We do not just “talk” about quality we “live” it. This is one that
          parameter which we never shut our eyes to. We aim and strive to
          provide our clients with best of the best. We focus on continuous
          learning to add on to the quality work and to excel in market by
          providing the unrivalled quality standards. With us as your power
          planners, you can sit back and relax safe in the knowledge that your
          work is going to be done at its best. At Halal Food, service is not
          merely an idea. It’s the key to how we make our way to customer’s
          loyalty and this never stops here. We believe in making a continuous
          effort to maintain what’s being already achieved and to toil for
          what’s not yet achieved. Each person in our organization must commit
          to serve our clients with the attitude of passion, excellence and
          highest level of integrity. We believe that this is a kind of service
          that will always result in obtaining the impeccable references and an
          impressive list of clients.
        </p>
      </div>
    </div>
  );
};

export default ServiceMessage;
