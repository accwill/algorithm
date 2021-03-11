/* 
* @文件说明: 判断一个字符串是否是回文
* @Date: 2021-03-11 20:58:30  
* @Last Modified time: 2021-03-11 20:58:30  
*/


const Deque = require('./deque');

function palindromeChecker(str) {

  const deque = new Deque();

  const lowerString = str.toLocaleLowerCase();

  let isEqual = true;

  let firstChar, lastChar;

  for (let i = 0; i < lowerString; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  

  while (deque.size() && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    } 
  }
  return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a caror a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));

console.log('123');