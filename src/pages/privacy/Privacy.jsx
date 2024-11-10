import React from "react";

const privacyData = [
  {
    title: "Privacy Policy for Care Dental Plan",
    content:
      "Annapolis Dental Center is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you engage with the Care Dental Plan.",
  },
  {
    title: "Scope of this Privacy Policy",
    content:
      "This Privacy Policy applies to personal information received from you and stored by Annapolis Dental Center, including details related to your participation in the Care Dental Plan. 'Personal information' refers to details such as your name, address, email, phone number, and other similar data you provide to us. This policy does not extend to the practices of individuals or companies outside of Annapolis Dental Center's ownership or control, nor does it cover entities we do not employ or manage.",
  },
  {
    title: "Information Collection and Use",
    content:
      "Annapolis Dental Center collects personal information when you register for or utilize the Care Dental Plan, or when you visit our site. When you register, we may request information such as your name, address, email, birthdate, gender, zip code, and occupation. Once registered, your identity is known to us. Additionally, we automatically receive and record information from your browser, including your IP address, Care Dental Plan cookie details, and page requests. We use this data to tailor your experience, fulfill your service requests, enhance customer support, communicate with you, conduct research, and perform anonymous reporting for internal use.",
  },
  {
    title: "Information Sharing and Disclosure",
    content:
      "Annapolis Dental Center does not rent, sell, or share your personal information with non-affiliated individuals or companies, except in the following situations: When required to provide the products or services you request and when we have your permission to share information with relevant parties. In response to legal requirements such as subpoenas, court orders, or legal processes, or to establish or defend our legal rights. Additionally, we may share your information to investigate, prevent, or take action against illegal activities, suspected fraud, potential threats to safety, violations of our terms, or as otherwise required by law. In the event of acquisition or merger of Annapolis Dental Center. If Annapolis Dental Center is merged or acquired, we will notify you before any transfer of your personal information and before it is subject to a different privacy policy.",
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
