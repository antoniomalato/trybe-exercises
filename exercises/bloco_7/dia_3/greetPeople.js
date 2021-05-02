const assert = require('assert')

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let output = [];
  for (const person in people) {
    let sum = greeting + people[person]
    output.push(sum)
  }
  return output;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result)