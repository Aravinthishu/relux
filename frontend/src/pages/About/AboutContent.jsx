import React, { useState, useEffect } from "react";
import About1 from "../../assets/about-1.jpg";
import About2 from "../../assets/about-2.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import ShinyButton from '../../Components/ShinyButton';
import axios from "axios";

const AboutContent = () => {
  
    const [mission, setMission] = useState(""); // State for mission content
    // Fetch data from Django API
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/missionvision") // Replace with your API endpoint
        .then((response) => {
          setMission(response.data); // Assuming API returns { mission: "...", vision: "..." }
        })
        .catch((error) => {
          console.error("Error fetching about content:", error);
        });
    }, []);

  const [activeTab, setActiveTab] = useState("vision"); // Default is 'vision'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className=" w-full mt-32 relative px-4 lg:px-0">
        <div className="absolute w-[600px] h-[500px] bg-green-500 rounded-full filter blur-3xl opacity-30 -top-32 -left-64"></div>
        <div className="lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 relative">
            <div
              className="w-5/6 lg:w-3/4  h-[350px] md:h-[550px] rounded-2xl bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${About1})` }}
            ></div>

            <div
              className="w-[180px] 2xl:w-[300px] h-[180px] 2xl:h-[300px] rounded-2xl bg-center bg-cover bg-no-repeat absolute -bottom-14 lg:-bottom-20 right-0 lg:right-14"
              style={{ backgroundImage: `url(${About2})` }}
            ></div>
            <div className="absolute py-6 px-10 rounded-2xl bg-primary right-0 lg:right-28 -top-14 ">
              <h6 className="text-4xl 2xl:text-8xl font-medium text-center text-white">
                12+
              </h6>
              <h6 className="text-base font-normal text-center text-white">
                years experience
              </h6>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <h2 className=" text-secondary text-lg mb-6">About Us</h2>
            <h1 className=" font-title font-bold text-4xl xl:text-6xl text-white">
              Solutions For All EV Charging Programs!
            </h1>
            <p className="text-gray-200 text-base mt-5">
              We’ve been helping cities, utilities, automakers, EVSE suppliers
              and commercial businesses take advantage of clean energy benefits
              that smart charging infrastructure affords.
            </p>

            {/* Tab Buttons */}
            <div className="flex space-x-8 mt-10">
              <button
                onClick={() => handleTabClick("vision")}
                className={`text-xl font-bold ${
                  activeTab === "vision"
                    ? "text-secondary underline"
                    : "text-gray-400"
                }`}
              >
                Vision
              </button>
              <button
                onClick={() => handleTabClick("mission")}
                className={`text-xl font-bold ${
                  activeTab === "mission"
                    ? "text-secondary underline"
                    : "text-gray-400"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => handleTabClick("values")}
                className={`text-xl font-bold ${
                  activeTab === "values"
                    ? "text-secondary underline"
                    : "text-gray-400"
                }`}
              >
                Our Values
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {activeTab === "vision" && (
                <div>
                  <p className="text-gray-200 text-lg">
                    {mission.vission}
                  </p>
                </div>
              )}

              {activeTab === "mission" && (
                <div>
                  <p className="text-gray-200 text-lg">
                    {mission.mission}
                  </p>
                </div>
              )}

              {activeTab === "values" && (
                <div className="text-gray-200 text-lg" dangerouslySetInnerHTML={{__html:mission.values}}/>
              )}
            </div>
            <div className="flex gap-4 mt-10">
            <ShinyButton buttonText="Download Now"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
