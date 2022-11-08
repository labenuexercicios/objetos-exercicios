const ataques = {
	nome: "Investida",
	dano: 40,
	tipo: "Normal",
	precisao: 100,
}

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
	ataques: []
};

pokemon1.ataques.push(ataques);

const pokemon1Copia = {
	nome: "Squirtle",
	tipo: "Água",
	nivel: 5,
	ataques: [...pokemon1.ataques]
};

pokemon1.ataques.push({ 
	nome: "Folha Navalha",
	dano: 45,
	tipo: "“Grama”",
	precisao: 100,
})

pokemon1Copia.ataques.push({ 
	nome: "Jato de Água”",
	dano: 40,
	tipo: "Água",
	precisao: 100,
})

console.log("Original: ", pokemon1);
console.log("Copia: ", pokemon1Copia);