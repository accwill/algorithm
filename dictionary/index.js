

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

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}


class Dictionary {
  constructor(toStrFn  = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key === null || value === null) {
      return false;
    }

    const tableKey = this.toStrFn(key);
    this.table[tableKey] = new ValuePair(key, value);
    return true;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)];
    }
    return null;
  }

  keyValues() {

  // const valuePairs = [];
  // for (const k in this.table) { // {1}
  //   if (this.hasKey(k)) {
  //     valuePairs.push(this.table[k]); // {2}
  //   }
  // }
  // return valuePairs;
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map(value => value.key);
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) return '';
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`; // {1}
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`; // {2}
    }
    return objString; // {3}
  }

}

function test () {

  const dictionary = new Dictionary();
  dictionary.set('Gandalf', 'gandalf@email.com');
  dictionary.set('John', 'johnsnow@email.com');
  dictionary.set('Tyrion', 'tyrion@email.com');
  
  
  
  console.log('tostring', dictionary.toString())
  console.log(dictionary.keys());
  console.log(dictionary.values());
  console.log(dictionary.keyValues());
  console.log();
}


module.exports = {
  ValuePair
}