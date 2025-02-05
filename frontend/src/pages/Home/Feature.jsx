import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Feature = () => {


  const [feature, setFeature] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/features')
      .then(response => {
        setFeature(response.data);
        console.log(response.data) 
      })
      .catch(error => {
        console.error('Error fetching feature:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 justify-center bg-black text-white py-8 lg:h-[700px] px-2 ">
      <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400">New Generation</p>
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-2">Performance! Hello Open Roads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-8 w-10/12"> {
        feature.map(feature=>(
         
        <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl w-full h-44 md:h-48 lg:h-52">
          <img src={feature.icon}/>
          <p className="mt-4 text-sm md:text-base text-center">{feature.title}</p>
        </div>
        
        ))
      }
      </div>
    </div>
  );
};

export default Feature;
