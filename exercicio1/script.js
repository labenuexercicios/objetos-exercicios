// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos
// devem ter as seguintes propriedades: 
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const sacolao =[]

let fruta1 = {fruta: "Maçã", 
    preco: 8, 
    disponibilidade: true}
let fruta2 = {fruta: "banana", 
    preco: 10, 
    disponibilidade: false,}
let fruta3 = {fruta: "laranja",
    preco: 5, 
    disponibilidade: true}

sacolao.push(fruta1,fruta2,fruta3)

console.log("Escolha suas frutas prediletas:", sacolao)