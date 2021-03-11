/* 
* @文件说明: 击鼓传花 FIFO
* @Date: 2021-03-11 20:37:07  
* @Last Modified time: 2021-03-11 20:37:07  
*/
const Queue = require('./queue');


function hotPotato(elements, num) {
  const queue = new Queue();

  const elimitatedList = [];

  for (let i = 0 ; i < elements.length; i++) {
    queue.enqueue(elements[i]);
  }
  
  let count = 0;
  while (queue.size() > 1) {
    count++;
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  console.log('cout', count)
  
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 1);

result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中被淘汰。`);
});

console.log(`胜利者： ${result.winner}`);

console.log()