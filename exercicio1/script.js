// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

const sacolao=[]
console.log('==========')

     
    const ex10= {
    nome: 'Laranja',
    preco: 1,
    disponibilidade: true}
    
    const ex11 = { 
     nome: 'uva',
     preço: 5,
     disponibilidade: false}
     const ex12 = { 
    nome: 'morango',
    preço: 20,
    disponibilidade: false}
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
const addSacolao = sacolao.push(ex10, ex11, ex12)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log('Impressão do sacolao:',sacolao)
console.log('==========')




