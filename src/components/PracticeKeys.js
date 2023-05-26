import React from 'react';

const PracticeKeys = ({ practiceKeys, handleKeyPress }) => {
  return (
    <div className="practice-keys">
      {practiceKeys.map((key, index) => (
        <button key={index} onClick={handleKeyPress} className="key">
          {key}
        </button>
      ))}
    </div>
  );
};

export default PracticeKeys;
