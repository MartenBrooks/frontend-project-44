#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, endGame, rounds,
} from '../../src/index.js';

const isPrime = (number) => {
  if ((number % 2 === 0 && number !== 2) || number < 2) {
    return false;
  }
  for (let i = Math.floor(number / 2); i >= 2; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const number = generateNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  askQuestion(number);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
    break;
  }
}
endGame(userName, correctAnswers);
