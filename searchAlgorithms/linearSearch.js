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
