#!/usr/bin/env node
import {
  greeting, generateNumber, getAnswer,
  checkAnswer, askQuestion, changeCount,
  wrongAnswer, congratulateUser, rounds,
} from '../../src/index.js';

const progressionGenerator = (startNumber, progressionLength, progressionStep) => {
  const progressionArray = [startNumber];
  let nextNumber = startNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    nextNumber += progressionStep;
    progressionArray.push(nextNumber);
  }
  return progressionArray;
};

const displayProgression = (progression, progressionGap) => {
  let resultProgression = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === progressionGap) {
      resultProgression = `${resultProgression} ..`;
    } else {
      resultProgression = `${resultProgression} ${progression[i]}`;
    }
  }
  return resultProgression;
};

const userName = greeting();
console.log('What number is missing in the progression?');
let correctAnswers = 0;
while (correctAnswers < rounds) {
  const startNumber = generateNumber(0, 15);
  const progressionLength = generateNumber(5, 10);
  const progressionStep = generateNumber(2, 10);
  const progressionGap = generateNumber(1, progressionLength - 1);
  const progression = progressionGenerator(startNumber, progressionLength, progressionStep);
  const correctAnswer = progression[progressionGap];
  const progressionWithGap = displayProgression(progression, progressionGap);
  askQuestion(progressionWithGap);
  const userAnswer = getAnswer();
  if (checkAnswer(userAnswer, correctAnswer)) {
    correctAnswers = changeCount(correctAnswers);
  } else {
    wrongAnswer(userName, userAnswer, correctAnswer);
    break;
  }
}
if (correctAnswers === rounds) {
  congratulateUser(userName);
}
