import React from "react";
import contact_us from "/images/contact_us/contact.webp";

const ContactUsHero = () => {
  return (
    <div className="flex items-center justify-center relative">
      <img src={contact_us} alt="" className="w-full h-auto object-cover" />
      <p className="absolute md:top-1/2 left-12 md:left-32 font-semibold text-2xl text-white md:text-4xl">
        Contact Us
      </p>
    </div>
  );
};

export default ContactUsHero;
