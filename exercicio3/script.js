const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};


//letra A

const novoPokemon = {
  ...pokemon1,
  nome:"Squirtle",
  tipo: "água"
}
console.log(pokemon1)
console.log(novoPokemon)

//letra B

pokemon1.ataques=[]

//letra C-

const ataque = {
  nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}

//pokemon1.ataques.push(ataque)
console.log(pokemon1)

//letra C

pokemon1.ataques.push(ataque)
const ataque2 = {
  ...ataque,
  nome : "Folha Navalha",
  dano : 45,
  precisao:  100,
}


//letra D

novoPokemon.ataques = []
novoPokemon.ataques.push(ataque)
pokemon1.ataques.push(ataque2)

const ataque3 = {
 ...ataque,
 nome: "Jato de água",
 dano:40,
 precisao:100,
 tipo:"água"
}

novoPokemon.ataques.push(ataque3)
console.log(pokemon1)
console.log(novoPokemon)


