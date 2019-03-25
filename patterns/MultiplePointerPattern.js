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
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring("ritthmschool")

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2,3,1,2,4,3],7);

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

 maxSubarraySum([100,200,300,400],2);