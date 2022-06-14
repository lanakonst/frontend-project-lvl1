import gameLines from '../index.js';
import randomInt from '../utils.js';

const createProg = (len, comDif, firstN) => {
  const prog = [];
  let n = firstN;
  for (let i = 1; i <= len; i += 1) {
    prog.push(n);
    n += comDif;
  }
  return prog;
};

const getQnAns = () => {
  const maxLen = 10;
  const minLen = 5;
  const len = randomInt(minLen, maxLen);
  const comDif = randomInt();
  const firstN = randomInt();
  const prog = createProg(len, comDif, firstN);
  const dots = randomInt(0, len - 1);
  const ans = prog[dots];
  prog[dots] = '..';
  const quest = prog.join(' ');
  return [quest, String(ans)];
};

export default () => {
  gameLines(getQnAns, 'What number is missing in the progression?');
};
