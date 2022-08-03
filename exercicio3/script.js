// Letra a
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Agua'
}

// Letra b

pokemon1.ataque = []

pokemon1.ataque.push({
    nome: 'investida',
    dano : 40,
    tipo : 'normal',
    precisao : 100
})


// Letra c

pokemon2.ataque = [...pokemon1.ataque] 


// Letra d

pokemon1.ataque.push({
    nome: 'folha navalha',
    dano: 45,
    precisao:100,
    tipo: 'grama'
})

pokemon2.ataque.push({
    nome:'jato de água',
    dano: 40,
    precisao: 100,
    tipo:'água'
})
 

console.log(pokemon1)
console.log(pokemon2)


