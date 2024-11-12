import React from "react";
import benefit_2 from "/images/benefit/benefit2.png";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full py-8 px-4 md:px-24 lg:px-36 gap-12 md:gap-3 bg-gradient-to-b from-gray-50 via-gray-200 to-gray-50">
      <div className="md:w-1/2 flex justify-center md:order-2">
        <img
          src={benefit_2}
          alt="Benefit 1"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-7 md:order-1">
        <h1 className="font-bold text-xl md:text-3xl">
          Here Are What You Will Enjoy!
        </h1>
        <p className="md:text-xl">
          Our plan is built to suit you and your family’s needs, providing
          affordable dental care that makes financial sense. With the Care
          Dental Plan, you’ll enjoy:
        </p>
        {/* <p className='md:text-xl'>As a Care Dental Plan member, you’ll benefit from a network of participating providers offering discounted services. You can save anywhere from 15% to 50% on a variety of procedures, from routine checkups to advanced treatments like root canals, crowns, and orthodontics.</p> */}
        <ul className="list-disc pl-6 md:text-xl">
          <li>Exceptional customer service</li>
          <li>Quick and easy plan activation</li>
          <li>A budget-friendly membership fee</li>
          <li>No age or health restrictions</li>
          <li>No waiting periods or paperwork to file</li>
          <li>Unlimited usage, excluding ongoing treatments</li>
        </ul>
      </div>
    </div>
  );
};

export default Section2;
