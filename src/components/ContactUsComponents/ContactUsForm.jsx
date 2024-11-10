import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission (e.g., send the data to an API or log it)
        console.log('Form Data:', formData);
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
