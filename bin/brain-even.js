#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getRandomInt = (max) => Math.floor(Math.random() * max);
let rightAnswers = 0;
while (rightAnswers < 3) {
  const randomNumber = getRandomInt(100);
  const correctAnswer = isEven(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    rightAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}`);
  }
}
console.log(`Congratulations, ${name}!`);
