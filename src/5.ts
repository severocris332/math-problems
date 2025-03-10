import * as Math from 'mathjs';

function generateRandomMathProblem(): string {
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  let solution = '';

  switch (operator) {
    case '+':
      solution = `${a} + ${b}`;
      break;
    case '-':
      solution = `${a} - ${b}`;
      break;
    case '*':
      solution = `${a} * ${b}`;
      break;
    case '/':
      if (b === 0) {
        return generateRandomMathProblem();
      }
      solution = `${a} / ${b}`;
      break;
  }

  const result = Math.eval(solution);
  const checkAnswer = () => {
    const userInput = prompt('Enter your answer:');
    return userInput === result;
  };

  while (!checkAnswer()) {
    alert('Incorrect answer! Try again.');
  }

  alert(`Correct! The answer is ${result}.`);
}

generateRandomMathProblem();
