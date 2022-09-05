// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

// ```jsx
const pokemon1 = 
    {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataque: []
}


;
// ```


// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const copyPokemon1 = {
    ...pokemon1, 
    nome:'Squirtle',
    tipo:'Água',
    
}


// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
copyPokemon1.ataque.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100,})


// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;



// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
    pokemon1.ataque = {
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100,}


// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
copyPokemon1.ataque = {
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100,}

// f) Imprima os dois objetos no console.


console.log('=================')
console.log('Pokemon Original:',pokemon1)
console.log('=================')
console.log('Cópia de Pokemon:',copyPokemon1)

