// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.


let sacolao = []

const frutas = {
    nome: 'laranja',
    preco: 3.00,
    disponibilidade: true,

}
const frutas2 = {
    nome: 'banana',
    preco: 3.50,
    disponibilidade: false,
}
const frutas3 = {
    nome: 'manga',
    preco: 4.20,
    disponibilidade: true,
}
sacolao.push(frutas, frutas2, frutas3)
console.log(sacolao)
