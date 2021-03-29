let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: '34',
    medal: {
        golden: 2,
        silver: 3,
    }
}


player.bestInWorld = [2006, 2007, 2008, 2009, 2018]


console.log("A jogadora " + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo 6 vezes')

console.log("A jogadora possui " + player.medal.golden + " de ouro e " + player.medal.silver + ' medalhas de prata' )
