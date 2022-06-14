import gameLines from '../index.js';
import randomInt from '../utils.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const getQnAns = () => {
  const quest = randomInt();
  const ans = isPrime(quest) ? 'yes' : 'no';
  return [quest, ans];
};

export default () => {
  gameLines(getQnAns, 'Answer \'yes\' if the number is prime, otherwise answer \'no\'.');
};
