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


function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

module.exports = {
  defaultToString,
  defaultCompare,
  Compare,
  BalanceFactor
}