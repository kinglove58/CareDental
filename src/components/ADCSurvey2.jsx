import React, { useState } from "react";
import emailjs from "emailjs-com";

const ADCSurvey2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    overallExperience: "",
    treatmentSatisfaction: "",
    staffSupport: "",
    careSatisfaction: "",
    managerInteraction: "",
    serviceTimeliness: "",
    followUpCall: "",
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_g4sarxm", // Replace with your actual service ID
        "template_ory182p", // Replace with your actual template ID
        formData,
        "5-NXkjBkADbnPGUMP" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Feedback sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send feedback. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Exit Feedback Form</h1>
      <p className="mb-4">
        Please fill out this short customer feedback form so we can ensure top
        quality service to all of our customers.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">
            How would you rate your overall customer experience?
          </label>
          <select
            name="overallExperience"
            value={formData.overallExperience}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very good">Very good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
            <option value="Very poor">Very poor</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            How satisfied were you with your dental treatment?
          </label>
          <select
            name="treatmentSatisfaction"
            value={formData.treatmentSatisfaction}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very good">Very good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
            <option value="Very poor">Very poor</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            How satisfied were you with staff support?
          </label>
          <select
            name="staffSupport"
            value={formData.staffSupport}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very good">Very good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
            <option value="Very poor">Very poor</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            How satisfied were you with the level of care you received from your
            dentist?
          </label>
          <select
            name="careSatisfaction"
            value={formData.careSatisfaction}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very satisfied">Very satisfied</option>
            <option value="Somewhat satisfied">Somewhat satisfied</option>
            <option value="Neutral">Neutral</option>
            <option value="Somewhat dissatisfied">Somewhat dissatisfied</option>
            <option value="Very dissatisfied">Very dissatisfied</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            How satisfied were you with your interaction with our office
            manager?
          </label>
          <select
            name="managerInteraction"
            value={formData.managerInteraction}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very satisfied">Very satisfied</option>
            <option value="Somewhat satisfied">Somewhat satisfied</option>
            <option value="Neutral">Neutral</option>
            <option value="Somewhat dissatisfied">Somewhat dissatisfied</option>
            <option value="Very dissatisfied">Very dissatisfied</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            How satisfied were you with the timeliness of our services?
          </label>
          <select
            name="serviceTimeliness"
            value={formData.serviceTimeliness}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very satisfied">Very satisfied</option>
            <option value="Satisfied">Satisfied</option>
            <option value="Neutral">Neutral</option>
            <option value="Dissatisfied">Dissatisfied</option>
            <option value="Very dissatisfied">Very dissatisfied</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            Would you want a call to follow up on your survey response?
          </label>
          <select
            name="followUpCall"
            value={formData.followUpCall}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            Please provide any additional comments or suggestions
          </label>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ADCSurvey2;
