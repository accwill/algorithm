const { ValuePair } = require('.');
const { LinkedList } = require('../linkedlist/linkedlist');
const { defaultToString } = require('../utils');


class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }


  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tablekey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tablekey.length; i++) {
      hash += tablekey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put (key, value) {
    if (key === null || value === null) {
      return false;
    }


    const position = this.hashCode(key);

    if (!this.table[position]) {
      this.table[position] = new LinkedList();
    }
    
    this.table[position].push(new ValuePair(key, value));
    return true;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedlist = this.table[position];
    if (linkedlist === null || linkedlist.isEmpty()) {
      return undefined;
    }
    let current = linkedlist.getHead();
    while (current !== null) {
      if (current.element.key === key) {
        return current.element.value;
      }

      current = current.next;
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);

    const linkedList = this.table[position];

    if (!linkedList || linkedList?.isEmpty()) {
      return false;
    }

    let current = linkedList.getHead();

    while (current !== null) {
      if (current.element.key === key) {
        linkedList.remove(current.element);
        if (linkedList.isEmpty()) {
          delete this.table[position];
        }
        return true;
      }
      current = current.next;
    }

    return false;    
  }
}

const hash = new HashTableSeparateChaining();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');
console.log('lsdkjf', hash.remove('Nathan'));
console.log( hash.toString() );
console.log();