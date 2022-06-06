import * as gameLines from '../index.js';
import randomInt from '../utils.js';

export default () => {
  const name = gameLines.greeting();
  console.log('What is the result of the expression?');

  let i = 0;

  while (i < 3) {
    const a = randomInt();
    const b = randomInt(100, 0);
    const nSgn = randomInt(3, 1);
    let ans;
    switch (nSgn) {
      case 1:
        ans = a + b;
        console.log(`Question: ${a} + ${b}`);
        break;
      case 2:
        ans = a - b;
        console.log(`Question: ${a} - ${b}`);
        break;
      default:
        ans = a * b;
        console.log(`Question: ${a} * ${b}`);
        break;
    }
    i = gameLines.check(ans, name, i);
  }

  if (i === 3) console.log(`Congratulations, ${name}!`);
};
