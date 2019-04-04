function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

var swap = (arr, idx1, idx2) => {
  return [([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])];
};

selectionSort([1, 23, 4, 5, 65, 11, 13, 4, 5, 7, 8, 9, 11, 23]);

//selectionSort always compares the min value and store the index of the min value.
//and it iterates the values with the lowest value and it will swap it.
//this is how it works .
//Time Complexity => O(n^2)
