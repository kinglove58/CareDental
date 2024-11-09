import React, { useState } from "react";

const faqData = [
  {
    question: "Why should I choose the Care Dental Plan?",
    answer:
      "The Care Dental Plan offers discounts on both routine and specialized dental services, making quality dental care more affordable for individuals, couples, and families.",
  },
  {
    question: "Can the plan be used for specialty treatments?",
    answer:
      "Absolutely! Our plan provides benefits for a wide range of dental services. Members can access specialists within our network while also keeping their regular dentists for continuity of care.",
  },
  {
    question: "What are the eligibility requirements?",
    answer:
      "The Care Dental Plan is available to everyone, regardless of age. We offer membership options for individuals, couples, families, and groups.",
  },
  {
    question: "How soon can I visit a dentist after signing up?",
    answer:
      "You can start using your benefits as soon as you receive your ID card and welcome package, usually within 5 to 10 days after purchasing the plan.",
  },
  {
    question: "How long does the membership last?",
    answer:
      "Our membership is annual, beginning the day you receive your membership card. Renew each year to continue enjoying discounted dental care.",
  },
];

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <h3
                className="font-semibold cursor-pointer font-serif"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </h3>
              {activeQuestion === index && (
                <p className="mt-2 text-gray-600 font-sans">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
