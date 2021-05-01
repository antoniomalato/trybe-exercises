const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(typeof myFizzBuzz, 'function');
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'O número precisa ser divisivel por 3 e 5');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'O número precisa ser divisível por 3');
assert.strictEqual(myFizzBuzz(5), 'buzz', 'O número precisa ser divisível por 3 e 5');
assert.strictEqual(myFizzBuzz(4), 4, 'O número não é divisível por 3 e 5');
assert.strictEqual(myFizzBuzz('4'), false, 'O parametro precisa ser um número');

