function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); //Multiple pointers with Time complexity of o(n^2) with sum zero function

//using pointers to map the sum zero function with time complexity of O(n)

//as we know this is a sorted way we can easily use multiple pointers pattern.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (arr[left] < arr[right]) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3, 4]);

//This code uses while loop and get executed.

//write a function that takes an array of items at which the output should return the number of unique numbers in the array

//tried with a solution that has time complexity O(n^2) ,need to use multiple pointers

function countUniqueValues(arr) {
  let countValue = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        if (countValue.indexOf(arr[i]) === -1) {
          countValue.push(arr[i]);
        }
        if (countValue.indexOf(arr[j]) === -1) {
          countValue.push(arr[j]);
        }
      }
    }
  }
  return countValue.length;
}

countUniqueValues([-4, -3, -2, -2, 0, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 9]); //expecting output to be 7

//Counting unique values using multiple pointers
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 1, 2, 2, 5, 7, 7, 99]);
//uses single loop to check the unique values and it works with O(n) time complexity.
