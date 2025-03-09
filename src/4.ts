// Generate a random math problem
function getRandomMathProblem() {
  // Use a random number between 1 and 10 for the first operand
  const operand1 = Math.floor(Math.random() * 10) + 1;

  // Use a random operator (+, -, x, /)
  const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];

  // Use a random number between 1 and 10 for the second operand
  const operand2 = Math.floor(Math.random() * 10) + 1;

  // Return the math problem in the format: "x = [operand1] [operator] [operand2]"
  return `x = ${operand1} ${operator} ${operand2}`;
}
