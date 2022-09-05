const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

pokemon1.ataques = []
pokemon1.ataques.push({nome: "Investida", dano: 40, tipo: "Normal", precisao: 100})
pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, tipo: "Grama", precisao: 100})
console.log (pokemon1)

const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Àgua"
pokemon2.ataques = []
pokemon2.ataques.push(...pokemon1.ataques)
pokemon2.ataques.pop()
pokemon2.ataques.push({nome: "Jato de Àgua", dano: 40, tipo: "Àgua", precisao: 100})
console.log (pokemon2)

