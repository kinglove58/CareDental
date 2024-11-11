import React from "react";
import ContactUsHero from "../components/ContactUsComponents/ContactUsHero";
import ContactUsForm from "../components/ContactUsComponents/ContactUsForm";
import ScrollAnimationWrapper from "../components/ScrollAnimation";

const ContactUs = () => {
  return (
    <div>
      <ScrollAnimationWrapper>
        <ContactUsHero />
        <ContactUsForm />
      </ScrollAnimationWrapper>
    </div>
  );
};

export default ContactUs;
