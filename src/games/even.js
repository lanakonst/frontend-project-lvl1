import * as gameLines from '../index.js';
import randomInt from '../utils.js';

export default () => {
  const name = gameLines.greeting();
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  let i = 0;

  while (i < 3) {
    const n = randomInt();
    console.log(`Question: ${n}`);
    let ans = 'no';
    if (n % 2 === 0) {
      ans = 'yes';
    }

    i = gameLines.check(ans, name, i);
  }

  if (i === 3) console.log(`Congratulations, ${name}!`);
};
