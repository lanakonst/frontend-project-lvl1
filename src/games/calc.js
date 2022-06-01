import * as gameLines from '../index.js';

const randomInt = () => Math.floor(Math.random() * 200);
const signNum = () => Math.floor(Math.random() * 3 + 1);

export default () => {
  const name = gameLines.greeting();
  console.log('What is the result of the expression?');

  let i = 0;

  while (i < 3) {
    const a = randomInt();
    const b = randomInt();
    const nSgn = signNum();
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

  console.log(`Congratulations, ${name}!`);
};
