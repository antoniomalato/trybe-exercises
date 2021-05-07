
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  return arrays.reduce((acumulator, index) => acumulator.concat(index), [])
  // escreva seu código aqui
}
// console.table(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);