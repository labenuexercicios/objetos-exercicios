const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {
...pokemon1,  
}
pokemon2.nome = "Squirtle";
pokemon2.tipo = 'Àgua'
console.log(pokemon2);

pokemon1.ataques = []
//console.log(pokemon1);
//let letraC = pokemon1.ataques.push('nome: "Investida"')

let ataque = {
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}

let ataque2 = {
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Gama",
  precisao: 100  
}

let ataque3 = {
  nome: "Jato de Agua",
  dano: 40,
  tipo: "Agua",
  precisao: 100  
}

pokemon1.ataques.push(ataque) 
 console.log(pokemon1);
 pokemon2.ataques = [...pokemon1.ataques,ataque3]
  pokemon1.ataques.push(ataque2) 
  console.log(pokemon1);

  // pokemon2 = {
  //  ...pokemon1,
  //  ataques : [...pokemon1.ataques,ataque3]
  
  // }
  //
  
 console.log(pokemon2);


