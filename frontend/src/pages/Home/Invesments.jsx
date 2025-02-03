import React from 'react';

const Investments = () => {
  return (
    <section className="px-4 md:px-6 2xl:px-0 bg-black h-  flex items-center justify-center relative overflow-hidden">
    <div className="bg-green-700 rounded-2xl h-[400px] p-20 mx-auto  grid grid-cols-3 gap-28 w-10/12">
      <div className="bg-black text-white p-6 rounded-xl flex flex-col w-5/6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Zero Investment</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Marketing Support</li>
          <li>Operating Support</li>
          <li>Device Onboard</li>
        </ul>
      </div>

      <div className="bg-black text-white p-6 rounded-xl w-5/6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Franchise</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Additional Income</li>
          <li>Marketing Support</li>
          <li>Connected with B2B</li>
        </ul>
      </div>

      <div className="text-white flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4">As Featured In</h2>
          <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla suscipit eros.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300">
          Know More
        </button>
      </div>
    </div>
    </section>
  );
};

export default Investments;
