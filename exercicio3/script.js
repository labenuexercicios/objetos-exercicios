// Crie um if para cada variável, checando as seguintes afirmacões:

// Se a pessoa tem 18 anos ou mais;
// Se a pessoa terminou o ensino médio;
// Se a pessoa NÃO está cursando alguma faculdade;
// Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir que a afirmacão não é verdadeira.

// let idade = +prompt("Qual sua idade?");
// let ensinoMedio = confirm("Terminou Ensino Medio?");

// if (idade >= 18) {
//   console.log("É maior de idade");
// } else {
//   console.log("É menor de idade.");
// }

// if (ensinoMedio === true) {
//   console.log("Terminou o ensino medio");
//   let ensinoSuperior = confirm("Esta fazendo faculdade?");
//   if (ensinoSuperior === true) {
//     console.log("Esta cursando faculdade");
//   } else {
//     console.log("Nao esta cursando faculdade.");
//   }
// } else {
//   console.log("Não terminou o ensino medio.");
// }

// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

let pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

let novoPokemon1 = { ...pokemon1, nome: "Squirtle", tipo: "Água" };

console.log(novoPokemon1);

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`.
//Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo.
//Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1["ataqueArray"] = [];

console.log(pokemon1);

let todosAtaques = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
};

console.log(pokemon1.ataqueArray.push(todosAtaques));

console.log(pokemon1);

let newPokemon = novoPokemon1;

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
newPokemon["ataques"] = [];
console.log(newPokemon);

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

const adicionarAtaquePokemon1 = pokemon1;

adicionarAtaquePokemon1["ataque substituto"] = {
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Grama",
  precisao: 100,
};

console.log(adicionarAtaquePokemon1);

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

let ataquePoderoso = {
  nome: "Jato de Água",
  dano: 40,
  precisao: 100,
  tipo: "Água",
};

newPokemon.ataques = ataquePoderoso;

console.log(newPokemon);

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

// ```text
// nome: Investida;
// dano: 40;
// tipo: Normal;
// precisao: 100;
// ```

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

// f) Imprima os dois objetos no console.
