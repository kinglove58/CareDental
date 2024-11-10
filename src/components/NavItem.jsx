import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine  } from "react-icons/ri";
import logo from "/images/logo/care_dental_logo.png"

const NavItem = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <>
        <div className='flex justify-between items-center px-4 md:px-24 lg:px-36 py-4'>
            <div className="font-bold">
                <img src={logo} alt="care dental logo" className='w-28 h-auto' />
            </div>
            <div className="relative">
                <ul className={`hidden sm:flex md:flex-row items-center gap-5 font-semibold`}>
                    <li><Link to={"/"} className='hover:text-blue-800 transition duration-500'>Home</Link></li>
                    <li><Link to={"/services"} className='hover:text-blue-800 transition duration-500'>Our Services</Link></li>
                    <li><Link to={"/contactus"} className='hover:text-blue-800 transition duration-500'>Contact Us</Link></li>
                    <li><Link to={"/join"} className='hover:text-blue-800 transition duration-500'>Join/Renew</Link></li>
                </ul>
            </div>
            <div className="flex sm:hidden">
                {
                    showMenu ? 
                    <RiCloseLine size={24} onClick={handleShowMenu} className='cursor-pointer' />
                    : <RiMenu3Line size={24} onClick={handleShowMenu} className='cursor-pointer' />
                }
            </div>
        </div>
        {
            showMenu &&
            <div className="">
                <ul className="">
                    <li className='flex text-center'><Link className='hover:text-blue-800 transition duration-500 w-full py-3 border-b'>Home</Link></li>
                    <li className='flex text-center'><Link className='hover:text-blue-800 transition duration-500 w-full py-3 border-b'>About Us</Link></li>
                    <li className='flex text-center'><Link className='hover:text-blue-800 transition duration-500 w-full py-3 border-b'>Our Services</Link></li>
                    <li className='flex text-center'><Link className='hover:text-blue-800 transition duration-500 w-full py-3 border-b'>Book Appointment</Link></li>
                </ul>
            </div>
        }
    </>
  )
}

export default NavItem
