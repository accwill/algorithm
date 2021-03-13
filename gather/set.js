class Set {
  constructor() {
    this.items = {};
  }


  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  
  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      count++;
    }
    return count;
  }

  values() {
    return Object.values(this.items);
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(element => {
      unionSet.add(element);
    });
    otherSet.values().forEach(element => {
    unionSet.add(element);
    });
    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.items.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(valeus[i]);
      }
    }
    return intersectionSet;
  }
}


const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values());

console.log();