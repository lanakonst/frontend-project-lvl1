import * as gameLines from '../index.js';
import randomInt from '../utils.js';

const getQnAns = () => {
  const n = randomInt();
  let ans = 'no';
  if (n % 2 === 0) {
    ans = 'yes';
  }
  return [n, ans];
};

export default () => {
  gameLines.round(getQnAns, 'Answer \'yes\' if the number is even, otherwise answer \'no\'.');
};
