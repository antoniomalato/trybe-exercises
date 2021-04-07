/*

Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
 */
let body = document.getElementsByTagName('body')[0];
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM como filho da tag body';
body.appendChild(h1)

let div = document.createElement('div');
div.className = 'main-content';
body.appendChild(div)
console.log(h1)

let div2 = document.createElement('div');
div2.className = 'center-content';
body.appendChild(div2)