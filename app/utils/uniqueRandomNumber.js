const generatedNumbers = {};

export default () => {
  let number = Math.floor(Math.random() * 1000);
  while (generatedNumbers[number]) { number += 1; }
  generatedNumbers[number] = true;
  return number;
};
