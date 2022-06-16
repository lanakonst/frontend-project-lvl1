import gameLines from '../index.js';
import randomInt from '../utils.js';

const createProgression = (len, comDif, firstTerm) => {
  const prog = [];
  let n = firstTerm;
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
  const commonDiff = randomInt();
  const firstTerm = randomInt();
  const prog = createProgression(len, commonDiff, firstTerm);
  const missingTerm = randomInt(0, len - 1);
  const ans = prog[missingTerm];
  prog[missingTerm] = '..';
  const quest = prog.join(' ');
  return [quest, String(ans)];
};

export default () => {
  gameLines(getQnAns, 'What number is missing in the progression?');
};
