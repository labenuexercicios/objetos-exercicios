const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const copiaPokemon = {...pokemon1};
copiaPokemon.nome = 'Squirtle';
copiaPokemon.tipo = 'Água';

pokemon1.ataques = [];
const ataque1 = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}

pokemon1.ataques.push(ataque1);

copiaPokemon.ataques = [...pokemon1.ataques]

const ataque2 = {
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}
pokemon1.ataques.push(ataque2);

const ataque3 = {
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
}
copiaPokemon.ataques.push(ataque3);

console.log("Pokémon original:", pokemon1);
console.log("Pokémon copiado", copiaPokemon);
