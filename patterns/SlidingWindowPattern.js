//write a function that accepts array of numbers and also number n and gives the max sum of n numbers.

//trying with normal approach which is O(n^2) complexity

function maxSubArraySum(arr, num) {
  let tempValue = 0;
  let maxValue = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    tempValue = 0;
    for (let j = 0; j < num; j++) {
      tempValue += arr[i + j];
    }
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }
  return maxValue;
}

maxSubArraySum([1, 2, 4, 5, 6, 7, 7, 9, 9, 1, 2, 4, 5], 4); //used normal way of solving this

//trying with sliding window pattern to bring to O(n) time complexity

function maxSubArraySum(arr, num) {
  let tempVal = 0,
    maxVal = 0;

  for (let i = 0; i < num; i++) {
    maxVal += arr[i];
  }
  tempVal = maxVal;

  for (let i = num; i < arr.length; i++) {
    tempVal = tempVal - arr[i - num] + arr[i];
    maxVal = Math.max(maxVal, tempVal);
  }

  return maxVal;
}

maxSubArraySum([1, 3, 4, 5, 6, 9, 0, 7, 6, 5, 4, 3], 4);
