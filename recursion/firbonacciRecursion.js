/**
 * @文件说明: 斐波那契递归解法
 * @Date: 2021-03-14 09:38:26
 * @Last Modified time: 2021-03-14 09:38:26
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


/**
 * 
 * 1. 思考如何判断递归的终止条件
 * 2. 传递的值是什么
 * 
 * 
 * 
 * 
 */

const nums = [];
const firbonacciRecursion = (num) => {
  console.log('123')
  num.push()
  if (num < 1) return 0;
  if (num <= 2) return 1;
  // const fib1 = firbonacciRecursion(num - 1)
  // const fib2 = firbonacciRecursion(num - 2);
  // nums.push(fib1 + fib2)
  // return fib1 + fib2;
  return firbonacciRecursion(num - 1) + firbonacciRecursion(num - 2);
}

console.log('firbonacciRecursion', firbonacciRecursion(8))
console.log('nums', nums.join(', '), '\n执行了：', nums.length)

console.log();

// nums 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 2, 1, 4, 3, 2, 1, 2, 5, 4, 3, 2, 1, 2, 3, 2, 1, 6, 5, 4, 3, 2, 1, 2, 3, 2, 1, 4, 3, 2, 1, 2
// nums 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 2, 1, 4, 3, 2, 1, 2, 5, 4, 3, 2, 1, 2, 3, 2, 1, 6, 5, 4, 3, 2, 1, 2, 3, 2, 1, 4, 3, 2, 1, 2


