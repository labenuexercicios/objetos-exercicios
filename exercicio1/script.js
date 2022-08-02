// Criando o array.
const sacolao = [];

// Criando os objetos.
const fruit1 = {
    nome: 'Maça',
    preço: 5,
    disponibilidade: true
}
const fruit2 = {
    nome: 'Banana',
    preço: 7,
    disponibilidade: true
}
const fruit3 = {
    nome: 'Abacaxi',
    preço: 10,
    disponibilidade: false
}

// Adicionando os objetos ao array.
sacolao.push({ fruit1 }, { fruit2 }, { fruit3 });

// Imprimindo o array e a quantidade de objetos.
console.log('Array Sacolao:', sacolao);
console.log('Quantidade de objetos:', sacolao.length);