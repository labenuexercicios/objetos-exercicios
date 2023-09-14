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
let car1 = {
  nome: 'tomate',
  preco: 10.00,
  disponibilidade: true
}
let car2 = {
  nome: 'cebola',
  preco: 5.00,
  disponibilidade: true
}
let car3 = {
  nome: 'batata',
  preco: 15.00,
  disponibilidade: false
}
sacolao.push(car1)
sacolao.push(car2)
sacolao.push(car3)
console.log(sacolao);