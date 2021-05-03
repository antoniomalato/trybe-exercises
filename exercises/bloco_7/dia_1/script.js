/* //Exercício 1

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
  let count = 1;
  for (let index = 1; index < number; index += 1) {
    count *= index
  }
  return count
}

console.log(fatorial(6))

//Exercício 2 / parte II


const maiorPalavra = string => {
  let palavras = string.split(' ');
  let maior = 0;
  let final = "";

  for (let palavra of palavras){
    if (palavra.length > maior) {
      maior = palavra.length
      final = palavra
    }
    
  }
  return final
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))
 */
//Exercício 3 / parte II
/* let clickCount = 0;
let textToDisplay = document.getElementById('text');

document.getElementById('button_test').addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1)

 */