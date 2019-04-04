//##Bubble Sort
//Time Complexity -> O(n^2)
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

bubbleSort([1, 3, 2, 4, 6, 9, 345, 45, 2, 3, 4, 23, 45, 12]);

//also use swap function instead of using temporary variable

var swap = (arr, idx1, idx2) => {
  return [arr[idx1], (arr[idx2] = [arr[idx2], arr[idx1]])];
};
