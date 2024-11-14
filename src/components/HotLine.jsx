import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const HotLine = () => {
  const [showHotLine, setShowHotLine] = useState(false);

  const toggleHotLine = () => setShowHotLine(!showHotLine);

  return (
    <>
      <div
        className={`${
          showHotLine ? "flex flex-col gap-5 py-5" : "hidden"
        } sm:flex md:flex-row items-center justify-end gap-2 px-4 md:px-24 lg:px-36`}
      >
        <div className={`${showHotLine && "flex-col"} flex items-center gap-3`}>
          <a href="/">
            <p className="text-[20px] hover:text-blue-800 transition duration-500">
              <span className="font-semibold">Call us:</span> (410) 571-5014
            </p>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center py-2 sm:hidden">
        {showHotLine ? (
          <FaAngleUp
            size={20}
            onClick={toggleHotLine}
            className="font-light cursor-pointer"
          />
        ) : (
          <FaAngleDown
            size={20}
            onClick={toggleHotLine}
            className="font-light cursor-pointer"
          />
        )}
      </div>
    </>
  );
};

export default HotLine;
