const sacolao = [];

// a)

const fruta1 = {
    nome: 'Maçã',
    preco: 2,
    disponibilidade: true
};

const fruta2 = {
    nome: 'Uva',
    preco: 5,
    disponibilidade: false
};

const fruta3 = {
    nome: 'manga',
    preco: 10,
    disponibilidade: true
};

// b)

sacolao.push(fruta1,fruta2,fruta3);

// c)

console.log(sacolao);

// teste de busca de valor de objeto

console.log(sacolao[0].nome,sacolao[0].preco,sacolao[0].disponibilidade);

console.log(sacolao[1].nome,sacolao[1].preco,sacolao[1].disponibilidade);

console.log(sacolao[2].nome,sacolao[2].preco,sacolao[2].disponibilidade);