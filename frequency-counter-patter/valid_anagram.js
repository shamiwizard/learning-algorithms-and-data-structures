function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};

  for(let c of str1) {
    frequencyCounter1[c] = (frequencyCounter1[c] || 0) + 1;
  }

  for(let c of str2) {
    if(!frequencyCounter1[c]) {
      return false;
    } else {
      frequencyCounter1[c]--;
    }
  }

  return true;
}

console.log("true :", validAnagram("anagram", "nagaram"))
console.log("false :", validAnagram("rat", "car"))
console.log("true :", validAnagram("cinema", "iceman"))

