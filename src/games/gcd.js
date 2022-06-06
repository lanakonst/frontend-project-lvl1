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

export default () => {
  const name = gameLines.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;

  while (i < 3) {
    const a = randomInt(100, 0);
    const b = randomInt(100, 0);
    console.log(`Question: ${a} ${b}`);
    const ans = div(a, b);

    i = gameLines.check(ans, name, i);
  }

  if (i === 3) console.log(`Congratulations, ${name}!`);
};
