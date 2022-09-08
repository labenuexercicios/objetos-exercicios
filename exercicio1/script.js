/*
Crie um array vazio chamado `sacolao`,
e siga os passos abaixo:
*/

const sacolao = []

/*
a) Crie três objetos que vão representar frutas do sacolão.
Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```
*/

const nome = {
    nome: "Banana",
    preco: 5.9,
    disponibilidade: true
}

const nome1 ={
    nome: "Maçã",
    preco: 4.40,
    disponibilidade: false    
}

const nome2 = {
    nome: "Melão",
    preco: 8.34,
    disponibilidade: true
}

/*
b) Adicione os objetos ao array `sacolao` utilizando
o método **`push()`**
*/

sacolao.push(nome, nome1, nome2)


/*
c) Imprima a o array `sacolao`, e certifique-se de 
que agora ela seja um array **com três objetos**
*/

console.log(sacolao);