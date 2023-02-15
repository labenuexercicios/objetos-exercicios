const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//A)
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",
    
} 

console.log(pokemon1)
console.log(pokemon2)

//B)
pokemon1.ataques = []

//C-)

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}

const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,  
}

const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,  
}


pokemon1.ataques.push(ataque)

//C)
pokemon2.ataques = [...pokemon1.ataques]

//D)
pokemon1.ataques.push(ataque2)

//E)
pokemon2.ataques.push(ataque3)

