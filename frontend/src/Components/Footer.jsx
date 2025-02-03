import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Section */}
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

        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-semibold uppercase">Menu</h3>
          <hr className="border-gray-600 my-2 w-16" />
          <ul className="text-sm mt-2 space-y-2">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* App Download Section */}
        <div className="bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold uppercase">
            Download Our Application
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-green-600 px-4 py-2 rounded-lg flex items-center text-white text-sm">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 0 0-4.38 19c.32.06.44-.14.44-.31v-1.15c-1.78.38-2.16-.85-2.16-.85-.29-.74-.71-.93-.71-.93-.58-.4.05-.4.05-.4.64.05.98.66.98.66.57.98 1.5.7 1.87.54.06-.42.23-.7.42-.85-1.42-.16-2.92-.71-2.92-3.16 0-.7.25-1.27.66-1.72-.07-.16-.29-.8.06-1.67 0 0 .54-.17 1.75.66.52-.14 1.07-.21 1.62-.21s1.1.07 1.62.21c1.21-.83 1.75-.66 1.75-.66.35.87.13 1.51.06 1.67.41.45.66 1.02.66 1.72 0 2.46-1.5 3-2.93 3.16.24.2.45.6.45 1.22v1.81c0 .17.12.38.45.31A10 10 0 0 0 12 2" />
              </svg>
              App Store
            </button>
            <button className="bg-green-600 px-4 py-2 rounded-lg flex items-center text-white text-sm">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 0 0-4.38 19c.32.06.44-.14.44-.31v-1.15c-1.78.38-2.16-.85-2.16-.85-.29-.74-.71-.93-.71-.93-.58-.4.05-.4.05-.4.64.05.98.66.98.66.57.98 1.5.7 1.87.54.06-.42.23-.7.42-.85-1.42-.16-2.92-.71-2.92-3.16 0-.7.25-1.27.66-1.72-.07-.16-.29-.8.06-1.67 0 0 .54-.17 1.75.66.52-.14 1.07-.21 1.62-.21s1.1.07 1.62.21c1.21-.83 1.75-.66 1.75-.66.35.87.13 1.51.06 1.67.41.45.66 1.02.66 1.72 0 2.46-1.5 3-2.93 3.16.24.2.45.6.45 1.22v1.81c0 .17.12.38.45.31A10 10 0 0 0 12 2" />
              </svg>
              Play Store
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
        <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
        <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer text-2xl" />
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
