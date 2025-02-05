import React from 'react';

const Investments = () => {
  return (
    <section className="px-4 md:px-6 2xl:px-0 bg-black min-h-[700px] flex items-center justify-center relative overflow-hidden py-10 lg:mb-20">
      <div className="bg-green-700 rounded-2xl p-4 md:p-12 lg:p-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-4 w-full  md:w-10/12 h-full">
        <div className="bg-black text-white p-12 rounded-xl flex flex-col shadow-lg w-full">
          <h2 className="text-3xl font-light mb-4">Zero Investment</h2>
          <ul className="list-disc list-inside md:space-y-2">
            <li>Marketing Support</li>
            <li>Operating Support</li>
            <li>Device Onboard</li>
          </ul>
        </div>

        <div className="bg-black text-white p-12 rounded-xl shadow-lg w-full">
          <h2 className="text-3xl font-light  mb-4">Franchise</h2>
          <ul className="w-full space-y-2">
            <li className="text-base">Additional Income</li>
            <li className="text-base">Marketing Support</li>
            <li className="text-base">Connected with B2B</li>
          </ul>
        </div>

        <div className="text-white flex flex-col justify-between w-full">
          <div>
            <h2 className="text-2xl font-semibold mb-4">As Featured In</h2>
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla suscipit eros.
            </p>
          </div>
          <button className="bg-white text-black font-semibold px-4 py-2 w-full md:w-36 rounded-md shadow-md hover:bg-gray-200 transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};
  
export default Investments;
