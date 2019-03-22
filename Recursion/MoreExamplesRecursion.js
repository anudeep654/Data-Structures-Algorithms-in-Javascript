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
