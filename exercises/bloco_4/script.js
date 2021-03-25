/* //Exercício 1

let a = 5;
let b = 11;

console.log("soma " + (a + b));
console.log("subtração" + (a - b));
console.log("multiplicação" + (a * b));
console.log("divisao" + (a / b));
console.log("modulo" + (a % b));

 */

/* Exercício 2 */


/* let a = 10;
let b = 20;

if (a > b) {
    (console.log("a é maior que b"))
} else {
    (console.log("b é maior que a"))
} */

/* Exercício 3 */
/* 
let a = 14;
let b = 16;
let c = 17;

if (a > b && a > c) {
    console.log(a + " é o valor maior")
} else if (b > a && b > c){
    console.log(b + " é o valor maior")
} else {
    (console.log(c + " é o valor maior"))
} */

/* Exercício 4 */
/* 
let a = 0;

if (a > 0) {
    console.log("positivo")
} else if (a < 0) {
    console.log("negativo")
} else{
    console.log("valor 0")
} */

/* Exercício 5 */
/* 
let a = 0;
let b = 60;
let c = -70;

let soma = a + b + c;
let positivo = a > 0 && b > 0 && c > 0;

if (positivo) {
    if (soma === 180) {
        console.log(true)
    } else {
        console.log(false)
    };
} else {
    console.log("Erro: ângulo inválido");
} */
/* 
let xadrez = "cavalo";

switch (xadrez.toLowerCase()) {
    case 'rei':
        console.log("Rei -> Uma casa apenas para qualquer direção.");
        break;
    case 'bispo':
        console.log("Bispo -> Qualquer casa que seja na diagonal");
        break;
    case 'peao':
        console.log("Torre -> Apenas para a casa da frente");
        break;
    case 'Cavalo':
        console.log("Casas horizontal e vertical");
        break;
    default:
        console.log("Erro: Peça invalida");
        break
};

 */

/* let a = 34;
let b = 4;
let c = 4;

let isEven = false;

if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
    isEven = true
} 

console.log(isEven)
 */

let custo = 100;
let venda = 150;

if (custo > 0 && venda > 0) {
    let totalCusto = custo * 1.2;
    let totalVenda = (venda - totalCusto) * 1000;
    console.log(totalVenda);
} else {
    console.log("Erro")
}
