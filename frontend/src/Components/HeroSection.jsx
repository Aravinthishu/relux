// HeroSection.js
import React from 'react';

const HeroSection = ({ heading, description, imageSrc }) => {
  return (
    <section className="relative w-full h-96 bg-center flex justify-center items-center bg-cover bg-no-repeat px-4 md:px-0" style={{ backgroundImage: `url(${imageSrc})` }}>
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-950 opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 hero-content text-center text-white">
        <h1 className="text-7xl font-medium leading-relaxed mb-2">{heading}</h1>
        <p className="text-base text-gray-200  font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;

