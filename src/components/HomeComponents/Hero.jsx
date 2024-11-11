import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const hero_data = [
    {
      image: "/images/banners/banner_dental_1.png",
      title: "Care Dental Plan",
      text: "Quality Care Made Affordable, with Savings of Up to 50%",
      action: "Start Saving Now",
    },
    {
      image: "/images/banners/banner_dental_2.png",
      title: "Affordable Family Dental Care",
      text: "Up to 50% Off",
      action: "Join Now",
    },
    {
      image: "/images/banners/banner_dental_3.png",
      title: "Couples Save Big on",
      text: "Quality Dental Care",
      action: "Enjoy Now",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % hero_data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full relative text-white">
        {hero_data.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out ${
              index === activeIndex
                ? "opacity-100 relative"
                : "opacity-0 absolute"
            } w-full`}
            style={
              index === activeIndex
                ? { position: "relative" }
                : { position: "absolute", top: 0, left: 0 }
            }
          >
            <img
              src={item.image}
              alt={item.image.substring(15, 30)}
              className="w-full h-auto"
            />
            <div className="absolute top-1/2 left-2 sm:left-20 transform -translate-y-1/2 text-white lg:max-w-md md:max-w-sm z-10">
              <p className="text-sm sm:text-xl md:text-2xl">{item.title}</p>
              <h2 className="text-md sm:text-2xl max-w-[14rem] md:max-w-md md:text-4xl font-semibold sm:mb-2 md:mb-4">
                {item.text}
              </h2>
              <button
                onClick={handlePopup}
                className="mt-2 px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 rounded hover:bg-blue-700 transition duration-500 text-sm"
              >
                {item.action}
              </button>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-blue-800 bg-transparent/50">
          <div className="w-[80%] h-[80%] bg-blue-900 flex flex-col md:flex-row relative">
            <RiCloseLine
              onClick={handlePopup}
              className="absolute text-white right-4 top-4 cursor-pointer"
              size={30}
            />
            <div className="hidden md:flex md:w-1/2">
              <img
                src={"/images/dental_care.jpg"}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center py-20 text-white px-5 text-center">
              <img
                src={"/images/logo/care_dental_logo.png"}
                alt="care dental logo"
                className="w-[130px] md:w-[200px] h-auto"
              />
              <h2 className="my-6 text-2xl">Ready for Affordable Dental?</h2>
              <p className="font-semibold text-blue-800 border p-3 bg-white rounded-md">
                Start saving up to 50% on your dental checkup
              </p>
              <p className="mt-5">
                This is only available at Annapolis Dental Center
              </p>
              <button className="mt-10 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition duration-500 text-sm">
                Claim Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
