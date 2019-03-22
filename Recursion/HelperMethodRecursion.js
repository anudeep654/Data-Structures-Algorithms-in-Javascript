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
