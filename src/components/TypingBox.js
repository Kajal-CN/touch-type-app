import React, { useState } from 'react';

const TypingBox = ({ handleKeyPress }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    // Call the handleKeyPress function when a key is pressed
    handleKeyPress(event.key);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="typing-box"

    />
  );
};

export default TypingBox;
