/* 
* @文件说明: 利用WeakMap，很奇妙啊。
* @Date: 2021-03-11 19:41:46  
* @Last Modified time: 2021-03-11 19:41:46  
*/
const items = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }
  push(element) {
    const s = items.get(this);
    s.push(element);
  }
  pop() {
    const a = items.get(this);
    const r = s.pop();
    return r;
  }
}
/**
 * 
 * WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
 * 因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。
 * 也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
 * 
 * 
 */