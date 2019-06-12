//https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/11072020#overview
//n(log(n)) #Time Complexity
//O(log(n)) + O(n) merge comparisons
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
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
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

mergeSort([10, 24, 76, 73]);
//BigO complexity -> O(nlog(n)),Space Complexity:O(n)

//here it is logn because when we take 8 items in an array it takes 3 steps logn
//each array will loop n times so it is n basically n(log(n)) complexity.

//helper function is used in merge sort ,quick sort and radix sort.
//first divide the whole array into half
//give 2 variables left and right.so left will get the first divided half items.
//right will get the next half and we are using recursive loop to continue and so on
//at the end it will again join using merge helper method which accepts 2 arrays.
//complexity will be explained here
