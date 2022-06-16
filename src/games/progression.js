import gameLines from '../index.js';
import randomInt from '../utils.js';

const createProgression = (len, comDif, firstTerm) => {
  const progression = [];
  let n = firstTerm;
  for (let i = 1; i <= len; i += 1) {
    progression.push(n);
    n += comDif;
  }
  return progression;
};

const getQnAns = () => {
  const maxLen = 10;
  const minLen = 5;
  const len = randomInt(minLen, maxLen);
  const commonDiff = randomInt();
  const firstTerm = randomInt();
  const progression = createProgression(len, commonDiff, firstTerm);
  const missingTerm = randomInt(0, len - 1);
  const ans = progression[missingTerm];
  progression[missingTerm] = '..';
  const quest = progression.join(' ');
  return [quest, String(ans)];
};

export default () => {
  gameLines(getQnAns, 'What number is missing in the progression?');
};
