#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, rounds, endGame, isEven,
} from '../../src/index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const randomNumber = generateNumber(0, 50);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  askQuestion(randomNumber);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
    break;
  }
}
endGame(userName, correctAnswers);
