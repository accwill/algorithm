function factorialInteractive(number) {
  let total = 1;
  for (let i = number; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log('factorialInteractive', factorialInteractive(5));
