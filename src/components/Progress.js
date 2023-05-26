import React from 'react';

const Progress = ({ accuracy, speed }) => {
  return (
    <div className="progress">
      <div className="progress-item">
        <span className="progress-label">Accuracy:</span>
        <span className="progress-value">{accuracy}%</span>
      </div>
      <div className="progress-item">
        <span className="progress-label">Speed:</span>
        <span className="progress-value">{speed} WPM</span>
      </div>
    </div>
  );
};

export default Progress;
