import React, { useState } from "react";
import data from "./data";
import { FaAngleDown } from "react-icons/fa";

const FAQ = () => {
    const [clicked, setClicked] = useState(null);
    const [multiple, setMultiple] = useState([]);

    const handleSingleClick = (dataItemId) => {
        setClicked(dataItemId === clicked ? null : dataItemId);
    };

    return (
        <div className="px-6 md:px-24 lg:px-36 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-bold text-3xl mb-8 text-center text-gray-800">
                    Frequently Asked Questions
                </h2>

                {data.map((dataItem) => (
                    <div key={dataItem.id} className="mb-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                        <div
                            onClick={() => handleSingleClick(dataItem.id)}
                            className="flex justify-between items-center px-6 py-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg"
                        >
                            <h2 className="text-lg font-medium text-gray-800">
                                {dataItem.question}
                            </h2>
                            <FaAngleDown
                                size={24}
                                className={`transition-transform duration-300 ${
                                    (clicked === dataItem.id) ? 'rotate-180' : ''
                                } text-blue-500`}
                            />
                        </div>

                        {(clicked === dataItem.id) && (
                            <div className="px-6 py-4 text-gray-700 transition-all duration-500 ease-in-out">
                                {dataItem.answer}
                            </div>
                        )}
                    </div>
                ))}
                
                <p className="mt-8 text-center text-gray-600">
                    If you have any further questions or need assistance, please contact our dedicated customer service team. We’re here to make dental care accessible and affordable, every day!
                </p>
            </div>
        </div>
    );
};

export default FAQ;
