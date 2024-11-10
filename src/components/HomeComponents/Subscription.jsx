import React from 'react'
import individual from "/images/saving/individual.png"
import couple from "/images/saving/couple.png"
import family from "/images/saving/family.png"
import { Link } from 'react-router-dom'

const Subscription = () => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className="">
                <div className="rounded-t-md p-3 bg-[#80c146] flex flex-col items-center">
                    <img src={individual} alt="individual plan" />
                    <Link to={"https://collectcheckout.com/r/0p8m1rw5qmz0h0fzjze5u3rc31jpgq"}><button className='min-h-[45px] mb-4 py-2 px-4 bg-blue-800 text-white font-semibold rounded-2xl border border-blue-800 hover:bg-white hover:text-blue-800 transition duration-500'>Join now! Single Plan</button></Link>
                </div>
                <div className="bg-gray-300 shadow-lg rounded-b-md py-6 px-2">
                    <h3 className='text-4xl text-[#80c146] font-semibold text-center'>$179 <span className='text-lg'>/YEAR</span></h3>
                    <p className='text-center mt-2 font-semibold text-gray-700'>Plus non-refundable <span className='text-[#80c146]'>$10</span> processing fee</p>
                </div>
            </div>
            <div className="">
                <div className="rounded-t-md p-3 bg-[#e22368] flex flex-col items-center">
                    <img src={couple} alt="individual plan" />
                    <Link to={"https://collectcheckout.com/r/eiml6me2cv31y9cmcwt0tbi2wyqusv"}><button className='min-h-[45px] mb-4 py-2 px-4 bg-blue-800 text-white font-semibold rounded-2xl border border-blue-800 hover:bg-white hover:text-blue-800 transition duration-500'>Join now! Couple Plan</button></Link>
                </div>
                <div className="bg-gray-300 shadow-lg rounded-b-md py-6 px-2">
                    <h3 className='text-4xl text-[#e22368] font-semibold text-center'>$279 <span className='text-lg'>/YEAR</span></h3>
                    <p className='text-center mt-2 font-semibold text-gray-700'>Plus non-refundable <span className='text-[#e22368]'>$10</span> processing fee</p>
                </div>
            </div>
            <div className="">
                <div className="rounded-t-md p-3 bg-[#0b77bd] flex flex-col items-center">
                    <img src={family} alt="individual plan" />
                    <Link to={"https://collectcheckout.com/r/xxjx9nnmbyzz0i6uf372u6i282c0h2"}><button className='min-h-[45px] mb-4 py-2 px-4 bg-blue-800 text-white font-semibold rounded-2xl border border-blue-800 hover:bg-white hover:text-blue-800 transition duration-500'>Join now! Family Plan</button></Link>
                </div>
                <div className="bg-gray-300 shadow-lg rounded-b-md py-6 px-2">
                    <h3 className='text-4xl text-[#0b77bd] font-semibold text-center'>$349 <span className='text-lg'>/YEAR</span></h3>
                    <p className='text-center mt-2 font-semibold text-gray-700'>Plus non-refundable <span className='text-[#0b77bd]'>$10</span> processing fee</p>
                </div>
            </div>
        </div>
    )
}

export default Subscription
