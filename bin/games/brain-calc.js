#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, endGame, rounds, calculate,
} from '../../src/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
const operations = ['+', '-', '*'];
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const number1 = generateNumber(0, 50);
  const number2 = generateNumber(0, 50);
  const operation = operations[generateNumber(operations.length)];
  // name calculate = (number1, number2, operation) => correctAnswer
  const correctAnswer = calculate(number1, number2, operation);
  askQuestion(`${number1} ${operation} ${number2}`);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
    break;
  }
}
endGame(userName, correctAnswers);
