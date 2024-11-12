import React from "react";
import individual from "/images/saving/individual.png";
import couple from "/images/saving/couple.png";
import family from "/images/saving/family.png";

const Subscription = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="hover:scale-105 transition-transform duration-300 shadow-sm">
        <div className="rounded-t-md p-3 bg-[#008080] flex flex-col items-center">
          <img src={individual} alt="individual plan" />
          <a href="https://collectcheckout.com/r/0p8m1rw5qmz0h0fzjze5u3rc31jpgq">
            <button className="min-h-[45px] mb-4 py-2 px-4 bg-blue-800 text-white font-semibold rounded-2xl border border-blue-800 hover:bg-white hover:text-blue-800 transition duration-500">
              Join now! Single Plan
            </button>
          </a>
        </div>
        <div className="bg-gray-300 shadow-lg rounded-b-md py-6 px-2">
          <h3 className="text-4xl text-[#008080] font-semibold text-center">
            $179 <span className="text-lg">/YEAR</span>
          </h3>
          <p className="text-center mt-2 font-semibold text-gray-700">
            Plus non-refundable <span className="text-[#008080]">$10</span>{" "}
            processing fee
          </p>
        </div>
      </div>
      <div className="hover:scale-105 transition-transform duration-300 shadow-sm">
        <div className="rounded-t-md p-3 bg-[#FF6F61] flex flex-col items-center">
          <img src={couple} alt="couple plan" />
          <a href="https://collectcheckout.com/r/eiml6me2cv31y9cmcwt0tbi2wyqusv">
            <button className="min-h-[45px] mb-4 py-2 px-4 bg-blue-800 text-white font-semibold rounded-2xl border border-blue-800 hover:bg-white hover:text-blue-800 transition duration-500">
              Join now! Couple Plan
            </button>
          </a>
        </div>
        <div className="bg-gray-300 shadow-lg rounded-b-md py-6 px-2">
          <h3 className="text-4xl text-[#FF6F61] font-semibold text-center">
            $279 <span className="text-lg">/YEAR</span>
          </h3>
          <p className="text-center mt-2 font-semibold text-gray-700">
            Plus non-refundable <span className="text-[#FF6F61]">$10</span>{" "}
            processing fee
          </p>
        </div>
      </div>
      <div className="hover:scale-105 transition-transform duration-300 shadow-sm">
        <div className="rounded-t-md p-3 bg-[#002F6C] flex flex-col items-center">
          <img src={family} alt="family plan" />
          <a href="https://collectcheckout.com/r/xxjx9nnmbyzz0i6uf372u6i282c0h2">
            <button className="min-h-[45px] mb-4 py-2 px-4 bg-blue-800 text-white font-semibold rounded-2xl border border-blue-800 hover:bg-white hover:text-blue-800 transition duration-500">
              Join now! Family Plan
            </button>
          </a>
        </div>
        <div className="bg-gray-300 shadow-lg rounded-b-md py-6 px-2">
          <h3 className="text-4xl text-[#002F6C] font-semibold text-center">
            $349 <span className="text-lg">/YEAR</span>
          </h3>
          <p className="text-center mt-2 font-semibold text-gray-700">
            Plus non-refundable <span className="text-[#002F6C]">$10</span>{" "}
            processing fee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
