const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log("Objeto original: ",pokemon1)
// Criando copia do objeto pokemon
const pokemonCopia = {...pokemon1}
console.log("Copia do objeto pokemom: ",pokemonCopia)
// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
pokemonCopia.nome = 'Squirtle'
pokemonCopia.tipo = 'agua'
console.log("Copia do objeto com nome e tipo atualizado: ",pokemonCopia)

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
pokemon1.ataque = []

pokemon1.ataque.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
})

console.log("Objeto original com a nova propiedade: ",pokemon1)

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
pokemonCopia.ataque = {...pokemon1.ataque}
console.log("Copia com a nova propiedade: ",pokemonCopia)

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataque = {...pokemon1.ataque, 
    nome: 'folha navalha', 
    dano: 45, 
    tipo: 'agua', 
    precisao: 100}
console.log('Adicionando o ataque folha navalha: ', pokemon1)

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
pokemonCopia.ataque = {...pokemonCopia.ataque, 
    nome: 'Jato de agua', 
    dano: 40, 
    tipo: 'agua', 
    precisao: 100}
// f) Imprima os dois objetos no console.
console.log("Imprimindo objeto original; ",pokemon1)
console.log("\n\n\nImprimindo a copia: ",pokemonCopia)
