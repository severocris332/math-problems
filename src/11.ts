
const getRandomMathProblem = () => {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  // Generate a random operator (+, -, x, /)
  const operator = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];
  
  let problem = `${num1} ${operator} ${num2}`;
  
  // If the operator is - or x, multiply the numbers and add parentheses to the problem
  if (operator === '-' || operator === 'x') {
    problem += ` = ${(num1 * num2)}`;
  }
  
  // If the operator is /, divide the numbers and round the result to the nearest integer
  else if (operator === '/') {
    problem += ` = ${Math.round((num1 / num2))}`;
  }
  
  return problem;
}

getRandomMathProblem();