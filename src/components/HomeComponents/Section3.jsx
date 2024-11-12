import React from "react";
import benefit_3 from "/images/benefit/benefit3.png";

const Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full py-8 px-4 md:px-24 lg:px-36 gap-12 md:gap-3 bg-gradient-to-b from-gray-50 via-blue-100 to-blue-50">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={benefit_3}
          alt="Benefit 1"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-7">
        <h1 className="font-bold text-xl md:text-3xl">
          We're Here to Help You
        </h1>
        <p className="md:text-xl">
          Whether you're focused on preventative care or need more specialized
          dental services, Care Dental Plan offers reliable access to affordable
          dental solutions. Let our friendly customer support team assist you in
          finding the best options for your dental care needs.
        </p>
      </div>
    </div>
  );
};

export default Section3;
