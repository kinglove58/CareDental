import { useState } from 'react';

function FloatingLabelInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative mt-6">
      <label
        className={`absolute left-3 top-1 text-gray-500 transition-all duration-200 
          ${isFocused || inputValue ? 'text-xs -top-2 left-3 bg-white px-1' : 'top-3'}`}
      >
        Enter Your Email Address
      </label>
      <input
        type="email"
        className="border border-gray-300 rounded-lg py-3 px-3 w-full text-gray-700 outline-none focus:border-blue-500"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
}

export default FloatingLabelInput;
