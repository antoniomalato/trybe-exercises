/*
1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
2 Adicione a tag div com a classe main-content como filho da tag body ;
3 Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
4 Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
5 Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
6 Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

9 Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

 */
//passo 1
let body = document.getElementsByTagName('body')[0];
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM como filho da tag body';
body.appendChild(h1)

//passo 2
let div = document.createElement('div');
div.className = 'main-content';
body.appendChild(div)

//passo 3
let div2 = document.createElement('div');
div2.className = 'center-content';
div.appendChild(div2)

//passo 4
let p = document.createElement('p');
p.innerText = 'Programação na Trybe';
div2.appendChild(p);

//passo 5
let div3 = document.createElement('div');
div3.className = 'left-content';
div.appendChild(div3)

//passo 6
let div4 = document.createElement('div');
div4.className = 'right-content';
div.appendChild(div4)

//passo 7
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
div3.appendChild(image)

//passo 8 
let lista = document.createElement('ul');

for (let index = 0; index < 10; index += 1) {
    let item = document.createElement('li');
    item.innerText = index;
    lista.appendChild(item)
}

div4.appendChild(lista);

for (let index = 0; index < 3; index +=1) {
    let h3 = document.createElement('h3');
    div.appendChild(h3);

} 