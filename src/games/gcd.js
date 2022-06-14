import gameLines from '../index.js';
import randomInt from '../utils.js';

const div = (num1, num2) => {
  let ans = 1;
  let n = 1;
  while (n < num1 && n < num2) {
    if (num1 % (n + 1) === 0 && num2 % (n + 1) === 0) ans = n + 1;
    n += 1;
  }

  return ans;
};

const getQnAns = () => {
  const num1 = randomInt(1);
  const num2 = randomInt(1);
  const ans = div(num1, num2);

  return [`${num1} ${num2}`, String(ans)];
};

export default () => {
  gameLines(getQnAns, 'Find the greatest common divisor of given numbers.');
};
