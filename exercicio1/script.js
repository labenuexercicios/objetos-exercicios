// EXERCÍCIO 1
// Crie um array vazio chamado `sacolao`
const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão.
const fruta1 = {
nome: 'Banana',
preço: 2,
disponibilidade: true};
const fruta2 = {
nome: 'Melancia',
preço: 15,
disponibilidade: false};
const fruta3 = {
nome: 'Uva',
preço: 5,
disponibilidade: true};

/*b) Adicione os objetos ao array `sacolao`
utilizando o método **`push()`**/
sacolao.push(fruta1, fruta2, fruta3);

/*c) Imprima a o array `sacolao`, e certifique-se de que agora ela
seja um array **com três objetos**/
console.log('Frutas do Sacolão:', sacolao);