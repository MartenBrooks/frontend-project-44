#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, congratulateUser, rounds,
} from '../../src/index.js';

const getGreatestCommonDivisor = (number1, number2) => {
  const halfMaxNumber = number1 > number2 ? Math.floor(number1 / 2) : Math.floor(number2 / 2);
  let greatestCommonDivisor = 0;
  for (let i = halfMaxNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      greatestCommonDivisor = i;
      break;
    }
  }
  return greatestCommonDivisor;
};

const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const number1 = generateNumber(50);
  const number2 = generateNumber(50);
  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  askQuestion(`${number1} ${number2}`);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
  }
}
congratulateUser(userName);