//Criação do objeto Carrinho

console.log("Criando array vazio Sacolao");

const sacolao = []

frutasSacolao = [

    {
        nome: "Manga",
        preco: 25,
        disponibilidade: true
    },

    {
        nome: "Morando",
        preco: 35,
        disponibilidade: false
    },

    {
        nome: "Jaca",
        preco: 74,
        disponibilidade: true
    },

]

sacolao.push(frutasSacolao)

console.log("Temos disponivel em nosso sacolão os seguintes itens:", sacolao);


// // Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// const sacolao = {};
// console.log("Array Vazio: ", sacolao);
// console.log("----------------------------------");

// //Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:

// const frutas = [
//   {
//     nome: "banana",
//     preço: 1.5,
//     disponibilidade: true,
//   },
//   {
//     nome: "kiwi",
//     preço: 5.0,
//     disponibilidade: true,
//   },
//   {
//     nome: "morango",
//     preco: 7.5,
//     disponibilidade: false,
//   },
// ];

// //Adicione os objetos ao array `sacolao` utilizando o método *`push()`*

// sacolao.frutas = [];
// sacolao.frutas.push(frutas);

// //Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array *com três objetos*

// console.log("Array com 3 objetos criados: ", sacolao.frutas);

