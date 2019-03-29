function stringSearch(longString, shortString) {
  let num = 0,
    length = 0;

  //PsuedoCode
  //loop over the longer string
  //loop over the shorter string
  //match the strings while iteratting
  //if they are not matching break out of the loop
  //if matched keep going
  //finally return the count.

  for (let i = num; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (longString[num] === shortString[j]) {
        if (shortString.length - 1 === j) {
          length++;
          num++;
          break;
        } else {
          num++;
        }
      } else {
        num++;
        break;
      }
    }
  }

  return length;
}

stringSearch("anudeepanu anu is a anu boyanu", "anu");
