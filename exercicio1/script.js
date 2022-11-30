//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const objeto1 = {
    nome: "Maçã",
    preco: 1.50,
    disponibilidade: true
};

const objeto2 = {
    nome: "Banana",
    preco: 6.35,
    disponibilidade: false
};

const objeto3 = {
    nome: "Uva",
    preco: 5.00,
    disponibilidade: true
};

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(objeto1,objeto2,objeto3)

console.log(sacolao)