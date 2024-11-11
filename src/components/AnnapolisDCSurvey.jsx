import React, { useState } from "react";
import emailjs from "emailjs-com";

const AnnapolisDCSurvey = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    visitFrequency: "",
    bookingEase: "",
    receptionistGreeting: "",
    clinicCleanliness: "",
    waitingAreaComfort: "",
    careSatisfaction: "",
    dentistExplanation: "",
    managerExplanation: "",
    assistantGreeting: "",
    treatmentSatisfaction: "",
    careTips: "",
    recommendLikelihood: "",
    overallSatisfaction: "",
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
      <h1 className="text-2xl font-bold mb-4">Customer Feedback Form</h1>
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
          <label className="block font-semibold">1. What is your gender?</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">2. What is your age?</label>
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Under 18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65 or older">65 or older</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            3. How often do you visit the dentist?
          </label>
          <select
            name="visitFrequency"
            value={formData.visitFrequency}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Every 6 months">Every 6 months</option>
            <option value="Once a year">Once a year</option>
            <option value="Every 2-3 years">Every 2-3 years</option>
            <option value="Only when I have a problem">
              Only when I have a problem
            </option>
            <option value="Other">Other (please specify)</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            4. How easy was it to book your appointment?
          </label>
          <select
            name="bookingEase"
            value={formData.bookingEase}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very easy">Very easy</option>
            <option value="Somewhat easy">Somewhat easy</option>
            <option value="Neutral">Neutral</option>
            <option value="Somewhat difficult">Somewhat difficult</option>
            <option value="Very difficult">Very difficult</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            5. Did the receptionist greet you in a friendly manner when you
            arrived for your appointment?
          </label>
          <select
            name="receptionistGreeting"
            value={formData.receptionistGreeting}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes, very friendly">Yes, very friendly</option>
            <option value="Yes, somewhat friendly">
              Yes, somewhat friendly
            </option>
            <option value="Neutral">Neutral</option>
            <option value="No, somewhat unfriendly">
              No, somewhat unfriendly
            </option>
            <option value="No, very unfriendly">No, very unfriendly</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            6. Was the clinic clean and well-maintained?
          </label>
          <select
            name="clinicCleanliness"
            value={formData.clinicCleanliness}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes, very clean and well-maintained">
              Yes, very clean and well-maintained
            </option>
            <option value="Yes, somewhat clean and well-maintained">
              Yes, somewhat clean and well-maintained
            </option>
            <option value="Neutral">Neutral</option>
            <option value="No, somewhat unclean and poorly maintained">
              No, somewhat unclean and poorly maintained
            </option>
            <option value="No, very unclean and poorly maintained">
              No, very unclean and poorly maintained
            </option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            7. Was the waiting area comfortable and pleasant?
          </label>
          <select
            name="waitingAreaComfort"
            value={formData.waitingAreaComfort}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes, very comfortable and pleasant">
              Yes, very comfortable and pleasant
            </option>
            <option value="Yes, somewhat comfortable and pleasant">
              Yes, somewhat comfortable and pleasant
            </option>
            <option value="Neutral">Neutral</option>
            <option value="No, somewhat uncomfortable and unpleasant">
              No, somewhat uncomfortable and unpleasant
            </option>
            <option value="No, very uncomfortable and unpleasant">
              No, very uncomfortable and unpleasant
            </option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            8. How satisfied were you with the level of care you received from
            your dentist?
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
            9a. Did the dentist explain the procedures to you in a clear and
            understandable manner?
          </label>
          <select
            name="dentistExplanation"
            value={formData.dentistExplanation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes, very clearly and understandably">
              Yes, very clearly and understandably
            </option>
            <option value="Yes, somewhat clearly and understandably">
              Yes, somewhat clearly and understandably
            </option>
            <option value="Neutral">Neutral</option>
            <option value="No, somewhat unclearly and not understandably">
              No, somewhat unclearly and not understandably
            </option>
            <option value="No, very unclearly and not understandably">
              No, very unclearly and not understandably
            </option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            9b. Did the manager or the treatment coordinator explain the
            procedures to you in a clear and understandable manner?
          </label>
          <select
            name="managerExplanation"
            value={formData.managerExplanation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes, very clearly and understandably">
              Yes, very clearly and understandably
            </option>
            <option value="Yes, somewhat clearly and understandably">
              Yes, somewhat clearly and understandably
            </option>
            <option value="Neutral">Neutral</option>
            <option value="No, somewhat unclearly and not understandably">
              No, somewhat unclearly and not understandably
            </option>
            <option value="No, very unclearly and not understandably">
              No, very unclearly and not understandably
            </option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            9c. Did the dental assistant greet you in a friendly manner?
          </label>
          <select
            name="assistantGreeting"
            value={formData.assistantGreeting}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes, very friendly">Yes, very friendly</option>
            <option value="Yes, somewhat friendly">
              Yes, somewhat friendly
            </option>
            <option value="Neutral">Neutral</option>
            <option value="No, somewhat unfriendly">
              No, somewhat unfriendly
            </option>
            <option value="No, very unfriendly">No, very unfriendly</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            10. How satisfied were you with the results of your dental
            treatment?
          </label>
          <select
            name="treatmentSatisfaction"
            value={formData.treatmentSatisfaction}
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
            11. Did the dentist or dental hygienist give you tips on how to
            better care for your teeth and gums?
          </label>
          <select
            name="careTips"
            value={formData.careTips}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes, very informative and helpful">
              Yes, very informative and helpful
            </option>
            <option value="Yes, somewhat informative and helpful">
              Yes, somewhat informative and helpful
            </option>
            <option value="Neutral">Neutral</option>
            <option value="No, somewhat uninformative and unhelpful">
              No, somewhat uninformative and unhelpful
            </option>
            <option value="No, very uninformative and unhelpful">
              No, very uninformative and unhelpful
            </option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            12. How likely are you to recommend our clinic to family or friends?
          </label>
          <select
            name="recommendLikelihood"
            value={formData.recommendLikelihood}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Very likely">Very likely</option>
            <option value="Somewhat likely">Somewhat likely</option>
            <option value="Neutral">Neutral</option>
            <option value="Somewhat unlikely">Somewhat unlikely</option>
            <option value="Very unlikely">Very unlikely</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            13. Overall, how satisfied are you with your experience at our
            clinic?
          </label>
          <select
            name="overallSatisfaction"
            value={formData.overallSatisfaction}
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

export default AnnapolisDCSurvey;
