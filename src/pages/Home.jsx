import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Section1 from "../components/HomeComponents/Section1";
import Section2 from "../components/HomeComponents/Section2";
import Section3 from "../components/HomeComponents/Section3";
import Subscription from "../components/HomeComponents/Subscription";
import FAQ from "../components/HomeComponents/FAQ";
import Disclosure from "../components/HomeComponents/Disclosure";
import ScrollAnimationWrapper from "../components/ScrollAnimation";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 via-blue-50 to-blue-50">
      <ScrollAnimationWrapper>
        <Hero />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <Section1 />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Section2 />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Section3 />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div className="px-4 md:px-24 lg:px-36 my-20 text-center">
          <h2 className="font-bold text-xl md:text-2xl mb-8">
            Pick Your Suitable Category and start{" "}
            <span className="text-blue-800">SAVING</span>
          </h2>
          <Subscription />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Disclosure />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <FAQ />
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Home;
