import React from 'react'
import img1 from '../../assets/whychoose1.jpg';
import img2 from '../../assets/whychoose2.jpg';
import img3 from '../../assets/whychoose3.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <>
    <section className=" w-full mt-44 relative px-4 lg:px-0 ">
        <div className="absolute w-[600px] h-[500px] bg-green-500 rounded-full filter blur-3xl opacity-30 bottom-0 right-0"></div>
        <div className="lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-6">
            <div className='w-full lg:w-1/3 relative flex flex-col justify-between'>
                <div className=''>
                    <h2 className=" text-secondary text-lg mb-6">Why Choose Us</h2>
                    <h1 className=" font-title font-bold text-4xl xl:text-6xl text-white">
                    Solutions For All EV Charging Programs!
                    </h1>
                </div>
                <img className='h-52 object-center object-cover rounded-2xl mt-12 w-full ' src={img1}/>
                <div className='p-4 h-14 w-14 flex items-center text-secondary justify-center bg-white rounded-full absolute right-6 bottom-6 hover:bg-[#99CC01] hover:text-white group'>
                <FaArrowRightLong className='text-2xl group-hover:text-white' />
                </div>
            </div>

            <div className='w-full lg:w-1/3 relative'>
            <img className='h-full object-center object-cover rounded-2xl w-full ' src={img2}/>
                <div className='p-4 h-14 w-14 flex items-center text-secondary justify-center bg-white rounded-full absolute right-6 bottom-6 hover:bg-[#99CC01] hover:text-white group'>
                <FaArrowRightLong className='text-2xl group-hover:text-white' />
                </div>
            </div>

            <div className='w-full lg:w-1/3 flex flex-col justify-between'>
                <img className='h-fit object-center object-cover rounded-2xl w-full ' src={img3}/>
                <div className=''>
                    <p className='text-white mt-6'>
                    India's leading electric vehicle charging infrastructure provider, the only company with End to End charging services for private & public sectors as per the Indian government MOP guidelines across 
                    India.
                    </p>
                    <button className='text-white text-lg font-medium bg-secondary mt-6 rounded-lg py-3 px-12'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhyChoose