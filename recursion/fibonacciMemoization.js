
function fibonacciMemoization() {
  const memo = [0, 1];

  function fibonaci(n) {
    console.log('123');
    if (memo[n] !== undefined) return  memo[n]
    return memo[n] = fibonaci(n - 1) + fibonaci(n - 2);
  }
  return fibonaci;
}

console.log('fibonacciMemoization(8)', fibonacciMemoization()(8));
console.log();