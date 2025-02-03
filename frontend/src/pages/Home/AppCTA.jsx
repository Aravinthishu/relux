import React from 'react';

const AppCTA = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8 max-w-7xl mx-auto">
      <div className="flex-1 flex justify-center lg:justify-start mb-6 lg:mb-0">
        <img src="/path-to-phone-image.png" alt="App Screenshot" className="w-64 lg:w-80 shadow-lg" />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <h4 className="text-green-600 font-semibold text-sm uppercase mb-2">New Generation</h4>
        <h1 className="text-4xl font-bold text-black mb-4">Find your nearest Electric Car</h1>
        <p className="text-gray-600 mb-6">
          The kilowatt (kW) refers to the power rating of a home charge point and is the maximum
          amount of power that can be drawn from the socket at any one time.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 mb-6">
          <button className="bg-green-700 text-white px-4 py-2 rounded-md shadow hover:bg-green-800 transition duration-300">
            Download on Appstore
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition duration-300">
            Get it on Googleplay
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Home Stations</span>
            <span>25%</span>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full">
            <div className="bg-green-600 h-1 rounded-full" style={{ width: '25%' }}></div>
          </div>

          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Commercial Systems</span>
            <span>35%</span>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full">
            <div className="bg-green-600 h-1 rounded-full" style={{ width: '35%' }}></div>
          </div>

          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Public Charger</span>
            <span>70%</span>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full">
            <div className="bg-green-600 h-1 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCTA;
