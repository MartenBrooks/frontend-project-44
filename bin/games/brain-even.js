#!/usr/bin/env node
import { greeting, generateNumber, isEven, getAnswer, checkAnswer, askQuestion, changeCount, wrongAnswer, congratulateUser, rounds } from '../../src/index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let rightAnswers = 0;
while (rightAnswers < rounds) {
  const randomNumber = generateNumber(50);
  const correctAnswer = isEven(randomNumber);
  askQuestion(randomNumber);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    rightAnswers = changeCount(rightAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
  }
}
congratulateUser(userName);
