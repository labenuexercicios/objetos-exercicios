//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

const objSacolao1 = {
    nome: 'banana',
    preco: 4,
    disponibilidade: true
}

const objSacolao2 = {
    nome: 'maça',
    preco: 2,
    disponibilidade: false
}

const objSacolao3 = {
    nome: 'uva',
    preco: 12,
    disponibilidade: true
}

var sacolao = []

sacolao.push(objSacolao1, objSacolao2, objSacolao3)

console.log(sacolao)
