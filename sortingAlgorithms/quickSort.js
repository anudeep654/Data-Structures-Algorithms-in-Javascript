//This sort alog has a pivot helper method=>the use of this method is to take the first value in the array and
//it will put in a sorted index and finally it will return the index.
//this is how the Quick sort works on helper method.
//now the quick sort function should be called with the recursive loop.

//when the middle element is pivoted it needs the left of its array to get sorted and also its right array.
//finally return the sorted array.
////BigO -> nlog(n) =>worst case: O(n^2);
function pivot(arr, start = 0, end = arr.length + 1) {
  var pivotIndex = start;

  var swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[start] > arr[i]) {
      pivotIndex++;

      swap(arr, pivotIndex, i);
    }
  }

  swap(arr, pivotIndex, swapIdx);

  return pivotIndex;
}

var swap = (arr, idx1, idx2) => {
  return [([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])];
};

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndx = pivot(arr, left, right); //4
    QuickSort(arr, left, pivotIndx - 1);
    QuickSort(arr, pivotIndx + 1, right);
  }

  return arr;
}

QuickSort([5, 8, 2, 1, 4, 7, 6, 3]);
