#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, endGame, rounds, getGreatestCommonDivisor,
} from '../../src/index.js';

const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const number1 = generateNumber(0, 50);
  const number2 = generateNumber(0, 50);
  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  askQuestion(`${number1} ${number2}`);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
    break;
  }
}
endGame(userName, correctAnswers);
