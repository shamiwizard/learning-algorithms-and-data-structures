// O(n * k log k)
function groupAnagramsSort(anagrams) {
  let counter = {}
  let result = [];

  anagrams.forEach((anagram) => {
    let sorted = anagram.split("").sort().join("")

    if(counter[sorted] === undefined) {
      let index = result.push([anagram]) - 1
      counter[sorted] = index
    } else {
      result[counter[sorted]].push(anagram)
    }
  })

  return result
}

console.log('[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] :', groupAnagramsSort(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log('[""] :', groupAnagramsSort([""]))
console.log()

// O(n * k)
function groupAnagrams(anagrams) {
  let counter = {}

  anagrams.forEach((anagram) => {
    let array = new Array(26).fill(0)

    for(c of anagram) {
      let charIndex = c.charCodeAt(0) - 97
      array[charIndex] += 1
    }

    let wordKey = array.join("#")

    if(counter[wordKey] === undefined) {
      counter[wordKey] = [anagram]
    } else {
      counter[wordKey].push(anagram)
    }
  })

  return Object.values(counter)
}
console.log('[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] :', groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log('[""] :', groupAnagrams([""]))
