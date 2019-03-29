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

function stringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (short.length - 1 === j) {
        count++;
      }
    }
  }
  return count;
}

stringSearch("lolo lolos", "lo");

//Kmp search is really nice.

//first take the substring and do some math work

//i j
//abcdghabcgad
//[0 0 1 0 0 0 2]
//when checking in main string always check one by one
