const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R: ${order.address.street}, N ${order.address.number}, AP: ${order.address.apartment}`
}
console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const person = order.name = 'Luiz Silva';
  const flavor1 = order.order.margherita = 'muzzarela';
  const flavor2 = order.order.margherita = 'calabresa'
  const soda = order.order.drinks.coke = 'muzzarela';
  const pay = order.payment = 50;


  return `Olá ${person}, o total do seu pedido de ${flavor1} e ${flavor2} e ${soda} é ${pay}`
}
console.log(orderModifier(order));

//Parte II - Exercício 1

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addItem = (obj, key, value) => {
  obj[key] = value
}

console.log(addItem(lesson2, 'turno', 'noite'))

const showObj = (obj) => { Object.keys(obj) }

console.log(showObj(lesson1));

const showParam = (obj) => {Object.keys(obj)}


/*
1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3-Crie uma função para mostrar o tamanho de um objeto.
4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 6-Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
*/