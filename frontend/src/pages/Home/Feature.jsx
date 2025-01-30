

const FeatureSection = () => {
    return (
      <div className="flex flex-col items-center gap-6 justify-center h-[600px] bg-black text-white p-8">
        <p className="text-sm uppercase tracking-widest text-gray-400">New Generation</p>
        <h2 className="text-4xl font-bold text-center mt-2">Performance! Hello Open Roads</h2>
        
        <div className="grid lg:max-w-10/12 grid-cols-4 gap-40 mt-8 ">
          <div className="bg-gray-300 text-black rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <img src="/icons/charging.svg" alt="Charging" className="h-10 w-10" />
            <p className="mt-4">Electric range on full call</p>
            <div className="flex space-x-1 mt-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
          </div>
  
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <img src="/icons/battery.svg" alt="Battery" className="h-10 w-10 text-green-500" />
            <p className="mt-4">Electric range on full call</p>
            <div className="flex space-x-1 mt-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>
  
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <img src="/icons/car.svg" alt="Car" className="h-10 w-10 text-green-500" />
            <p className="mt-4">Electric range on full call</p>
            <div className="flex space-x-1 mt-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>
  
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <img src="/icons/charging-station.svg" alt="Charging Station" className="h-10 w-10 text-green-500" />
            <p className="mt-4">Electric range on full call</p>
            <div className="flex space-x-1 mt-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeatureSection;
  