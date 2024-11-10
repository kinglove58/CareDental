import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "/images/logo/care_dental_logo.png";

const NavItem = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-24 lg:px-36 py-4">
        <div className="font-bold">
          <img src={logo} alt="care dental logo" className="w-28 h-auto" />
        </div>
        <div className="relative">
          <ul className="hidden sm:flex md:flex-row items-center gap-5 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Savings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/join"
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Join/Renew
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex sm:hidden">
          {showMenu ? (
            <RiCloseLine
              size={24}
              onClick={handleShowMenu}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu3Line
              size={24}
              onClick={handleShowMenu}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div>
          <ul className="sm:hidden">
            <li className="flex text-center">
              <NavLink
                to="/"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 w-full py-3 border-b ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex text-center">
              <NavLink
                to="/services"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 w-full py-3 border-b ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Our Services
              </NavLink>
            </li>
            <li className="flex text-center">
              <NavLink
                to="/contactus"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 w-full py-3 border-b ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="flex text-center">
              <NavLink
                to="/join"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-500 w-full py-3 border-b ${
                    isActive ? "underline text-blue-800" : ""
                  }`
                }
              >
                Join/Renew
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavItem;
