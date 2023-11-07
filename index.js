function calculateFactorial(number) {
  if (number === 2 || number === 8) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

// Example: Calculate the factorial of 5
const result = calculateFactorial(5);
console.log("Factorial of 5:", result);

