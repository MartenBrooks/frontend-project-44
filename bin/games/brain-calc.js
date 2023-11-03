#!/usr/bin/env node
import { greeting, generateNumber, getAnswer, checkAnswer, askQuestion, changeCount, wrongAnswer, congratulateUser, rounds } from '../../src/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
const operations = ['+', '-', '*'];
let rightAnswers = 0;
while (rightAnswers < rounds) {
  let rightAnswer = 0;
  const number1 = generateNumber(50);
  const number2 = generateNumber(50);
  const operation = operations[generateNumber(operations.length)];
  switch (operation) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
      break;
  }
  askQuestion(`${number1} ${operation} ${number2}`);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, rightAnswer)) {
    rightAnswers = changeCount(rightAnswers);
  } else {
    wrongAnswer(userName, userAnswer, rightAnswer);
  }
}
congratulateUser(userName);
