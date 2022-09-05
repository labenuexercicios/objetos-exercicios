// exercicio 3 - a)
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {...pokemon1, nome: "Squirtle",tipo:"Água"}
console.log(pokemon1)
console.log(pokemon2)

// exercicio 3 - b)

pokemon1.ataques = []

console.log(pokemon1.ataques)

const ataque1 = {nome: "Investida",
dano: 40,
tipo:"Normal",
precisao:100
}

pokemon1.ataques.push(ataque1)
console.log(pokemon1.ataques)

// exercicio 3 - c)
console.log(pokemon2)
pokemon2.ataques =[]
console.log(pokemon2)

pokemon2.ataques = [...pokemon1.ataques]
console.log(pokemon2)

// exercicio 3 - d)
pokemon1.ataques.push(
    {nomeAtaque:"Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao:100})
    console.log(pokemon1)

    // exercicio 3 - e)
    pokemon2.ataques.push({
        nomeAtaque2:"Jato de Água",
        dano: 40,
        tipo:"Água",
        precisao:100
    })

    console.log(pokemon1)
    console.log(pokemon2)
