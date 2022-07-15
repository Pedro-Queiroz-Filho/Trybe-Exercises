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
        marguerita: {
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
  // Informaçoes objeto

  const pedido = Object.entries(order.order);
  const entragador = pedido[2][1].deliveryPerson;
  const endereço = order.address;

  //console.log(endereço);
  

  
  
[3]

  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  console.log(`Olá ${entragador}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${endereço.street}, Nº:${endereço.number}, AP: ${endereço.apartment}`);
  }
  
  orderModifier(order);
  