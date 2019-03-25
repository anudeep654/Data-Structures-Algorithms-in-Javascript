function power(base, exponent) {
  //O(n^2) -Time Complexity

  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }

  return result;
}

//power(2,10);

function powerRecursion(base, exponent) {
  //O(n) -Time Complexity

  if (exponent === 0) return 1;

  return base * powerRecursion(base, exponent - 1);
}

powerRecursion(2, 0);

//Factorial recursion
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

factorial(0);
//product of numbers in an array

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]);

//add the numbers from 0 to the number passed as a parameter.
function recursiveRange(num) {
  if (num === 0) return num;

  return num + recursiveRange(num - 1);
}

recursiveRange(1);

//fibonacci series

function fib(num) {
  arr = [0, 1];
  mapper = {};
  let counter = 0;
  for (let i = 2; i <= num; i++) {
    let a = arr[i - 1];
    let b = arr[i - 2];

    arr[i] = a + b;
  }

  for (let ele of arr) {
    mapper[counter] = ele;
    counter++;
  }
  return mapper;
}

fib(10);

function reverse(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    arr.unshift(char);
  }

  return arr.join("");
}

//reverse('awesome')

function reverseRecursion(str) {
  let arr = [];

  if (str.length === 0) return arr;

  arr.push(str[0]);

  arr = arr.concat(reverseRecursion(str.slice(1)));

  return arr.reverse().join("");
}

reverseRecursion("awesome");

function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}

reverse("awesome");

function palindrome(str) {
  if (str.length <= 1) return true;

  if (str.length === 2) return str[0] === str.slice(-1);

  if (str[0] === str.slice(-1)) return palindrome(str.slice(1, -1));
  return false;
}

palindrome("anudeep");

//write a function that accepts set of array values and kindly make each item first letter in capital as output.
function capitalizeFirst(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  newArr.push(
    arr[0]
      .charAt(0)
      .toUpperCase()
      .concat(arr[0].slice(1))
  );

  newArr = newArr.concat(capitalizeFirst(arr.slice(1)));

  return newArr;
}

//capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizefirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizefirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
capitalizefirst(["car", "taco", "banana"]);

function flatten(arr) {
  let newarr = [];

  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newarr = newarr.concat(flatten(arr[i]));
    } else {
      newarr.push(arr[i]);
    }
  }

  return newarr;
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);

//write a function where it accepts objects and it should return the sum of the values which are even.

function nestedEvenSum(obj, sum = 0) {
  // add whatever parameters you deem necessary - good luck!

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
  }

  return sum;
}
nestedEvenSum(obj2); // 10
nestedEvenSum(obj1); // 6

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

//write a function that accepts array of small alphabets and try to return the capitalized words.

function capitalizedWords(arr) {
  let newArr = [];

  if (arr.length === 1) return arr[0].toUpperCase();

  newArr.push(arr[0].toUpperCase());

  newArr = newArr.concat(capitalizedWords(arr.slice(1)));

  return newArr;
}

capitalizedWords(["i", "am", "learning", "recursion"]);

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};
//stringify the values in the object

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
