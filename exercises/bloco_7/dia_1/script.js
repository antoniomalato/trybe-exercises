//Exercício 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const number = () => {
  oddsAndEvens[0] = 2
  oddsAndEvens[1] = 3
  oddsAndEvens[2] = 4
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 13

  return oddsAndEvens
}
const sort = number();

console.log(`Os números ${sort} se encontram de forma crescente`)

//Exercício 1 / parte II

const fatorial = number => {
  let count = 1 ;
  for(let index = 1; index < number; index += 1) {
    count *= index
  }
  return count
}

console.log(fatorial(6))