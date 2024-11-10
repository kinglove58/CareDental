import React from "react";
import saving_1 from "/images/saving/saving1.png";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full my-8 px-4 md:px-24 lg:px-36 gap-12 md:gap-3">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={saving_1}
          alt="Benefit 1"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-7">
        <h1 className="font-bold text-xl md:text-3xl">
          Keep More of Your Money
        </h1>
        <p className="md:text-xl">
          Avoid costly surprises with the Care Dental Plan, designed for
          individuals, couples, and families seeking transparent, predictable
          dental costs. With the plan at Annapolis Dental Center, enjoy savings
          of 15% to 50% on services from routine checkups to crowns, root
          canals, and orthodontics. Straightforward savings you can rely on.
        </p>
        <p className="md:text-xl">
          With the Care Dental Plan, there are no hidden fees or lengthy
          paperwork. Just schedule an appointment with Annapolis Dental Center,
          bring your Care Dental Plan ID card, and pay the discounted rate.
        </p>
      </div>
    </div>
  );
};

export default Section1;
