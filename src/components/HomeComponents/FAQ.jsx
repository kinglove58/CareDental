// import React, { useState } from "react";
// import data from "./data";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import "./faq.css";
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import {FaAngleDown} from "react-icons/fa"

// const FAQ = () => {
//     const [clicked, setClicked] = useState(null);
//     const [allowMultipleSelection, setallowMultipleSelection] = useState(false);
//     const [multiple, setMultiple] = useState([]);

//     const handleSingleClick = (dataItemId) => {
//         // dataItemId === clicked ? setClicked(null):setClicked(dataItemId)
//         // or
//         setClicked(dataItemId === clicked ? null : dataItemId);
//     };

//     const allowMultiClick = () => {
//         setallowMultipleSelection(!allowMultipleSelection);
//         // console.log(allowMultipleSelection);
//     };

//     const handleMultipleSelection = (dataItemId) => {
//         let multipleValues = [...multiple];

//         const findIndexOfCurrentId = multipleValues.indexOf(dataItemId);
        
//         if (findIndexOfCurrentId === -1) {
//             multipleValues.push(dataItemId);
//         } else {
//             multipleValues.splice(findIndexOfCurrentId, 1);
//             // Look for faster alternatives to remove the id from the list using a much more convenient approach than the one above.
//         }

//         setMultiple(multipleValues);
//     };

//     console.log(clicked, multiple);

//     return (
//         <div className="px-4 md:px-24 lg:px-36">
//             <div className="">
//                 <h2 className="font-bold text-2xl mb-4">Frequently Asked Questions</h2>
//                 <div className="button-container">
//                     <button onClick={allowMultiClick} className="allow-multi">
//                         {allowMultipleSelection ? (
//                             <p>Disable Multi Click</p>
//                         ) : (
//                             <p>Allow Multi Click</p>
//                         )}
//                     </button>
//                 </div>
//                 {data.map((dataItem) => (
//                     <div className="item">
//                         <div
//                             onClick={
//                                 allowMultipleSelection
//                                 ? () => handleMultipleSelection(dataItem.id)
//                                 : () => handleSingleClick(dataItem.id)
//                             }
//                             className="title"
//                         >
//                             <h2 className="question">{dataItem.question}</h2>
//                             <span>
//                                 {/* <FontAwesomeIcon icon="fa-solid fa-caret-down" /> */}
//                                 <FaAngleDown size={24} className="transition hover:rotate-180 duration-500 cursor-pointer" />
//                             </span>
//                         </div>
//                         {
//                             clicked === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
//                                 <div className="answer">{dataItem.answer}</div>
//                             ) : null
//                         }
//                     </div>
//                 ))}
//             </div>

//             <p>If you have any further questions or need assistance, please contact our dedicated customer service team. We’re here to make dental care accessible and affordable, every day!</p>
//         </div>
//     );
// };

// export default FAQ


import React, { useState } from "react";
import data from "./data";
import { FaAngleDown } from "react-icons/fa";

const FAQ = () => {
    const [clicked, setClicked] = useState(null);
    const [allowMultipleSelection, setallowMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleClick = (dataItemId) => {
        setClicked(dataItemId === clicked ? null : dataItemId);
    };

    const allowMultiClick = () => {
        setallowMultipleSelection(!allowMultipleSelection);
    };

    const handleMultipleSelection = (dataItemId) => {
        let multipleValues = [...multiple];
        const findIndexOfCurrentId = multipleValues.indexOf(dataItemId);

        if (findIndexOfCurrentId === -1) {
            multipleValues.push(dataItemId);
        } else {
            multipleValues = multipleValues.filter(id => id !== dataItemId);
        }

        setMultiple(multipleValues);
    };

    return (
        <div className="px-6 md:px-24 lg:px-36 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-bold text-3xl mb-8 text-center text-gray-800">
                    Frequently Asked Questions
                </h2>

                <div className="flex justify-center mb-6">
                    <button
                        onClick={allowMultiClick}
                        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        {allowMultipleSelection ? "Disable Multi Select" : "Allow Multi Select"}
                    </button>
                </div>

                {data.map((dataItem) => (
                    <div key={dataItem.id} className="mb-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                        <div
                            onClick={
                                allowMultipleSelection
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleClick(dataItem.id)
                            }
                            className="flex justify-between items-center px-6 py-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg"
                        >
                            <h2 className="text-lg font-medium text-gray-800">
                                {dataItem.question}
                            </h2>
                            <FaAngleDown
                                size={24}
                                className={`transition-transform duration-300 ${
                                    (clicked === dataItem.id || multiple.includes(dataItem.id)) ? 'rotate-180' : ''
                                } text-blue-500`}
                            />
                        </div>

                        {(clicked === dataItem.id || multiple.includes(dataItem.id)) && (
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
