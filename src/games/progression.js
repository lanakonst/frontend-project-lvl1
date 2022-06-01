import * as gameLines from '../index.js';

const randomInt = () => Math.floor(Math.random() * 200);

export default () => {
  const name = gameLines.greeting();
  console.log('What number is missing in the progression?');
  let i = 0;

  while (i < 3) {
    const comDif = randomInt();
    let n = randomInt();
    const len = Math.floor(Math.random() * 6 + 5);
    const dots = Math.floor(Math.random() * len + 1);
    const prog = [];
    let ans;

    for (let j = 1; j <= len; j += 1) {
      if (j === dots) {
        prog.push('..');
        ans = n;
      } else {
        prog.push(n);
      }
      n += comDif;
    }
    console.log(`Question: ${prog.join(' ')}`);
    i = gameLines.check(ans, name, i);
  }
  console.log(`Congratulations, ${name}!`);
};
