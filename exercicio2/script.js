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

//letra A
console.log(filme['elenco'][0])


//letra B

console.log(filme['elenco'][3])

//letra C
console.log(filme['transmissoesHoje'])


//letra D

console.log(filme.transmissoesHoje[1].horario)