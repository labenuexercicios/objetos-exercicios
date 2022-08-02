
//Crie um array vazio chamado sacolao
const sacolao=[]
//a) Crie três objetos que vão representar frutas do sacolão
const fruta1={
    Nome:"morango",
    preco: 5.25,
    disponibilidade: true,
}

const fruta2={
    Nome:"manga",
    preco: 2.25,
    disponibilidade: false,
}

const fruta3={
    Nome:"jaca",
    preco: 3.55,
    disponibilidade: true,
}

//b) Adicione os objetos ao array sacolao utilizando o método push()

sacolao.push(fruta1,fruta2,fruta3)
//c) Imprima a o array sacolao, e certifique-se de que agora ela seja um array com três objetos
console.log("EXERCICIO 1",sacolao)