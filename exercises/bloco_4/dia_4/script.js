/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = "Sim";

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (properties in info) {

   console.log(info[properties] + ' e ' + info2[properties])
}
 */
/* let array1 = [2, 3, 6, 7, 10, 16, 0, 2, 50];

function maiorIndice(numeros) {
    let indiceMaior = 0;

    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice
        }
    }
    return indiceMaior

}

console.log(maiorIndice(array1))

function menorIndice(numeros) {
    let menorValor = 0;
    for (menor in numeros) {
        if (numeros[menorValor] > numeros[menor]) {
            menorValor = menor
            console.log(menor)
        }
    }
    return menorValor
}
console.log(menorIndice(array1))

*/
let arrayString = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
 
function maiorCaracteres(nomes) {
    let maiorNome = "";
    for (nome in nomes) {
        if (nomes[maiorNome] < nomes[nome]) {
            maiorNome = nomes[nome]
        }
    }
    return maiorNome
}

console.log(maiorCaracteres(arrayString));