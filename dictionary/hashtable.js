
const { ValuePair } = require('./index');

const defaultToString = (item) =>{
  if (item === null) {
    return 'NULL';
  }

  if (item === undefined) {
    return 'UNDEFINED';
  }

  if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}


class HashTable {
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

  put(key, value) {
    if (key === null || value === null) {
      return false;
    }

    const position = this.hashCode(key);
    this.table[position] = new ValuePair(key, value);
    return true;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair?.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table(hash);
    if (valuePair != null) {
      delete this.table[hash]; // {3}
      return true;
    }
    return false;
  }

  toString() {
    const keys = Object.keys(this.table);
    let objString = ` {${keys[0]} => ${this.table[keys[0]].toString()}}\n`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString} {${keys[i]} => ${this.table[keys[i]].toString()}}\n`
    }
    return objString;
  }
  
}

const hash = new HashTable();hash.put('Ygritte', 'ygritte@email.com');
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

console.log( hash.toString() );
console.log();