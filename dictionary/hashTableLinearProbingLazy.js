const { ValuePair } = require('.');
const { LinkedList } = require('../linkedlist/linkedlist');
const { defaultToString } = require('../utils');


class HashTableLinearProbingLazy {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }


  loseloseHashCode(key) {
    const tableKey = this.toStrFn(key); // {1}
    let hash = 5381; // {2}
    for (let i = 0; i < tableKey.length; i++) { // {3}
      hash = (hash * 33) + tableKey.charCodeAt(i); // {4}
    }
    return hash % 1013; // {5}
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key === null || value === null) {
      return undefined;
    }
    const postion = this.hashCode(key);

    if (!this.table[postion]) {
      this.table[postion] = new ValuePair(key, value);
    } else {
      let index = postion + 1;
      while (this.table[index]) {
        index++;
      }
      this.table[index] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    if (!key) return undefined;
    const hash = this.hashCode(key);
    let index = hash;
    while (this.table[index]) {
      if (this.table[index]?.key === key) {
        return this.table[index].value;
      }
      index+=1;
    }
    return undefined;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);

    let index = removedPosition + 1;



    // 迭代换位置， 将比被删除位置大的hash依次移动至被删除hash的位置上
    while (this.table[index]) {
      const posHash = this.hashCode(this.table[index].key);
      // if (posHash <= hash || posHash <= removedPosition) {
      if (posHash <= hash) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }

  remove(key) {
    if (!key) return undefined;
    const hash = this.hashCode(key);

    let index = hash;
    while (this.table[index]) {
      if (this.table[index]?.key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index); // {4}
        return true;
      }
      index++;
    }
    return false;
  }
  
}


const hash = new HashTableLinearProbingLazy();

hash.put('abc', 2);
hash.put('cba', 100);
hash.put('cab', 2);

console.log(hash.get('cba'));
console.log(hash.remove('cba'));


console.log();