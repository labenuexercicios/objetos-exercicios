const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//a
console.log("Nome do primeiro ator/atriz da lista:", filme.elenco[0])
//b
console.log("Nome do último ator/atriz da lista:", filme.elenco[3])
//c
console.log("Todas as transmissões:", filme.transmissoesHoje)
//d
console.log("Horario canal brasil:", filme.transmissoesHoje[1].horario)

