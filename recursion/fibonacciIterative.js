/**
 * @文件说明: 斐波那契
 * 
 * 体会：本次的 n-1 是下次的 n-2
 * 
 * 
 * @Date: 2021-03-14 09:34:32
 * @Last Modified time: 2021-03-14 09:34:32
 */
function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  const nums = [0, 1];
  for (let i = 2; i <= n; i++) { // n >= 2
    fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
    nums.push(fibN);
  }
  console.log('fibNs', nums.join(', '))
  return fibN;
}


console.log('fdlsfj', fibonacciIterative(8))

console.log()