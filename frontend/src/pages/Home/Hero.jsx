import React from 'react';
import hero from '../../assets/hero.png';
import ShinyButton from '../../Components/ShinyButton';

const Hero = () => {
  return (
<section className="px-4 md:px-6 2xl:px-0 bg-black h-[700px]  flex items-center justify-center relative overflow-hidden">
  <div className="absolute w-[600px] h-[500px] bg-green-500 rounded-full filter blur-3xl opacity-30 -top-32 -left-64"></div>
  <div className="absolute w-[600px] h-[500px] bg-green-500 rounded-full filter blur-3xl opacity-30 bottom-0 -right-32"></div>
  <div className="w-full  lg:max-w-10/12 mx-auto flex flex-col md:flex-row md:items-center md:min-h-screen relative z-10">   
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-baseline gap-6  ">
      <h1 className=" font-title font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center md:text-left">
        Electric Vehicle in Your Journey
      </h1>
      <p className="font-syne font-medium text-base lg:text-lg text-white text-center md:text-left  max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
      </p>
      <div className="flex gap-4">
        <ShinyButton buttonText="Download" />
        <ShinyButton buttonText="Download" />
      </div>
    </div>    
    <div className="w-full md:w-1/2 flex justify-center items-center lg:items-start mt-6 md:mt-0">
      <img
        className="w-72 sm:w-96 md:w-full lg:w-[500px] font-syne xl:w-[700px] max-w-full transition-transform duration-300 hover:scale-105"
        src={hero}
        alt="Electric Vehicle"
      />
    </div>
  </div>
</section>
  );
};
export default Hero;