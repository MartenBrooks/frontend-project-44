import readlineSync from 'readline-sync';

const rounds = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const generateNumber = (min, max = 0) => Math.floor(Math.random() * (max - min) + min);
const askQuestion = (question) => console.log(`Question: ${question}`);
const getAnswer = () => readlineSync.question('Your answer: ');
const checkAnswer = (userAnswer, correctAnswer) => String(userAnswer) === String(correctAnswer);

const changeCount = (correctAnswers) => {
  const result = correctAnswers + 1;
  console.log('Correct!');
  return result;
};

const wrongAnswer = (name, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const endGame = (name, correctAnswers) => {
  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

// brain-even functions
const isEven = (number) => number % 2 === 0;

// brain-calc functions
const calculate = (number1, number2, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }
  return result;
};

// brain-gcd functions
const getGreatestCommonDivisor = (number1, number2) => {
  const maxNumber = number1 > number2 ? number1 : number2;
  let greatestCommonDivisor = 0;
  for (let i = maxNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      greatestCommonDivisor = i;
      break;
    }
  }
  return greatestCommonDivisor;
};

// brain-progression functions

const generateProgression = (startNumber, progressionLength, progressionStep) => {
  const progressionArray = [startNumber];
  let nextNumber = startNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    nextNumber += progressionStep;
    progressionArray.push(nextNumber);
  }
  return progressionArray;
};

const makeProgressionWithGap = (progression, progressionGap) => {
  let resultProgression = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === progressionGap) {
      resultProgression = `${resultProgression} ..`;
    } else {
      resultProgression = `${resultProgression} ${progression[i]}`;
    }
  }
  return resultProgression.trim();
};

// brain-prime functions
const isPrime = (number) => {
  for (let i = Math.floor(number / 2); i >= 2; i -= 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return number > 1;
};

export {
  generateNumber,
  greeting,
  askQuestion,
  getAnswer,
  checkAnswer,
  wrongAnswer,
  changeCount,
  endGame,
  isEven,
  calculate,
  getGreatestCommonDivisor,
  generateProgression,
  makeProgressionWithGap,
  isPrime,
  rounds,
};
