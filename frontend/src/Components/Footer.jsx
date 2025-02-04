import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16 bg-white/20 h-80 rounded-lg">

        <div>
          <h3 className="text-lg font-semibold uppercase">Contact</h3>
          <hr className="border-gray-600 my-2 w-16" />
          <p className="text-sm mt-2">
            <span className="font-semibold">Phone:</span> 9876543210
          </p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Email:</span> reluxelectric@gmail.com
          </p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Address:</span> Chennai, Tamil Nadu
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold uppercase">Menu</h3>
          <hr className="border-gray-600 my-2 w-16" />
          <ul className="text-sm mt-2 space-y-2">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Pricing</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-10 rounded-lg ">
          <h3 className="text-base font-semibold uppercase">Download Our App</h3>
          <p className="text-sm text-gray-400 mt-2">
            Experience seamless services with our mobile app.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-green-600 px-4 py-2 rounded-lg flex items-center text-white text-sm">
              <FaFacebookF className="w-5 h-5 mr-2" /> App Store
            </button>
            <button className="bg-green-600 px-4 py-2 rounded-lg flex items-center text-white text-sm">
              <FaInstagram className="w-5 h-5 mr-2" /> Play Store
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
        <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
        <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Relux Electric. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;