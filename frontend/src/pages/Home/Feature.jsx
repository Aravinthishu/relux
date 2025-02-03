import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faCar, faChargingStation, faBatteryFull } from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
    return (
      <div className="flex flex-col items-center gap-6 justify-center h-[600px] bg-black text-white pt-0 px-2 mt-0">
        <p className="text-sm uppercase tracking-widest text-gray-400">New Generation</p>
        <h2 className="text-4xl font-bold text-center mt-2">Performance! Hello Open Roads</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16 mt-8 w-10/12 ">
        
          <div className="bg-gray-300 text-black rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <FontAwesomeIcon icon={faPlug} className="text-green-500 text-4xl" />
            <p className="mt-4">Electric range on full call</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <FontAwesomeIcon icon={faChargingStation} className="text-green-500 text-4xl" />
            <p className="mt-4">Electric range on full call</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <FontAwesomeIcon icon={faCar} className="text-green-500 text-4xl" />
            <p className="mt-4">Electric range on full call</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-40 shadow-lg">
            <FontAwesomeIcon icon={faBatteryFull} className="text-green-500 text-4xl" />
            <p className="mt-4">Electric range on full call</p>
          </div>
        </div>
      </div>
    );
};
  
export default Feature;
