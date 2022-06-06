import * as gameLines from '../index.js';
import randomInt from '../utils.js';

const div = (a, b) => {
  let ans = 1;
  let n = 1;
  while (n < a && n < b) {
    if (a % (n + 1) === 0 && b % (n + 1) === 0) ans = n + 1;
    n += 1;
  }

  return ans;
};

const getQnAns = () => {
  const a = randomInt(100, 0);
  const b = randomInt(100, 0);
  const ans = div(a, b);

  return [`${a} ${b}`, ans];
};

export default () => {
  gameLines.round(getQnAns, 'Find the greatest common divisor of given numbers.');
};
