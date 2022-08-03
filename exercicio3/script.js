/*const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// letra A
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
};
    console.log(pokemon2);

 //letra B

pokemon1.ataques = []

ataques = {
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}

pokemon1.ataques.push(ataques)
console.log(pokemon1)

//letra C
const copiaPokemon2 = {...pokemon2,
ataques}
console.log(copiaPokemon2)

//letra D
pokemon1.ataque = {nome: "Folha Navalha",
dano: 45,
precisao: 100,
tipo: "Grama"
}

console.log(pokemon1)

//letra E
pokemon2.ataque = {nome: "Jato de Água",
dano: 40,
precisao: 100,
tipo: "Água"
}
console.log(pokemon2)

/*const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
// letra A
const pokemon2 = {
    ...pokemon1}
    console.log(pokemon2);
    */

    const pokemon1 = {
        nome: "Bulbasaur",
        tipo: "Grama",
        nivel: 5
    };

//letra a
    const pokemon2 = {...pokemon1, nome: "Squirtle", tipo:"Água"}
    console.log(pokemon2)

//b
    pokemon1.ataques = []

    pokemon1.ataques.push({
        nome: "Investida",
        dano: 48,
        tipo: "Normal",
        precisao: 100
    })
    console.log("add objetos com o push", pokemon1)

//c
    pokemon2.ataques = [...pokemon1.ataques]
    console.log(pokemon2)

//d
    pokemon1.ataques.push({
        nome: "Folha navalha",
        dano: 45,
        tipo: "grama",
        precisao: 100
            })

    console.log(pokemon1)

//e
 pokemon2.ataques.push({
     nome: "Jato de água",
     dano: 40,
    precisao: 100,
     tipo: "Àgua"
 })

 console.log("primeiro pokemon", pokemon1)
 console.log("pokemon2", pokemon2)
            