import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const check = (ans, name, i, j) => {
  const userAns = readlineSync.question('Your answer: ');
  if (String(ans) === userAns) {
    console.log('Correct!');
    return i + 1;
  }
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${ans}'.`);

  if (j < 2) console.log(`Let's try again, ${name}!`);
  return 0;
};
