
// 并集
export const union = (setA, setB) => {
  // const unionAb = new Set();
  // setA.forEach(value => unionAb.add(value));
  // setB.forEach(value => unionAb.add(value));
  // return unionAb;
  return new Set([...setA, ...setB]);
};

// 交集
const intersection = (setA, setB) => {
  // const intersectionSet = new Set();
  // setA.forEach(value => {
  //   if (setB.has(value)) {
  //     intersectionSet.add(value);
  //   }
  // });
  // return intersectionSet;
  return new Set([...setA].filter(x => setB.has(x)));
};

// 差集
const difference = (setA, setB) => {
  // const differenceSet = new Set();
  // setA.forEach(value => {
  //   if (!setB.has(value)) { // {1}
  //     differenceSet.add(value);
  //   }
  // });
  // return differenceSet;
  return new Set([...setA].filter(x => !setB.has(x)));
};