import * as gameLines from '../index.js';
import randomInt from '../utils.js';

const isPrime = (n) => {
  if (n < 2) {
    return 'no';
  }

  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getQnAns = () => {
  const quest = randomInt();
  const ans = isPrime(quest);
  return [quest, ans];
};

export default () => {
  gameLines.round(getQnAns, 'Answer \'yes\' if the number is prime, otherwise answer \'no\'.');
};
