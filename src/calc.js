import readlineSync from 'readline-sync';

const randomInt = () => Math.floor(Math.random() * 200);
const signNum = () => Math.floor(Math.random() * 3 + 1);

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let i = 0;

  while (i < 3) {
    const a = randomInt();
    const b = randomInt();
    const nSgn = signNum();
    let ans;
    let userAns;
    switch (nSgn) {
      case 1:
        ans = a + b;
        console.log(`Question: ${a} + ${b}`);
        userAns = Number(readlineSync.question('Your answer: '));
        break;
      case 2:
        ans = a - b;
        console.log(`Question: ${a} - ${b}`);
        userAns = Number(readlineSync.question('Your answer: '));
        break;
      default:
        ans = a * b;
        console.log(`Question: ${a} * ${b}`);
        userAns = Number(readlineSync.question('Your answer: '));
        break;
    }

    if (ans === userAns) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${ans}'.`);
      console.log(`Let's try again, ${name}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
