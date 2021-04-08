function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//Função que cria os dias do calendario e adiciona como filhos da tag <ul> com ID 'days'
function createDays() {
    let daysList = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {

        let numbersDay = document.createElement('li');
        numbersDay.innerHTML = dezDaysList[index];
        numbersDay.className = 'day';

        if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
            numbersDay.classList.add('friday');
        }
        if (dezDaysList[index] === 24 || dezDaysList[index] === 31 === dezDaysList[index] === 25) {
            numbersDay.classList.add('holiday')
        }
        daysList.appendChild(numbersDay);
    }
}
createDays();

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

function holiday(string) {
    const button = document.createElement('button');
    button.innerText = 'Feriados';
    button.id = 'btn-holiday';

    const buttons_container = document.querySelector('.buttons-container');
    buttons_container.appendChild(button);
}
holiday();

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday"

