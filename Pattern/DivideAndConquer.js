//asked to search the particular value given as input and find the index in the array

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    let currentElement = arr[middle];

    if (val > currentElement) {
      min = middle + 1;
    } else if (val < currentElement) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

search([1, 2, 3, 4, 6, 7, 8, 9, 11, 17, 23, 34, 56, 67, 68, 89], 3); //Using divide and conquer method
