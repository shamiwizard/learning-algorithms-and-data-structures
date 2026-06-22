class HashTable {
  constructor(size = 53) {
    this.keysMap = Array.from({length: size}, () => [])
  }

  _hash(key) {
    let hash = 0;
    for(let i = 0; i < 10 && i < key.length; i++) {
      let code = key.charCodeAt(i) - 96;

      hash += code;
    }

    return hash % 11;
  }

  set(key, value) {
    const index = this._hash(key)
    const valuesAtIndex = this.keysMap[index]

    let found = valuesAtIndex.find(([k]) => key === k)

    if(found) {
      found[1] = value
    } else {
      valuesAtIndex.push([key, value])
    } 

    return this;
  }

  get(key) {
    const map = this.keysMap[this._hash(key)]
    let value

    if(map.length === 0) {
      value = undefined;
    } else if(map.length > 1) {
      value = map.find(([k]) => key === k)[1]
    } else {
      value = map[0][1]
    }

    return value
  }
  keys() {
    return this.keysMap.flatMap((array) => array.map((a) => a[0]))
  }

  values() {
    return this.keysMap.flatMap((array) => array.map((a) => a[1]))
  }
}


const hash = new HashTable()

hash.set("test", 12).set("test2", 35).set("user", 1).set("Ilike",9).set("testtest",31)
console.log(hash.get("test"))
console.log(hash.get("test2"))
console.log(hash.get("user"))
console.log(hash.get("testtest"))
console.log(hash.get("my trie"))
console.log(hash.keys())
console.log(hash.values())

console.log(hash)

