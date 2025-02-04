import React from 'react';

const AppCTA = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-4 sm:p-6 md:p-8 w-10/12 mx-auto h-auto lg:h-screen gap-6">
      
      <div className="flex-1 flex justify-center lg:justify-start mb-4 lg:mb-0">
        <img src="/path-to-phone-image.png" alt="App Screenshot" className="w-40 sm:w-56 md:w-64 lg:w-80 shadow-xl rounded-lg" />
      </div>

      <div className="flex-1 text-center lg:text-left px-2 h-96  ">
        <h4 className="text-green-600 font-semibold text-xs sm:text-sm uppercase mb-1 sm:mb-2">New Generation</h4>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-2 sm:mb-4 leading-tight">
          Find your nearest Electric Car
        </h1> 
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
          The kilowatt (kW) refers to the power rating of a home charge point and is the maximum
          amount of power that can be drawn from the socket at any one time.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
          <button className="bg-green-700 text-white px-4 py-2 rounded-md shadow hover:bg-green-800 transition duration-300 w-full sm:w-auto">
            Download on Appstore
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
            Get it on Googleplay
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span>Home Stations</span>
              <span>25%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span>Commercial Systems</span>
              <span>35%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span>Public Charger</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCTA;
