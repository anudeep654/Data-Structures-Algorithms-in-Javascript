//PseudoCode
//start from the second element in the array.
//if second element is lesser than the first element then swap it.
//iterate it and if next element is less than it should be passed to the sorted order and insert it in the
//right place.
//continue the same method until the array is sorted.

//https://www.youtube.com/watch?v=i-SKeOcBwko

function insertionSort(arr) {
  var hole, value;

  for (var i = 1; i < arr.length; i++) {
    hole = i;
    value = arr[i];
    while (hole > 0 && arr[hole - 1] > value) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = value;
  }
  return arr;
}

insertionSort([7, 2, 4, 1, 5, 3, 9, 10, 2, 3]);

//insertion sort should have 2 subsets sorted and unsorted
//the sorted subset should be checked every time.
//in the above code the loop starts from value1.
//
