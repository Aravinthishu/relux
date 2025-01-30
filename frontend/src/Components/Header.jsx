import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import ShinyButton from './ShinyButton';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   
    <nav className="flex font-syne flex-wrap items-center justify-between p-3 bg-green-600 2xl:px-[100px]">
      
      <div class="flex-shrink-0">
        <img src={logo} className="w-40 h-auto sm:w-48"/>
      </div>

      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          ) : (
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          )}
        </button>
      </div>
      <ul className={`w-full font-syne md:w-auto md:flex md:items-center md:space-x-6  mt-5 md:mt-0 ${isOpen ? 'block' : 'hidden'} text-right text-bold`}>


        <li className="block md:inline-block text-base sm:text-lg md:text-xl  font-semibold text-white hover:underline hover:text-green-900">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="block font-syne md:inline-block text-base sm:text-lg  text-white font-semibold hover:underline hover:text-green-900">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="block font-syne md:inline-block text-base sm:text-lg   text-white font-semibold hover:underline hover:text-green-900">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="block font-syne md:inline-block text-base sm:text-lg   text-white font-semibold hover:underline hover:text-green-900">
          <NavLink to="/location">Location</NavLink>
        </li>
        <li className="block font-syne md:inline-block text-base sm:text-lg  text-white font-semibold hover:underline hover:text-green-900">
          <NavLink to="/business">Business</NavLink>
        </li>
        <li className="block font-syne md:inline-block text-base sm:text-lg  text-white font-semibold hover:underline hover:text-green-900">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="block  md:inline-block text-base sm:text-lg   text-white font-semibold hover:underline hover:text-green-900">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      </ul>
      <div className="hidden md:flex">
        <button>
          <ShinyButton/>
        </button>
      </div>
    </nav>
  );
};

export default Header;
