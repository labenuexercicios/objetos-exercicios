const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemonCopia = { 
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

pokemon1.ataques=[]
pokemon1.ataques.push(
    nome= "Investida",
    dano= 40,
    tipo= "Normal",
    precisao= 100
)

pokemon1.ataques2=[]
pokemon1.ataques2.push(
    nome= "Folha da Navalha",
    dano= 45,
    tipo= "Grama",
    precisao= 100
)

pokemonCopia.ataques=[]
pokemonCopia.ataques.push(
    nome= "Investida",
    dano= 40,
    tipo= "Normal",
    precisao= 100
)

pokemonCopia.ataques2=[]
pokemonCopia.ataques2.push(
    nome= "Jato de Àgua",
    dano= 40,
    tipo= "Água",
    precisao= 100
);

console.log(pokemon1)
console.log(pokemonCopia)
