const factorialRecursion = (num) => {
  console.trace();
  if (num <= 1) {
    return 1;
  }
  return num * factorialRecursion(num - 1);
}

console.log('递归技术', factorialRecursion(5));