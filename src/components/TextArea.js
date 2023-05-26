import React from 'react';

const TextArea = ({ expectedText, currentText }) => {
  return (
    <div className="text-area">
      <div className="text-display">
        <span className="expected-text">{expectedText}</span>
      </div>
      <div className="text-display">
        <span className="current-text">{currentText}</span>
      </div>
    </div>
  );
};

export default TextArea;

