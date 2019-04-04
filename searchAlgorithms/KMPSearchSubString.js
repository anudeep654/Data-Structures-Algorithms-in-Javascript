function KMPSearchSubString(str, pattern) {
  //a function that gives the substring table values in an array

  var prefixes = longestPrefix(pattern);
  let j = 0,
    i = 0;

  while (i < str.length) {
    if (str[i] === pattern[j]) {
      i++;
      j++;
    } else {
      if (j != 0) {
        j = prefixes[j - 1];
      } else {
        i++;
      }
    }
    if (pattern.length === j) {
      return true;
    }
  }
  return false;
}

function longestPrefix(str) {
  var table = [];
  let j = 0,
    index = 0;
  table.push(0);
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[j]) {
      table[i] = index + 1;
      j++;
      index++;
    } else {
      if (j != 0) {
        j = table[j - 1];
      }
      table.push(0);
    }
  }
  return table;
}

KMPSearchSubString("abxabcabcaby", "abcaby");
