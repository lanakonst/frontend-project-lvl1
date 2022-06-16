import gameLines from '../index.js';
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
};

const getQnAns = () => {
  const num1 = randomInt();
  const num2 = randomInt();
  const signs = ['+', '-', '*'];
  const signNum = randomInt(0, signs.length - 1);
  const ans = calc(num1, num2, signs[signNum]);
  const quest = `${num1} ${signs[signNum]} ${num2}`;

  return [quest, String(ans)];
};

export default () => {
  gameLines(getQnAns, 'What is the result of the expression?');
};
