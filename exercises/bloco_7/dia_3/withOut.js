const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
      /*   console.log(index -= 1)
        console.log(len -= 1) */
    }
  }

  return arr;
}

/* console.log(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4])
 */

// implemente seus testes aqui
const numberVerify = [1, 2, 3, 4];


assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4])
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])

console.log(numberVerify)
myRemoveWithoutCopy(numberVerify, 1);
console.log(numberVerify)
assert.strictEqual(numberVerify.length, 3);
console.log(numberVerify)

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])