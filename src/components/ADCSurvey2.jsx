import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const ADCSurvey2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    overallExperience: "",
    treatmentSatisfaction: "",
    staffSupport: "",
    careSatisfaction: "",
    managerInteraction: "",
    serviceTimelines: "",
    followUpCall: "",
    additionalComments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const modifiedMessage = `
      <h2 style="font-size: 1.5rem">Exit Survey Submission</h2>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Full Name:</h3>
      <p style='color: gray; font-size: 1.1rem'>${formData.fullName}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Email:</h3>
      <p style='color: gray; font-size: 1.1rem'>${formData.email}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>How would you rate your overall customer experience?</h3>
      <p style='color: gray; font-size: 1.1rem'>${formData.overallExperience}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>How satisfied were you with your dental treatment?</h3> 
      <p style='color: gray; font-size: 1.1rem'>${formData.treatmentSatisfaction}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>How satisfied were you with staff support?</h3> 
      <p style='color: gray; font-size: 1.1rem'>${formData.staffSupport}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>How satisfied were you with the level of care you received from your dentist?</h3> 
      <p style='color: gray; font-size: 1.1rem'>${formData.careSatisfaction}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>How satisfied were you with your interaction with our office manager?</h3> 
      <p style='color: gray; font-size: 1.1rem'>${formData.managerInteraction}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>How satisfied were you with the timeliness of our services?</h3>?
      <p style='color: gray; font-size: 1.1rem'>${formData.serviceTimelines}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Would you want a call to follow up on your survey response?</h3> 
      <p style='color: gray; font-size: 1.1rem'>${formData.followUpCall}</p>
      <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Please provide any additional comments or suggestions</h3> 
      <p style='color: gray; font-size: 1.1rem'>${formData.additionalComments}</p>
    `;

    try {
      const dataToSend = {
        name: formData.fullName,
        email: formData.email,
        message: modifiedMessage,
      };

      await axios.post("http://localhost:5000/exit-survey", dataToSend);
      alert("Message sent successfully!");

      setFormData({
        fullName: "",
        email: "",
        overallExperience: "",
        treatmentSatisfaction: "",
        staffSupport: "",
        careSatisfaction: "",
        managerInteraction: "",
        serviceTimelines: "",
        followUpCall: "",
        additionalComments: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
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
            name="serviceTimelines"
            value={formData.serviceTimelines}
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
          className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          {loading ? <FaSpinner className="animate-spin mr-2" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ADCSurvey2;
