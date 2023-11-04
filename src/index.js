import readlineSync from 'readline-sync';

const rounds = 3;

const generateNumber = (min, max = 0) => Math.floor(Math.random() * (max - min) + min);

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

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
const congratulateUser = (name) => console.log(`Congratulations, ${name}!`);

export {
  generateNumber,
  greeting,
  askQuestion,
  getAnswer,
  checkAnswer,
  wrongAnswer,
  changeCount,
  congratulateUser,
  rounds,
};
