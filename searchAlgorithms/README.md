SEARCH ALGORITHMS

=>KMP Search(Knutch-Morris-Pratt) =>https://www.youtube.com/watch?v=GTJr8OvyEVQ

## Linear Search

The shortest case is O(1) <br/>
Worst Case is O(n)<br/>
The average is O(n)<br/>

```javascript
//pseudocode

//=>Function will receive an array and a value
//=>it should go through each and every item and check whether it matches
//=>if it founds return the values index it matches or return -1
//=>if not send it as -1

function linearSearch(arr, num) {
  let i = 0;
  for (let val of arr) {
    if (val === num) {
      return i;
    } else {
      i++;
    }
  }
  return -1;
}

linearSearch([10, 15, -1, -2, -9, 20, 25, 30], -9);
```

# Binary search only works with sorted algorithms

Best Case : O(1)<br/>
Worst Case: O(log n) it will take 5 steps to search 32 elements which is indirectly log 32 = 5 ;<br/>

###### PseudoCode

the function accepts sorted array and a value <br/>
create a left pointer and right pointer <br/>
create a middle element <br/>
if value is less than middle element,bring right pointer to middle <br/>
vice versa <br/>
if nothing return -1 <br/>

```javascript
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
```
