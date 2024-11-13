import React from "react";
import Subscription from "../components/HomeComponents/Subscription";
import Hero from "../components/HomeComponents/Hero";
import ScrollAnimationWrapper from "../components/ScrollAnimation";
import gurant from "/images/logo/gurantee.webp";

const Join = () => {
  return (
    <div>
      <ScrollAnimationWrapper>
        <Hero />
        <div className="px-4 md:px-24 lg:px-36 my-20 text-center">
          <h2 className="font-bold text-xl md:text-2xl mb-8">
            Pick Your Suitable Category and start{" "}
            <span className="text-blue-800">SAVING</span>
          </h2>
          <Subscription />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={gurant}
            alt="guarantee logo"
            className="w-32 h-auto md:w-48"
          />
        </div>
      </ScrollAnimationWrapper>{" "}
    </div>
  );
};

export default Join;
