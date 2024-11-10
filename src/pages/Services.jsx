import React from 'react'
import Section1 from '../components/ServicesComponent/Section1'
import Section2 from '../components/ServicesComponent/Section2'

const Services = () => {
  return (
    <div>
        <Section1 />
        <Section2 />
        <div className="px-4 md:px-24 lg:px-36">
            <button className='min-h-[55px] mb-4 py-2 px-8 bg-blue-800 text-white font-semibold rounded-2xl border border-blue-800 hover:bg-white hover:text-blue-800 transition duration-500'>Contact Us to Start Saving</button>
        </div>
    </div>
  ) 
}

export default Services