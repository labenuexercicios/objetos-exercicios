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

console.log ("Primeiro ator:", filme.elenco[0])
console.log("Ultimo ator:", filme.elenco[3])
console.log("Todas as transmissões do dia:", filme.transmissoesHoje)
console.log("Canal Brasil, horário de transmissão:", filme.transmissoesHoje[1].horario)