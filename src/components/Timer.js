import React, { useState, useEffect } from 'react';

const Timer = ({ startTime }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = Math.floor((currentTime - startTime) / 1000);
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="timer">
      <span className="timer-label">Time:</span>
      <span className="timer-value">{elapsedTime} seconds</span>
    </div>
  );
};

export default Timer;