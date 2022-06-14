import readlineSync from 'readline-sync';

export default (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  let i = 0;
  while (i < 3) {
    const [quest, ans] = game();
    console.log(`Question: ${quest}`);
    const userAns = readlineSync.question('Your answer: ');
    if (userAns !== ans) {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${ans}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    i += 1;
  }
  if (i === 3) console.log(`Congratulations, ${name}!`);
};
