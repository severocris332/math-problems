function calculateSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });
    return sum;
}

let result = calculateSum([1, 2, 3, 4, 5]);
console.log(result);
