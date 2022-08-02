const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"

pokemon1.ataques = [
    {
        ataque: "Folha Navalha",
        dano: 45,
        precisao: 100,
        tipo: "Grama",
    }
];

pokemon2.ataques = [
    {
        ataque: "Jato de Água",
        dano: 40,
        precisao: 100,
        tipo: "Água",
    }
]

console.log(pokemon1.ataques)
console.log(pokemon2.ataques)