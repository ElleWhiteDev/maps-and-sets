{ 1, 2, 3, 4 }

ref 

{ [1,2,3] => true }
{ [1,2,3] => false }

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

function vowelCount(str) {
  const vowels = 'aeiou';
  const map = new Map();
  for (let char of str) {
    if (vowels.includes(char)) {
      let count = map.get(char) || 0;
      map.set(char, count + 1);
    }
  }
  return map;
}
