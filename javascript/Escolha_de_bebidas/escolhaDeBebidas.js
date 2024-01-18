const bebida = prompt('Qual bebida você vai querer?');
let valor = '';

switch(bebida) {
  case 'Café':
    valor = '2,00';
    console.log(`${bebida} custa R$ ${valor}`);
    break
  case 'Leite':
    valor = '3,00';
    console.log(`${bebida} custa R$ ${valor}`);
    break
  case 'Chá':
    valor = '3,50';
    console.log(`${bebida} custa R$ ${valor}`);
    break
  default: 
    console.log('A escolha deve ser feita entre café, leite ou chá!');
}