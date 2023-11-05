#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, endGame, rounds, isPrime,
} from '../../src/index.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const number = generateNumber(1, 100);
  const correctAnswer = isPrime(number);
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
