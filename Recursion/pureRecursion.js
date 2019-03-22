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
