import React from 'react'

const ContactUsForm = () => {

    return (
        <div className='my-10 px-4 md:px-24 lg:px-36'>
            <h2 className='font-semibold text-xl md:text-2xl text-center mb-8'>To contact us, Kindly fill out the form below. We look forward to hearing from you.</h2>
            <form action="">
                <div className="my-3">
                    <label htmlFor="name" className='block mb-3'>Name</label>
                    <input type="text" id='name' className='h-[45px] w-full rounded-md border border-blue-800 px-4' />
                </div>
                <div className="my-3">
                    <label htmlFor="number" className='block mb-3'>Phone</label>
                    <input type="text" id='number' className='h-[45px] w-full rounded-md border border-blue-800 px-4' />
                </div>
                <div className="my-3">
                    <label htmlFor="email" className='block mb-3'>Email</label>
                    <input type="email" id='email' className='h-[45px] w-full rounded-md border border-blue-800 px-4' />
                </div>
                <div className="my-3">
                    <label htmlFor="section" className='block mb-3'>Are you a:</label>
                    <div className="flex items-center gap-2"><input type="radio" id='section' name="section" value={"Doctor"} /> <p>Doctor</p></div>
                    <div className="flex items-center gap-2"><input type="radio" id='section' name="section" value={"Patient"} /> <p>Patient</p></div>
                </div>
                <div className="my-3">
                    <label htmlFor="" className='block mb-3'>Questions/Concerns</label>
                    <textarea name="" id="" className='h-[200px] w-full rounded-md border border-blue-800 p-4'></textarea>
                </div>
                <button className='border border-blue-800 bg-blue-800 text-white h-[45px] px-4 hover:bg-white hover:text-blue-800 transition duration-500'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactUsForm
