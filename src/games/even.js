import * as gameLines from '../index.js';
import randomInt from '../utils.js';

const isEven = (n) => n % 2 === 0;

const getQnAns = () => {
  const n = randomInt();
  const ans = isEven(n) ? 'yes' : 'no';
  return [n, ans];
};

export default () => {
  gameLines.round(getQnAns, 'Answer \'yes\' if the number is even, otherwise answer \'no\'.');
};
