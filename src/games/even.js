import * as gameLines from '../index.js';

const randomInt = () => Math.floor(Math.random() * 1000);

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
  console.log(`Congratulations, ${name}!`);
};
