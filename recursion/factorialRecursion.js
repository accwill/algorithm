const factorialRecursion = (n) => {
  console.trace();
  if (n <= 1) {
    return 1;
  }
  return n * factorialRecursion(n - 1)
}

console.log('递归技术', factorialRecursion(5));