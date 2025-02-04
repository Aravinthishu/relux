import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faCar, faChargingStation, faBatteryFull } from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center bg-black text-white py-8 lg:h-[700px] px-2 ">
      <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400">New Generation</p>
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-2">Performance! Hello Open Roads</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-8 w-10/12">
        <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl w-full h-44 md:h-48 lg:h-52">
          <img src=""/>
          <p className="mt-4 text-sm md:text-base text-center">Fast Charging Support</p>
        </div>

        <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl w-full h-44 md:h-48 lg:h-52">
          <FontAwesomeIcon icon={faChargingStation} className="text-green-500 text-3xl md:text-4xl" />
          <p className="mt-4 text-sm md:text-base text-center">Efficient Charging Stations</p>
        </div>

        <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl w-full h-44 md:h-48 lg:h-52">
          <FontAwesomeIcon icon={faCar} className="text-green-500 text-3xl md:text-4xl" />
          <p className="mt-4 text-sm md:text-base text-center">Eco-Friendly Performance</p>
        </div>

        <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl w-full h-44 md:h-48 lg:h-52">
          <FontAwesomeIcon icon={faBatteryFull} className="text-green-500 text-3xl md:text-4xl" />
          <p className="mt-4 text-sm md:text-base text-center">Long Battery Life</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
