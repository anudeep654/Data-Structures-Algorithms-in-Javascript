//Basic recursion

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(4);

//factorial recursion

function factorialRecurssion(num) {
  //base case at which it returns

  //different input

  if (num === 1) return num;
  return num * factorialRecurssion(num - 1);
}

factorialRecurssion(4);
