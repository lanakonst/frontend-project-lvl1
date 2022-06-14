import * as gameLines from '../index.js';
import randomInt from '../utils.js';

const calc = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
}

const getQnAns = () => {
  const num1 = randomInt();
  const num2 = randomInt();
  const signs = ['+', '-', '*'];
  const signNum = randomInt(0, 2);
  let ans = calc(num1, num2, signs[signNum]);
  let quest = `${num1} ${signs[signNum]} ${num2}`;
  
  return [quest, ans];
};

export default () => {
  gameLines.round(getQnAns, 'What is the result of the expression?');
};
