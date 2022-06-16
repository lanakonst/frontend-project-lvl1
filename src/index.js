import readlineSync from 'readline-sync';

export default (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [quest, ans] = game();
    console.log(`Question: ${quest}`);
    const userAns = readlineSync.question('Your answer: ');
    if (userAns !== ans) {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${ans}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
