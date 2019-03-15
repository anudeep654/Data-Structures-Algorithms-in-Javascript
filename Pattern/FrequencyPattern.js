//Problem solving patterns:

//* frequency counter

//instead of nested loops using 2 for loops and making it to O(n^2),we are using frequency pattern.

//Same function done in native way with O(n^2)

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

//Same function done in frequency pattern

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

//Anagram using frequency pattern

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

//Another example of anagram

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
