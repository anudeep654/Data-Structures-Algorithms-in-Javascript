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
