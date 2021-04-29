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
/* Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00." */

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