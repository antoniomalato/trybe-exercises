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

const showParam = (obj) => {
  let comprimento = Object.keys(obj)
  return comprimento.length
}
console.log(showParam(lesson1))

const showresult = (obj) => { Object.values(obj) }

console.log(showresult(lesson1));



const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const showStudents = (obj) => {
  let total = 0;
  let array = Object.keys(obj);

  for(let index = 0; index < array.length; index += 1) {
    let count = array[index];
    total += obj[count].numeroEstudantes
  }
  return total
}

console.log(showStudents(allLessons));


const valueFuc = (obj, number) => { Object.values(obj)[number];
  console.log(valueFuc(allLessons))
}

