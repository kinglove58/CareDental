import React from "react";

const disclosureData = [
  {
    title: "Disclaimer",
    content:
      "THIS PLAN IS NOT INSURANCE and is not intended to replace health insurance. The Care Dental Plan does not meet minimum creditable coverage requirements under M.G.L. c.111M and 956 CMR 5.00 and is not a Qualified Health Plan under the Affordable Care Act. This is also not a Medicare prescription drug plan. Discounts may vary based on provider and type of service. The Care Dental Plan does not pay providers directly; members are responsible for all service fees but will receive discounts from participating providers. And this plan is only available in anapolisdentalcenter",
  },
];

const Disclosure = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif">
          Disclosure
        </h2>
        <div className="space-y-8">
          {disclosureData.map((section, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 font-sans">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
