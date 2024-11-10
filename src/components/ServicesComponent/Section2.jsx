import React from "react";
import saving_2 from "/images/saving/saving2.png";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full md:py-12 lg:py-16 py-8 px-4 md:px-24 lg:px-36 gap-12 md:gap-3 bg-gradient-to-b from-gray-300 to-gray-100">
      <div className="md:w-1/2 flex justify-center md:order-2">
        <img
          src={saving_2}
          alt="Benefit 1"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain"
        />
      </div>
      <div className="md:w-1/2 space-y-7 md:order-1">
        <h1 className="font-bold text-xl md:text-3xl">
          A Plan That Fits Your Needs
        </h1>
        <p className="md:text-xl">
          With the Care Dental Plan, you can choose from various membership
          options tailored to meet your unique financial needs. Whether you’re
          looking for an individual plan, a couple’s plan, or a family plan, we
          have options that make sense. And the longer your membership, the more
          you save.
        </p>
        <p className="md:text-xl">
          For group dental plans or companies of five or more, we also offer a
          special rate, making it easier than ever to get affordable,
          high-quality dental care. No matter the plan you select, the Care
          Dental Plan takes the stress out of budgeting for dental care, giving
          you peace of mind at an affordable price.
        </p>
      </div>
    </div>
  );
};

export default Section2;
