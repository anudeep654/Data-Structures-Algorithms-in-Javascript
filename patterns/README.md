#### Patterns for solving problems in javascript

1)Frequency Pattern <br />
2)Multiple Pointer Pattern <br />
3)Sliding window pattern <br />
4)Divide & Conquer pattern <br />

##### Frequency Pattern

Question: Given two arrays check whether the second array is the square of first array.Order has no priority

instead of nested loops using 2 for loops and making it to O(n^2),we are gonna use frequency pattern.

Same function done in native way with O(n^2)

```javascript
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let commonIndex = arr2.indexOf(arr1[i] ** 2);
    if (commonIndex === -1) {
      return false;
    }
    arr2.splice(commonIndex, 1);
  }
  return true;
}

same([1, 4, 3], [1, 16, 9]);
```

//Same function done in frequency pattern

```javascript
function same(arr1, arr2) {
  //[1,2,3,2] [1,4,9,4]
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyPattern1 = {}; //{1:1,2:2,3:1}
  let frequencyPattern2 = {}; //{1:1,4:2,9:1}

  for (let val of arr1) {
    frequencyPattern1[val] = (frequencyPattern1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyPattern2[val] = (frequencyPattern2[val] || 0) + 1;
  }

  for (let key in frequencyPattern1) {
    if (!(key ** 2 in frequencyPattern2)) {
      return false;
    }

    if (frequencyPattern1[key] !== frequencyPattern2[key ** 2]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2], [1, 4, 9, 4]);
```

Question:Anagram question
Anagram using frequency pattern

```javascript
function validAnagram(str1, str2) {
  // validAnagram("andy","ydna")
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("eeudanp", "anudeep");
```

//Another example of anagram

```javascript
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter = {};
  for (let str of str1) {
    frequencyCounter[str] = (frequencyCounter[str] || 0) + 1;
  }

  for (let str of str2) {
    if (!frequencyCounter[str]) {
      return false;
    } else {
      frequencyCounter[str] - 1;
    }
  }
  return true;
}

anagram("Anudeep", "peedunA");
```

Question : given an array as input,find the first pair that sums to Zero.

function sumZero(arr) {
for (let i = 0; i < arr.length; i++) {
for (let j = i + 1; j < arr.length; j++) {
if (arr[i] + arr[j] === 0) {
return [arr[i], arr[j]];
}
}
}
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // Time complexity of o(n^2) with sum zero function

//using Multiple pointers with to map the sum zero function with time complexity of O(n)

//as we know this is a sorted way we can easily use multiple pointers pattern.

```javascript
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
```

This code uses while loop and get executed.

write a function that takes an array of items at which the output should return the number of unique numbers in the array

tried with a solution that has time complexity O(n^2) ,need to use multiple pointers

```javascript
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
```

//Counting unique values using multiple pointers

```javascript
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
```

//asked to search the particular value given as input and find the index in the array

```javascript
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
```
