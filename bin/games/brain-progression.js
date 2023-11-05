#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, endGame, rounds, generateProgression, makeProgressionWithGap,
} from '../../src/index.js';

const userName = greeting();
console.log('What number is missing in the progression?');
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const startNumber = generateNumber(0, 15);
  const progressionLength = generateNumber(5, 10);
  const progressionStep = generateNumber(2, 10);
  const progressionGap = generateNumber(1, progressionLength - 1);
  const progression = generateProgression(startNumber, progressionLength, progressionStep);
  const correctAnswer = progression[progressionGap];
  const progressionWithGap = makeProgressionWithGap(progression, progressionGap);
  askQuestion(progressionWithGap);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
    break;
  }
}
endGame(userName, correctAnswers);
