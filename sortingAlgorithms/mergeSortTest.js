function merge(arr1, arr2) {
  let i = (j = 0);
  let results = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  let middle = arr.length / 2;
  let left = mergeSort(Math.floor(arr.slice(0, middle)));
  let right = mergeSort(Math.floor(arr.slice(middle)));
  let finalArr = merge(left, right);
  return finalArr;
}

mergeSorttest([1, 9, 4, 6, 3, 2, 8889, 445]);
