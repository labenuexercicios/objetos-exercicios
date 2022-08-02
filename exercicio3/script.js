// Objeto original.
const pokemon = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

// Criando uma cópia do objeto original.
const copyPokemon = {
    ...pokemon,
    nome: 'Squirtle',
    tipo: 'Água'
};
// console.log('Pokemon 1:', pokemon, '\nPokemon 2:', copyPokemon);

// Adicionando a propriedade ataques ao objeto original.
pokemon.ataques = [];
pokemon.ataques.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
});
// console.log('Pokemon 1 Ataques:', pokemon);

// Adicionando a propriedade ataques à cópia.
copyPokemon.ataques = [...pokemon.ataques];
// console.log('Pokemon 2 Ataques:', copyPokemon.ataques);

// Adicionando mais um ataque ao objeto original.
pokemon.ataques.push({
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
});
// console.log('Pokemon 1 Ataques:', pokemon);

// Adicionando mais um ataque à cópia.
copyPokemon.ataques.push({
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
});
// console.log('Pokemon 2 Ataques:', copyPokemon);

// Imprimindo os dois objetos.
console.log('Pokemon 1:\n', pokemon, '\nPokemon 2:\n', copyPokemon);