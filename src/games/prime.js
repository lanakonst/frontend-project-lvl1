import * as gameLines from '../index.js';

const randomInt = () => Math.floor(Math.random() * 1000);
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

export default () => {
  const name = gameLines.greeting();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  let i = 0;

  while (i < 3) {
    const n = randomInt();
    console.log(`Question: ${n}`);
    const ans = isPrime(n);
    i = gameLines.check(ans, name, i);
  }
  console.log(`Congratulations, ${name}!`);
};
