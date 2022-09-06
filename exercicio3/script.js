const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
  
  ataques: [{
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100   
  }]
}

const pokemon2 ={
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água"
}

pokemon1.ataques[1]={nome:"Folha Navalha",dano:45,tipo:"Grama",precisao:100}
pokemon2.ataques[1]={nome:"Jato de Água",dano:40,tipo:"Água",precisao:100}


console.log(pokemon1,pokemon2)