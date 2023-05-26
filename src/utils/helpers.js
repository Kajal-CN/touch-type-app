// utils/helpers.js

export const generateCombination = (keys, length) => {
  let combination = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    combination += keys[randomIndex];
  }
  return combination;
};
