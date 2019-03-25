Recursion :

Normally functions are built on call stack.For more information open call stack in chrome debugging tools and check the methods in it.<br />

opening a function will add that function into call stack.<br />
functions being pushed on the call stack and popped out of the call stack.<br />

but recursion keeps on pushing the functions in the call stack<br />

Essential parts of recursive function<br />

-> Base Case(When the function needs to stop.)<br />
->different input<br />

->There are cases where we will get maximum call stack size exceeded.<br />

HELPER METHODS RECURSION

we will maintain 2 functions namely inner function and outer function

```javascript
function collectOddValues(num) {
  //outer function

  let result = [];

  function innerHelper(val) {
    //inner function

    if (val.length === 0) return;

    if (val[0] % 2 !== 0) {
      result.push(val[0]);
    }
    innerHelper(val.slice(1));
  }

  innerHelper(num);

  return result;
}

collectOddValues([0, 1, 3, 4, 5]);
```

For arrays use methods like slice,spread operator,concat to make coppies of arrays so you donot mutate them.

Remember that strings are immutable so we need to use methods like slice,substr(takes 2 params,that slice with start and end),substring(takes 2 params that slice with start and end-1) ;

to mmake copies of an object use object.assign or the spread operator

Object.assign(target,source) //it will overide the same object keys in target and also the value that returns from object.assign will get new values.

```javascript
function countOddValues(arr) {
  let newarr = [];

  if (arr.length === 0) return newarr;
  if (arr[0] % 2 !== 0) {
    newarr.push(arr[0]);
  }

  newarr = newarr.concat(countOddValues(arr.slice(1)));
  return newarr;
}

countOddValues([1, 2, 3, 4, 5, 6, 7]);
```

Array.isArray =>To check whether the variable is aarray or not

variable instanceof Array -> to check whether the variable is array or not.

arr.slice(start,end) -> start will happen from index 0 to the end ,if you are not mentioning end then it will give the full set.z

arr.substr(start,end) -> starts from 0 -> it will not give the end value.

arr.substr(start,end) ->will give the end value.
