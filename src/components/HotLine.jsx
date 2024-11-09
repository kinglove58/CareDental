import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const HotLine = () => {
  const [showHotLine, setShowHotLine] = useState(false);

  const toggleHotLine = () => setShowHotLine(!showHotLine);

  const iconStyles = "h-6 w-6 border rounded-full border-blue-800 text-blue-800 flex items-center justify-center cursor-pointer";

  return (
    <>
        <div className={`${showHotLine ? 'flex flex-col gap-5 py-5' : 'hidden'} sm:flex md:flex-row items-center justify-between gap-2 py-3 px-4 md:px-24 lg:px-36`}>
        {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showHotLine ? 1 : 0, y: showHotLine ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className={`${showHotLine ? 'flex flex-col gap-5 py-5' : 'hidden'} sm:flex md:flex-row items-center justify-between gap-2 py-3 px-4 md:px-24 lg:px-36`}
        > */}
            <div className={`${showHotLine && 'flex-col'} flex items-center gap-3`}>
                <a href='/'><p className="text-[12px] hover:text-blue-800 transition duration-500"><span className="font-semibold">Hotline:</span> +234 809 330 0390</p></a>
                <a href='/'><p className="text-[12px] hover:text-blue-800 transition duration-500"><span className="font-semibold">Clinic Locations:</span> US | UK</p></a>
            </div>
            <div className="flex items-center gap-2">
                <div className={iconStyles}><FaLinkedin size={12} /></div>
                <div className={iconStyles}><FaInstagram size={12} /></div>
                <div className={iconStyles}><FaFacebook size={12} /></div>
                <div className={iconStyles}><FaTwitter size={12} /></div>
            </div>
        {/* </motion.div> */}
        </div>

        <div className="flex items-center justify-center py-2 sm:hidden">
            {showHotLine ? (
                <FaAngleUp size={20} onClick={toggleHotLine} className='font-light cursor-pointer' />
                ) : (
                <FaAngleDown size={20} onClick={toggleHotLine} className='font-light cursor-pointer' />
            )}
        </div>
    </>
  );
};

export default HotLine;
