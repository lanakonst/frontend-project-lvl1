import * as gameLines from '../index.js';
import randomInt from '../utils.js';

const getQnAns = () => {
  const a = randomInt();
  const b = randomInt(100, 0);
  const nSgn = randomInt(3, 1);
  let ans;
  let quest;
  switch (nSgn) {
    case 1:
      ans = a + b;
      quest = `${a} + ${b}`;
      break;
    case 2:
      ans = a - b;
      quest = `${a} - ${b}`;
      break;
    default:
      ans = a * b;
      quest = `${a} * ${b}`;
      break;
  }
  return [quest, ans];
};

export default () => {
  gameLines.round(getQnAns, 'What is the result of the expression?');
};
