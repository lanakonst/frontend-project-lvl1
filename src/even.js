import readlineSync from 'readline-sync';

const randomInt = () => Math.floor(Math.random() * 1000);

export default () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".');
    let i = 0;
    
    while (i < 3) {
        const n = randomInt();
        console.log(`Question: ${n}`);
        let ans = 'no';
        if (n % 2 === 0) {
            ans = 'yes';
        }
        const user_ans = readlineSync.question('Your answer: ');

        if (ans === user_ans) {
            console.log('Correct!');
            i += 1;
        } else {
            console.log(`'${user_ans}' is wrong answer ;(. Correct answer was '${ans}'.`);
            console.log(`Let's try again, ${name}!`);
            i = 0;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
