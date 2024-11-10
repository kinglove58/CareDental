import React from 'react'
import Subscription from '../components/HomeComponents/Subscription'

const Join = () => {
  return (
    <div>
        <div className="px-4 md:px-24 lg:px-36 my-20 text-center">
            <h2 className='font-bold text-xl md:text-2xl mb-8'>Pick Your Suitable Category and start <span className='text-blue-800'>SAVING</span></h2>
            <Subscription />
        </div>
    </div>
  )
}

export default Join