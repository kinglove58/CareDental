import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo/care_dental_logo_white.png";

const Footer = () => {
  return (
    <div className="min-h-[20vh] px-6 py-12 flex flex-col lg:flex-row justify-between gap-10 items-start md:items-center text-white font-semibold bg-gray-800">
      <img src={logo} alt="Care dental logo" className="w-32 h-auto" />
      <ul className="flex flex-col lg:flex-row items-start md:items-center gap-4">
        <li>
          <Link to="/" className="hover:underline">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/saving" className="hover:underline">
            SAVING
          </Link>
        </li>
        <li>
          <Link to="/join" className="hover:underline">
            JOIN/RENEW
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="hover:underline">
            CONTACT US
          </Link>
        </li>
        <li>
          <Link to="/terms_condition" className="hover:underline">
            TERMS & CONDITIONS
          </Link>
        </li>
        <li>
          <Link to="/privacy_policy" className="hover:underline">
            PRIVACY POLICY
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
