const generateMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  let problem = `${num1} ${operation} ${num2}`;
  if (operation === '/') {
    problem += ` = ${num1 / num2}`;
  } else {
    const result = operation === '+' ? num1 + num2 : operation === '-' ? num1 - num2 : num1 * num2;
    problem += ` = ${result}`;
  }
  return problem;
};
