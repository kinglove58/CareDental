import React, { lazy, Suspense } from "react";
import Hero from "../components/HomeComponents/Hero";

const Section1 = lazy(() => import("../components/HomeComponents/Section1"));
const Section2 = lazy(() => import("../components/HomeComponents/Section2"));
const Section3 = lazy(() => import("../components/HomeComponents/Section3"));
const Subscription = lazy(() =>
  import("../components/HomeComponents/Subscription")
);
const FAQ = lazy(() => import("../components/HomeComponents/FAQ"));
const Disclosure = lazy(() =>
  import("../components/HomeComponents/Disclosure")
);

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 via-blue-50 to-blue-50">
      <Hero />

      <Suspense fallback={<div>Loading...</div>}>
        <Section1 />
        <Section2 />
        <Section3 />
        <div className="px-4 md:px-24 lg:px-36 my-20 text-center">
          <h2 className="font-bold text-xl md:text-2xl mb-8">
            Pick Your Suitable Category and start{" "}
            <span className="text-blue-800">SAVING</span>
          </h2>
          <Subscription />
        </div>
        <Disclosure />
        <FAQ />
      </Suspense>
    </div>
  );
};

export default Home;
