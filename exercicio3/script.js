const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const novoPokemon = {...pokemon1}
novoPokemon.nome = "Squirtle"
novoPokemon.tipo = "Água"
novoPokemon.ataques = {
        nome: "Jato de Água",
        dano: 48,
        tipo: "Água",
        precisao: 100,
    }

pokemon1.ataques = []

const objeto1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}

pokemon1.ataques.push(objeto1)
pokemon1.ataques.push(
    {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
    }
)


console.log(pokemon1)
console.log(novoPokemon)





