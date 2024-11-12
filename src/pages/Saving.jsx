import React from "react";
import Section1 from "../components/ServicesComponent/Section1";
import Section2 from "../components/ServicesComponent/Section2";
import { Link } from "react-router-dom";
import Hero from "../components/HomeComponents/Hero";
import gurant from "/images/logo/gurantee.png";
import ScrollAnimationWrapper from "../components/ScrollAnimation";

const Services = () => {
  return (
    <div className="bg-gray-200">
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
        <div className="px-4 md:px-24 lg:px-36 py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            See How Your Savings Grow
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="text-blue-700">
                <tr>
                  <th className="py-2 px-4 border-b">Procedure</th>
                  <th className="py-2 px-4 border-b">Average Cost**</th>
                  <th className="py-2 px-4 border-b">Care Dental</th>
                  <th className="py-2 px-4 border-b">Member Saving</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">Periodic Oral Exam</td>
                  <td className="py-2 px-4 border-b">$69</td>
                  <td className="py-2 px-4 border-b">$35</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$34</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">
                    Comprehensive Oral Exam
                  </td>
                  <td className="py-2 px-4 border-b">$106</td>
                  <td className="py-2 px-4 border-b">$50</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$56</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">
                    X-Ray, Bitewings – Four Films
                  </td>
                  <td className="py-2 px-4 border-b">$79</td>
                  <td className="py-2 px-4 border-b">$41</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$38</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">Cleaning – Adult</td>
                  <td className="py-2 px-4 border-b">$120</td>
                  <td className="py-2 px-4 border-b">$60</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$60</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">Sealant (Per Tooth)</td>
                  <td className="py-2 px-4 border-b">$72</td>
                  <td className="py-2 px-4 border-b">$35</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$37</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">
                    Filling – One Surface Resin (White) Filling, Front
                    (Anterior) Tooth
                  </td>
                  <td className="py-2 px-4 border-b">$198</td>
                  <td className="py-2 px-4 border-b">$100</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$98</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">
                    Root Canal Molar Excluding Final Restoration
                  </td>
                  <td className="py-2 px-4 border-b">$1,185</td>
                  <td className="py-2 px-4 border-b">$850</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$335</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">
                    Complete Upper Denture (Maxillary)
                  </td>
                  <td className="py-2 px-4 border-b">$1,528</td>
                  <td className="py-2 px-4 border-b">$1,003</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$525</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 px-4 border-b">
                    Comprehensive Orthodontic Treatment – Child
                  </td>
                  <td className="py-2 px-4 border-b">$5,989</td>
                  <td className="py-2 px-4 border-b">$3,544</td>
                  <td className="py-2 px-4 border-b bg-blue-300">$2,445</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div className="flex flex-col items-center justify-center pb-8 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-20 text-xl rounded-lg">
            <Link to="/join">Yes I am Ready</Link>
          </button>
          <div>
            <img
              src={gurant}
              alt="guarantee logo"
              className="w-32 h-auto md:w-48"
            />
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Services;
