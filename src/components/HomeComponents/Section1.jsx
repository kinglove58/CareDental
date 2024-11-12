import React from "react";
import benefit_1 from "/images/benefit/benefit1.png";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full py-8 px-4 md:px-24 lg:px-36 gap-12 md:gap-3 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-50 pb-4">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={benefit_1}
          alt="Benefit 1"
          className=" md:w-[400px] md:h-[400px] object-contain"
        />
      </div>
      <div className="md:w-1/2 space-y-7">
        <h1 className="font-bold text-xl md:text-3xl">
          What is Care Dental Plan?
        </h1>
        <p className="md:text-xl">
          The Care Dental Plan is a comprehensive discount program designed to
          help you save on dental services at Annapolis Dental Center.
        </p>
        <p className="md:text-xl">
          As a Care Dental Plan member, you’ll benefit from a network of
          participating providers offering discounted services. You can save
          anywhere from 15% to 50% on a variety of procedures, from routine
          checkups to advanced treatments like root canals, crowns, and
          orthodontics.
        </p>
      </div>
    </div>
  );
};

export default Section1;
