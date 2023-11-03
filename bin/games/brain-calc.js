#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, congratulateUser, rounds,
} from '../../src/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
const operations = ['+', '-', '*'];
let correctAnswers = 0;
while (correctAnswers < rounds) {
  let correctAnswer = 0;
  const number1 = generateNumber(0, 50);
  const number2 = generateNumber(0, 50);
  const operation = operations[generateNumber(operations.length)];
  switch (operation) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      break;
  }
  askQuestion(`${number1} ${operation} ${number2}`);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
  }
}
congratulateUser(userName);
