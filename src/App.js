import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Timer from './components/Timer';
import Progress from './components/Progress';
import TextArea from './components/TextArea';
import PracticeKeys from './components/PracticeKeys';
import { generateCombination } from './utils/helpers';
import TypingBox from './components/TypingBox';
import NextKeys from './components/NextKeys';

const App = () => {
  const [nextKeys, setNextKeys] = useState(['A', 'S', 'D', 'F', 'J', 'K', 'L']);
  const practiceKeys = ['a', 's', 'd', 'f', 'j', 'k', 'l'];
  const [expectedText, setExpectedText] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  const [speed, setSpeed] = useState(0);
  //const startTime = useRef(Date.now());
  const [startTime, setStartTime] = useState(null);



  useEffect(() => {
    const combination = generateCombination(practiceKeys, 10); // Generate a 10-character combination
    setExpectedText(combination);
  }, []);

  const handleKeyPress = (event) => {
    // const typedKey = event.key.toLowerCase();
    // setCurrentText((prevText) => prevText + typedKey);
    const { key } = event;
    setCurrentText((prevText) => prevText + key);
  };

  useEffect(() => {
    const expectedArray = expectedText.split('');
    const currentArray = currentText.split('');

    let correctChars = 0;
    for (let i = 0; i < currentArray.length; i++) {
      if (currentArray[i] === expectedArray[i]) {
        correctChars++;
      }
    }

    const newAccuracy = (correctChars / currentArray.length) * 100;
    setAccuracy(newAccuracy.toFixed(2));

    const elapsedTime = (Date.now() - startTime) / 1000;
    const newSpeed = Math.round((currentArray.length / elapsedTime) * 60);
    setSpeed(newSpeed);
  }, [currentText]);


  const startPractice = () => {
    const combination = generateCombination(practiceKeys, 10);
    setExpectedText(combination);
    setCurrentText('');
    setStartTime(Date.now());
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Touch Typing App</h1>
      </header>
      <main>
        <Timer startTime={startTime} />
        <Progress accuracy={accuracy} speed={speed} />
        <TextArea
          expectedText={expectedText}
          currentText={currentText}
        />
        <PracticeKeys
          practiceKeys={practiceKeys} // Pass the practiceKeys prop
          handleKeyPress={handleKeyPress}
        />
      <NextKeys keys={nextKeys} />
      </main>
    </div>
  );
};

export default App;
