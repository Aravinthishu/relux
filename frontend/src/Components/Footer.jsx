import { FaFacebookF, FaInstagram, FaLinkedinIn, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 flex flex-col items-center lg:h-lvh justify-center">
      <div className="bg-white/20 w-11/12 md:w-10/12  flex flex-col mx-auto p-8 rounded-lg lg:h-[500px] justify-center md:px-28 gap-14">     
        <div className="flex justify-end space-x-4 mb-6">
          <FaInstagram className="text-white hover:text-green-400 cursor-pointer text-2xl" />
          <FaFacebookF className="text-white hover:text-green-400 cursor-pointer text-2xl" />
          <FaLinkedinIn className="text-white hover:text-green-400 cursor-pointer text-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">   
          <div>
            <h3 className="text-2xl font-semibold uppercase mb-4">Contact</h3>
            <hr className="border-gray-600 mb-4 w-60" />
            <p className="text-lg mt-2"><strong>Phone:</strong> 9876543210</p>
            <p className="text-lg mt-2"><strong>Email:</strong> reluxelectric@gmail.com</p>
            <p className="text-lg mt-2"><strong>Address:</strong> Chennai, Tamil Nadu</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold uppercase mb-4">Menu</h3>
            <hr className="border-gray-600 mb-4 w-36  " />
            <div className="flex space-x-8">
              <ul className="space-y-2">
                <li className="hover:text-green-400 cursor-pointer">Home</li>
                <li className="hover:text-green-400 cursor-pointer">About</li>
                <li className="hover:text-green-400 cursor-pointer">Pricing</li>
              </ul>
              <ul className="space-y-2">
                <li className="hover:text-green-400 cursor-pointer">Services</li>
                <li className="hover:text-green-400 cursor-pointer">Contact</li>
                <li className="hover:text-green-400 cursor-pointer">FAQ</li>
              </ul>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold uppercase mb-2">Download Our App</h3>
            <p className="text-sm text-gray-400 mb-4">Experience seamless services with our mobile app.</p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#1F8141] px-4 py-4 rounded-lg flex items-center gap-2 text-white">
                <FaApple size={20} /> APP STORE
              </button>
              <button className="bg-[#1F8141] px-4 py-4 rounded-lg flex items-center gap-2 text-white">
                <FaGooglePlay size={20} /> PLAY STORE
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 mt-6 pt-4">
          © {new Date().getFullYear()} Relux Electric. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
