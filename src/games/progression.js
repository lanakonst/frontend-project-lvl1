import * as gameLines from '../index.js';
import randomInt from '../utils.js';

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

const getQnAns = () => {
  const maxLen = 10;
  const minLen = 5;
  const len = randomInt(minLen, maxLen);
  const dots = randomInt(1, len - 1);
  const [prog, ans] = createProg(len, dots);
  const quest = prog.join(' ');
  return [quest, ans];
};

export default () => {
  gameLines.round(getQnAns, 'What number is missing in the progression?');
};
