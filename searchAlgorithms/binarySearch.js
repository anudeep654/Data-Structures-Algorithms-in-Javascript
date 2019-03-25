//PseudoCode

//Binary search only works with sorted algorithms

//the function accepts sorted array and a value
//create a left pointer and right pointer
//create a middle element
//if value is less than middle element,bring right pointer to middle
//vice versa
//if nothing return -1
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let currentElement = arr[middle];
    if (num < currentElement) {
      end = middle - 1;
    } else if (num > currentElement) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 34, 56, 78, 90], 78);
