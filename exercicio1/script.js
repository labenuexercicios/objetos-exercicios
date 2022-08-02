// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
const maca = {
    nome: 'maça',
    preco: 2.78,
    disponibilidade: true
}

const banana = {
    nome: 'banana',
    preco: 3.99,
    disponibilidade: true
}

const frutaDoConde = {
    nome: 'fruta do conde',
    preco: 8.99,
    disponibilidade: false
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(maca)
sacolao.push(banana)
sacolao.push(frutaDoConde)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log("Impriminddo array sacolao com tres objetos: ",sacolao)
