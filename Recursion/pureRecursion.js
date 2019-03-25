function countOddValues(arr) {
  let newarr = [];

  if (arr.length === 0) return newarr;
  if (arr[0] % 2 !== 0) {
    newarr.push(arr[0]);
  }

  newarr = newarr.concat(countOddValues(arr.slice(1)));
  return newarr;
}

countOddValues([1, 2, 3, 4, 5, 6, 7]);

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  if (callback(arr[0])) return true;

  return someRecursive(arr.slice(1), callback);
}

function isOdd(val) {
  return val % 2 !== 0;
}

someRecursive([2, 2, 4, 9], isOdd);
