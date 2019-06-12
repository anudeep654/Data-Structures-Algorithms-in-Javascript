//Radix sort is not a comparison sort.So it has better time complexity
//radix sort will have base10 buckets like 0,1,2,3,4,5,6,7,8,9.
//the unsorted array looks like [12,23,3456,7890,5678,34,12,456,765];
//we need to take the last digit in every item and put in the respective bucket.
//like digit 12 has 2 in the lst digit so it goes to bucket 2 and it follows.
//again we are merging into single array and we will go for second digit and places the item in respective bucket.
//this loop continues until the highest size of the item in the unsorted array.
//helper methods like if i pass a number and bucket index it needs to give thelast digit value.(k)
//second helper to find the largest number
//third helper to find the largest number size
//Time COmplexity O(nk) => where nis no of digits and k is size of digits => so its O(nk).

function getLastDigit(val, index) {
  return Math.floor((Math.abs(val) / Math.pow(10, index)) % 10);
}

function digitCount(val) {
  if (val == 0) return 1;
  return Math.floor(Math.log10(val)) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let val of nums) {
    maxDigits = Math.max(maxDigits, digitCount(val));
  }
  return maxDigits;
}

function RadixSort(nums) {
  let maxDigitLength = mostDigits(nums);
  for (let k = 0; k < maxDigitLength; k++) {
    var arrayBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      arrayBucket[getLastDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...arrayBucket);
  }

  return nums;
}

RadixSort([12, 8765, 34, 908, 76, 456]);
