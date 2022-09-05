//# Exercício 1

//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

//```jsx
//nome: string;
//preco: number;
//disponibilidade: boolean;
//```
var frutas = {
    nome: "maçã",
    preço: 2.99,
    fresca: true,
}
var frutas2 = {
    nome: "uva",
    preço: 0.99,
    fresca: false,
}
var frutas3 = {
    nome: "banana",
    preço: 2,
    fresca: true,
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(frutas, frutas2, frutas3)


//c) Imprima a o array `sacolao`, e cerifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao)