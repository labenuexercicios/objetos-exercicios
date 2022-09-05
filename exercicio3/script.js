
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"

console.log(pokemon2)

pokemon1.ataques =[]
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
})

console.log(pokemon1)

pokemon2.ataques = pokemon1.ataques.slice()
console.log(pokemon2)

pokemon1.ataques.push({
    ataques: "folha navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100,
})
console.log(pokemon1)

pokemon2.ataques.push({
    ataques: "Jato de água",
    dano: 40,
    tipo: "água",
    precisao: 100,
})

console.log(pokemon2)


