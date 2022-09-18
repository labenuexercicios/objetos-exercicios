/*Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```

b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos** */

const sacolao = [];

sacolao.push(
  { fruta: "manga", preco: 2, tem: true },
  { fruta: "uva", preco: 6, tem: false },
  { fruta: "goiaba", preco: 3, tem: true }
);

console.log(sacolao);
