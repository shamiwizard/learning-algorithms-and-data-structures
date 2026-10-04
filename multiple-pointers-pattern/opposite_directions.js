function oppsDirect(string) {
  let front = 0
  let back = string.length - 1
  let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let array = string.split("")

  while(front < back) {
    if(vowels.has(array[front].toLowerCase()) && vowels.has(array[back].toLowerCase())) {
      [array[front], array[back]] = [array[back], array[front]]
      front++;
      back--;
      continue;
    }

    if(!vowels.has(array[front].toLowerCase())) {
      front++;
    }

    if(!vowels.has(array[back].toLowerCase())) {
      back--
    }
  }

  return array.join("")
}

[
  ["icecreAm", "Acecreim"],
  ["hello world", "hollo werld"],
  ["LeetCode", "LeotCede"],
  ["rhythm", "rhythm"],
  ["aA", "Aa"]

].forEach((v) => {
  got = oppsDirect(v[0])
  console.log(got, v[1], got === v[1])
})
