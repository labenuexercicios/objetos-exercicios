const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

console.log(pokemon1)

const copiaPokemon1 = {... pokemon1}
pokemon1.nome = "Squirtle",
pokemon1.tipo = "Água"

console.log(copiaPokemon1)

pokemon1.ataques = []

const ataques = {

    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100

}

pokemon1.ataques.push(ataques)
console.log(pokemon1)

copiaPokemon1.ataques= [...pokemon1.ataques]
console.log(copiaPokemon1)

pokemon1.ataques.push({
nome: "Folha Navalha",
dano: 45,
tipo: "Grama",
precisao: 100
})

copiaPokemon1.ataques.push({
    nome: "Jato de Agua",
    dano: 40,
    tipo: "Água",
    precisao: 100
    })

console.log(pokemon1,copiaPokemon1)