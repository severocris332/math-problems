export const mathProblems = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

let result = mathProblems.add(2, 3);
console.log(result); // Output: 5

result = mathProblems.subtract(10, 4);
console.log(result); // Output: 6

result = mathProblems.multiply(5, 2);
console.log(result); // Output: 10

result = mathProblems.divide(10, 2);
console.log(result); // Output: 5