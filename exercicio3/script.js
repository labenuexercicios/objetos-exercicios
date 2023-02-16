
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

console.log(pokemon1)
pokemon1.ataques = []


const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao : 100,
}

pokemon1.ataques.push(ataque)

const ataques2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao : 100,
}
pokemon1.ataques.push(ataques2)


const pokemon2 = {
    ...pokemon1,
    nome:"Squirtle",
    tipo : "Água",
    nivel:5
}
console.log(pokemon2)
pokemon2.ataques = [...pokemon1.ataques]

const ataques3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao : 100,
}

pokemon2.ataques.push(ataques3)