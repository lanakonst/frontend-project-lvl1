import * as gameLines from '../index.js';

const randomInt = () => Math.floor(Math.random() * 200);
const createProg = (len, dots) => {
  const comDif = randomInt();
  let n = randomInt();
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
  return [prog, ans];
};

export default () => {
  const name = gameLines.greeting();
  const maxLen = 10;
  const minLen = 5;
  console.log('What number is missing in the progression?');
  let i = 0;

  while (i < 3) {
    const len = Math.floor(Math.random() * (maxLen - minLen + 1) + minLen);
    const dots = Math.floor(Math.random() * len + 1);

    const [prog, ans] = createProg(len, dots);

    console.log(`Question: ${prog.join(' ')}`);
    i = gameLines.check(ans, name, i);
  }
  console.log(`Congratulations, ${name}!`);
};
