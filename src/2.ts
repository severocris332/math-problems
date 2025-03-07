 import { shuffle } from 'lodash';
 function getRandomProblem() {
   const problems = [
     { equation: '2x + 3 = ?', solution: 5 },
     { equation: 'x + 5 = ?', solution: 8 },
     { equation: '4x - 2 = ?', solution: 6 },
     { equation: '3x + 2 = ?', solution: 10 },
     { equation: '2x + 7 = ?', solution: 9 },
   ];
   return shuffle(problems)[0];
 }