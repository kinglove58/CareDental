import React from "react";

const privacyData = [
  {
    title: "Terms and Conditions",
    content:
      "By enrolling in the Care Dental Plan, you confirm that you have read and agree to these terms and conditions. You authorize Annapolis Dental Center to charge your payment method for the membership fee, with automatic annual renewals unless you cancel in writing. Membership will renew annually at the then-current rate until canceled per the instructions below.",
  },
  {
    title: "Cancellation Policy",
    content:
      "Membership fees are refundable within thirty (30) days of enrollment or automatic renewal if no services have been used under the Care Dental Plan. A $10 processing fee is non-refundable. If services have been utilized and discounted rates applied, the membership fee is non-refundable for a minimum one-year term. To cancel, please contact our office directly. After the initial 30-day period, memberships remain active for a minimum of one year. Canceling a multi-year membership reverts it to the standard annual cost, and any additional years may be refunded if the membership year has not started. Return membership cards to Annapolis Dental Center, with a written cancellation request.",
  },
  {
    title: "Renewal Conditions",
    content:
      "By joining the Care Dental Plan, you authorize Annapolis Dental Center to charge your payment method for your chosen plan. This charge will continue until you submit a written cancellation.",
  },
  {
    title: "Termination Conditions",
    content:
      "Annapolis Dental Center reserves the right to terminate any membership for reasons including non-payment.",
  },
  {
    title: "Cancellation Conditions",
    content:
      "You may cancel your membership within the first 30 days of enrollment or renewal and receive a full refund, less the processing fee, if no services have been used. If you are dissatisfied during this period, submit a written cancellation request. Annapolis Dental Center will process your cancellation and stop billing within 30 days of receiving a valid cancellation notice. For cancellations, send a letter with your name and membership details to Annapolis Dental Center.",
  },
  {
    title: "Description of Services",
    content:
      "Care Dental Plan provides discounted rates on a variety of dental services at Annapolis Dental Center.",
  },
  {
    title: "Limitations, Exclusions & Exceptions",
    content:
      "This is a discount membership plan, not an insurance policy. Careington, the plan administrator, does not reimburse or cover dental costs. Members are responsible for payments directly to Annapolis Dental Center at the time of service. Discounts apply only to services offered by participating providers and cannot be combined with other discount plans. Services may change without notice, and provider participation is subject to change. Members are responsible for verifying provider participation.",
  },
];

const Privacy = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif">
          Privacy Policy
        </h2>
        <div className="space-y-8">
          {privacyData.map((section, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 font-serif">
                {section.title}
              </h3>
              <p className="text-gray-600 font-sans">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
