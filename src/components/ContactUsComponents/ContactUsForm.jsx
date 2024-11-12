import React, { useState } from 'react';
import axios from "axios"

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        section: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const modifiedMessage = `
            Section (Are you a): ${formData.section}
            Email: ${formData.email}
            Phone Number: ${formData.number}
            \n
            User's Message: 
            \n
            ${formData.message}
            <h2 style="font-size: 1.5rem">Feedback Survey Submission</h2>
            <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Full Name:</h3>
            <p style='color: gray; font-size: 1.1rem'>${formData.name}</p>
            <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Email:</h3>
            <p style='color: gray; font-size: 1.1rem'>${formData.email}</p>
            <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Phone Number:</h3>
            <p style='color: gray; font-size: 1.1rem'>${formData.number}</p>
            <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Are you a:</h3> 
            <p style='color: gray; font-size: 1.1rem'>${formData.section}</p>
            <h3 style='font-weight: bold; color: blue; font-size: 1.2rem'>Questions/Concerns:</h3> 
            <p style='color: gray; font-size: 1.1rem'>${formData.message}</p>
        `;

        try {
            const dataToSend = {
                name: formData.name,
                email: formData.email,
                message: modifiedMessage // message contains section and number
            };

            await axios.post('http://localhost:5000/send-email', dataToSend);
            alert("Message sent successfully!");

            setFormData({
                name: '',
                number: '',
                email: '',
                section: '',
                message: ''
            });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message.");
        }
    };

    return (
        <div className='my-10 px-4 md:px-24 lg:px-36'>
            <h2 className='font-semibold text-xl md:text-2xl text-center mb-8'>
                To contact us, Kindly fill out the form below. We look forward to hearing from you.
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className='block mb-3 font-semibold'>Name:</label>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='h-[45px] w-full rounded-md border border-blue-800 px-4'
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="number" className='block mb-3 font-semibold'>Phone:</label>
                    <input
                        type="text"
                        id='number'
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className='h-[45px] w-full rounded-md border border-blue-800 px-4'
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="email" className='block mb-3 font-semibold'>Email:</label>
                    <input
                        type="email"
                        id='email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='h-[45px] w-full rounded-md border border-blue-800 px-4'
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="section" className='block mb-3 font-semibold'>Are you a:</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id='doctor'
                            name="section"
                            value="Doctor"
                            checked={formData.section === 'Doctor'}
                            onChange={handleChange}
                        />
                        <label htmlFor="doctor">Doctor</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id='patient'
                            name="section"
                            value="Patient"
                            checked={formData.section === 'Patient'}
                            onChange={handleChange}
                        />
                        <label htmlFor="patient">Patient</label>
                    </div>
                </div>
                <div className="my-3">
                    <label htmlFor="message" className='block mb-3 font-semibold'>Questions/Concerns:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className='h-[200px] w-full rounded-md border border-blue-800 p-4'
                    ></textarea>
                </div>
                <button type="submit" className='border border-blue-800 bg-blue-800 text-white h-[45px] px-4 hover:bg-white hover:text-blue-800 transition duration-500'>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUsForm;
