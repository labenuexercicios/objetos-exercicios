// Ultilizar espalhamento..

 const pokemon1 = {
 	nome: "Bulbasaur",
	tipo: "Grama",
 	nivel: 5,
 };
 console.log(pokemon1)

// Letra (A)
// comando de expressao copia (...)
copiaPokemon = {...pokemon1} 

copiaPokemon.nome = "Squirtle"
copiaPokemon.tipo = "Agua"
console.log(copiaPokemon)

// Letra (B)

pokemon1.ataques=[]
console.log(pokemon1)

pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
})
// console.log(pokemon1)

// Letra (C)

copiaPokemon.ataques = [...pokemon1.ataques]

pokemon1.ataques.push({
    Nome: "Folha na Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
})
// console.log(pokemon1)

// Letra (D)

copiaPokemon.ataques.push({
    Nome: "Jato de Água",
    Dano: 40 ,
    Tipo: "Agua",
    Precisão: 100 ,
})

// Letra (F)
console.log(pokemon1, copiaPokemon)